#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import {
  clusterDefinitions,
  contentPages,
  existingPageMetadata,
  resourceHubPath,
  siteConfig,
} from '../src/content/seoPages.js';

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toAbsoluteUrl(routePath) {
  return routePath === '/'
    ? `${siteConfig.url}/`
    : `${siteConfig.url}${routePath}`;
}

function generateLlmsTxt() {
  const intro = [
    '# Clarivex',
    '',
    'Clarivex yra AI asistentų platforma lietuvių kalba, skirta smulkiam verslui, komandoms ir specialistams.',
    'Pagrindinės temos: AI asistentas lietuviškai, socialinių tinklų valdymas, AI el. paštui, Telegram, balso komandos ir workflow automatizavimas.',
    '',
    '## Core Pages',
  ];

  const corePages = existingPageMetadata
    .filter((page) => ![resourceHubPath, '/privatumas', '/salygos', '/duomenu-istrynimas'].includes(page.path))
    .map((page) => `- [${page.title}](${page.path}): ${page.description}`);

  const clusterSections = clusterDefinitions.map((cluster) => {
    const pages = contentPages
      .filter((page) => page.cluster === cluster.id)
      .map((page) => `- [${page.title}](${page.path}): ${page.description}`)
      .join('\n');

    return `## ${cluster.label}\n${pages}`;
  });

  return [...intro, ...corePages, '', ...clusterSections, '', '## Canonical URL', `- ${toAbsoluteUrl(resourceHubPath)}`].join('\n');
}

function generateLlmsFullTxt() {
  const sections = [
    '# Clarivex full context',
    '',
    'Clarivex yra AI asistentų platforma lietuvių kalba, skirta darbo eigoms, o ne vien pokalbiams. Platforma apima socialinius tinklus, el. paštą, Telegram, priminimus, užrašus ir kitus veiksmus.',
    '',
    '## Important brand facts',
    '- Clarivex pozicionavimas: AI asistentų platforma lietuvių kalba.',
    '- Pagrindiniai use-case: socialinių tinklų valdymas, AI el. paštui, Telegram AI botas, balso komandos, automatizavimas smulkiam verslui.',
    '- Kainodara: kreditų sistema, daugiau informacijos /kainos.',
    '',
  ];

  const pageSections = clusterDefinitions.map((cluster) => {
    const pages = contentPages
      .filter((page) => page.cluster === cluster.id)
      .map((page) => {
        const highlights = page.highlights.map((item) => `  - ${item}`).join('\n');
        return `- ${page.title} (${toAbsoluteUrl(page.path)})\n  Description: ${page.description}\n${highlights}`;
      })
      .join('\n');

    return `## ${cluster.label}\n${pages}`;
  });

  return [...sections, ...pageSections].join('\n');
}

function writeFile(relativePath, content) {
  const outputPath = path.join(process.cwd(), 'public', relativePath);
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, content, 'utf8');
}

function main() {
  writeFile('llms.txt', generateLlmsTxt());
  writeFile('llms-full.txt', generateLlmsFullTxt());
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}
