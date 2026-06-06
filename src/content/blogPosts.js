import generatedPosts from './blogPosts.generated.json';

export function getBlogPosts(language) {
  const posts = Array.isArray(generatedPosts) ? generatedPosts : [];
  if (language === 'lt' || language === 'en') {
    return posts.filter((post) => post.language === language);
  }
  return posts;
}

export function getBlogPostBySlug(slug, language = 'lt') {
  return getBlogPosts(language).find((post) => post.slug === slug) || null;
}

export function getBlogIndexPath(language = 'lt') {
  return language === 'en' ? '/en/blog' : '/blog';
}

export function getBlogPostPath(post) {
  if (!post?.slug) return getBlogIndexPath(post?.language);
  return post.language === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
}

export function getBlogSitemapEntries() {
  const posts = Array.isArray(generatedPosts) ? generatedPosts : [];
  const entries = [
    { path: '/blog', changefreq: 'daily', priority: '0.8' },
    { path: '/en/blog', changefreq: 'daily', priority: '0.8' },
  ];

  for (const post of posts) {
    if (!post?.slug || post.status !== 'published') continue;
    entries.push({
      path: getBlogPostPath(post),
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: post.publishedAt || post.updatedAt || post.createdAt,
    });
  }

  return entries;
}
