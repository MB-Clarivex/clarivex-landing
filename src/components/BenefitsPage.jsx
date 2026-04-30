import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';
import { siteConfig } from '@/content/seoPages';

const BenefitsPage = () => {
  const canonicalUrl = `${siteConfig.url}/nauda`;
  const socialImage = siteConfig.socialImage;
  const pageDescription =
    'Clarivex AI padeda taupyti laiką ir automatizuoti komunikaciją lietuvių kalba. Atraskite pagrindines naudas verslui ir individualiems vartotojams.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clarivex AI nauda verslui — laiko taupymas ir automatizavimas',
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <>
      <Helmet>
        <title>Clarivex AI nauda verslui — laiko taupymas ir automatizavimas</title>
        <meta
          name="description"
          content={pageDescription}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex AI nauda verslui — laiko taupymas ir automatizavimas" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex privalumai" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex AI nauda verslui — automatizavimas" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="pt-20">
          <Benefits />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BenefitsPage;
