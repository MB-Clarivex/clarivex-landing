#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { getIndexablePages, siteConfig } from '../src/content/seoPages.js';

const LASTMOD = '2026-03-19T00:00:00+00:00';

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toAbsoluteUrl(routePath) {
  return routePath === '/' ? `${siteConfig.url}/` : `${siteConfig.url}${routePath}`;
}

function buildSitemap() {
  const urls = getIndexablePages()
    .map(
      (page) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(page.path))}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || '0.7'}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function main() {
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, buildSitemap(), 'utf8');
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}
