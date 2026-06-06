import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, SCHEMA_IDS } from '@/content/seoPages';
import {
  getBlogIndexPath,
  getBlogPostPath,
  getBlogPosts,
} from '@/content/blogPosts';

const copy = {
  lt: {
    home: 'Pradžia',
    blog: 'Blogas',
    back: 'Atgal į blogą',
    locale: 'lt_LT',
    lang: 'lt',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    back: 'Back to blog',
    locale: 'en_US',
    lang: 'en',
  },
};

function buildStructuredData(post, canonicalUrl, language) {
  const t = copy[language] || copy.lt;
  const published = post.publishedAt || post.createdAt;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': SCHEMA_IDS.organization,
        name: siteConfig.schemaBrandName,
        url: siteConfig.url,
        logo: siteConfig.logo,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t.home,
            item: `${siteConfig.url}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t.blog,
            item: `${siteConfig.url}${getBlogIndexPath(language)}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: post.seoTitle || post.title,
        description: post.seoDescription || post.summary,
        datePublished: published,
        dateModified: post.updatedAt || published,
        inLanguage: t.lang,
        image: post.imageUrl ? [post.imageUrl] : [siteConfig.socialImage],
        author: {
          '@type': 'Organization',
          name: siteConfig.schemaBrandName,
        },
        publisher: {
          '@id': SCHEMA_IDS.organization,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
    ],
  };
}

function BlogPostPage({ post, language = 'lt' }) {
  if (!post) return null;

  const t = copy[language] || copy.lt;
  const canonicalUrl = `${siteConfig.url}${getBlogPostPath(post)}`;
  const seoTitle = post.seoTitle || post.title;
  const seoDescription = post.seoDescription || post.summary || post.title;
  const structuredData = buildStructuredData(post, canonicalUrl, language);

  const altSlug =
    language === 'lt' ? post.alternateSlug?.en : post.alternateSlug?.lt;
  const altPath =
    altSlug && language === 'lt'
      ? `/en/blog/${altSlug}`
      : altSlug
        ? `/blog/${altSlug}`
        : language === 'lt'
          ? '/en/blog'
          : '/blog';

  const relatedPosts = getBlogPosts(language)
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <html lang={t.lang} />
        <title>{seoTitle} — Clarivex</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang={language === 'lt' ? 'en' : 'lt'} href={`${siteConfig.url}${altPath}`} />
        <link rel="alternate" hrefLang={t.lang} href={canonicalUrl} />
        <meta property="og:title" content={`${seoTitle} — Clarivex`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={t.locale} />
        <meta property="og:image" content={post.imageUrl || siteConfig.socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${seoTitle} — Clarivex`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={post.imageUrl || siteConfig.socialImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white">
        <Header />

        <main className="pt-24 pb-20">
          <article>
            <section className="px-4 py-14 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
              <div className="container mx-auto max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-sm mb-6 text-gray-400">
                  <Link to="/" className="hover:text-white transition-colors">
                    {t.home}
                  </Link>
                  <span>/</span>
                  <Link
                    to={getBlogIndexPath(language)}
                    className="hover:text-white transition-colors"
                  >
                    {t.blog}
                  </Link>
                </div>

                {post.category ? (
                  <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                    {post.category}
                  </div>
                ) : null}

                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  {post.title}
                </h1>

                {post.summary ? (
                  <p className="mt-6 text-lg leading-relaxed text-gray-300">{post.summary}</p>
                ) : null}

                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.featuredImageAlt || post.title}
                    className="mt-10 w-full rounded-3xl border border-gray-800 object-cover max-h-[480px]"
                  />
                ) : null}
              </div>
            </section>

            <section className="px-4 py-14">
              <div className="container mx-auto max-w-4xl">
                <div
                  className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-li:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <Link
                    to={getBlogIndexPath(language)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    ← {t.back}
                  </Link>
                </div>

                {relatedPosts.length > 0 ? (
                  <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">
                      {language === 'en' ? 'More articles' : 'Kiti straipsniai'}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                      {relatedPosts.map((item) => (
                        <Link
                          key={item.id}
                          to={getBlogPostPath(item)}
                          className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5 hover:border-gray-700 transition-colors"
                        >
                          <h3 className="font-medium text-white">{item.title}</h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default BlogPostPage;
