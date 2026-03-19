import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Helmet } from 'react-helmet';
import { createServer } from 'vite';

process.env.NODE_ENV = 'production';

const distDir = path.resolve(process.cwd(), 'dist');

const removeHeadTags = (html) => {
  const patterns = [
    /<title>[\s\S]*?<\/title>\s*/gi,
    /<meta\s+name="description"[^>]*>\s*/gi,
    /<meta\s+name="keywords"[^>]*>\s*/gi,
    /<meta\s+property="og:[^"]+"[^>]*>\s*/gi,
    /<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi,
    /<link\s+rel="canonical"[^>]*>\s*/gi,
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi,
  ];

  return patterns.reduce((result, pattern) => result.replace(pattern, ''), html);
};

const renderRoute = (routePath, App) => {
  const app = React.createElement(
    StaticRouter,
    { location: routePath },
    React.createElement(App)
  );

  const appHtml = renderToString(app);
  const helmet = Helmet.renderStatic();
  const helmetHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('');

  return { appHtml, helmetHtml };
};

const writeRouteHtml = async (template, routePath, appHtml, helmetHtml) => {
  const baseTemplate = removeHeadTags(template);
  const htmlWithApp = baseTemplate.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${appHtml}</div>`
  );
  const htmlWithHead = htmlWithApp.replace('</head>', `${helmetHtml}</head>`);

  const outputDir =
    routePath === '/' ? distDir : path.join(distDir, routePath.replace(/^\//, ''));
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'index.html'), htmlWithHead, 'utf8');
};

const run = async () => {
  console.log('[prerender] Starting prerender...');
  console.log(`[prerender] Dist dir: ${distDir}`);
  const vite = await createServer({
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const templatePath = path.join(distDir, 'index.html');
  const template = await fs.readFile(templatePath, 'utf8');
  const { default: App, routeDefinitions } = await vite.ssrLoadModule('/src/App.jsx');
  const routePaths = routeDefinitions
    .map((route) => route.path)
    .filter((routePath) => typeof routePath === 'string');
  console.log(`[prerender] Routes: ${routePaths.join(', ')}`);

  await Promise.all(
    routeDefinitions.map(async ({ path: routePath, component }) => {
      if (typeof component?.preload === 'function') {
        await component.preload();
      }
      const { appHtml, helmetHtml } = renderRoute(routePath, App);
      await writeRouteHtml(template, routePath, appHtml, helmetHtml);
    })
  );

  await vite.close();
  console.log('[prerender] Done.');
};

run().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
