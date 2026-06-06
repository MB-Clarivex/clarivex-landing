#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const DEFAULT_API_URL = 'https://app.clarivex.ai/api/public/blog';
const OUTPUT_PATH = path.join(process.cwd(), 'src/content/blogPosts.generated.json');

function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function fetchBlogPosts() {
  const apiUrl = process.env.BLOG_API_URL || DEFAULT_API_URL;

  try {
    const res = await fetch(apiUrl, {
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      console.warn(`[fetch-blog] API returned ${res.status}, using empty list`);
      return [];
    }

    const data = await res.json();
    const posts = Array.isArray(data?.posts) ? data.posts : [];
    console.log(`[fetch-blog] Fetched ${posts.length} published posts from ${apiUrl}`);
    return posts;
  } catch (error) {
    console.warn('[fetch-blog] Fetch failed, using empty list:', error?.message || error);
    return [];
  }
}

async function main() {
  const posts = await fetchBlogPosts();
  ensureDirectoryExists(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  console.log(`[fetch-blog] Wrote ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error('[fetch-blog] Fatal error:', error);
  ensureDirectoryExists(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, '[]\n', 'utf8');
  process.exit(0);
});
