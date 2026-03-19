import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';

const BenefitsPage = () => {
  const canonicalUrl = 'https://clarivex.ai/nauda';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clarivex privalumai — mažiau darbo, daugiau rezultatų',
    url: canonicalUrl,
    description: 'Sutaupykite 10+ valandų per savaitę. Clarivex suteikia verslui efektyvumą, automatizavimą ir laiko taupymą. Pradėkite nemokamai.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Clarivex AI nauda verslui</title>
        <meta
          name="description"
          content="Sužinokite, kokią naudą Clarivex AI suteikia verslui: mažiau rutinos, greitesnė komunikacija ir daugiau aiškumo kasdieniuose workflow."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex AI nauda verslui" />
        <meta property="og:description" content="Mažiau rutinos, greitesnė komunikacija ir aiškesni workflow su Clarivex AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex privalumai" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex AI nauda verslui" />
        <meta name="twitter:description" content="Mažiau rutinos ir daugiau rezultato: sužinokite, kaip Clarivex AI padeda verslui kasdienėse užduotyse." />
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
