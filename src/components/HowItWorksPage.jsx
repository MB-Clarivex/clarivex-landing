import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const HowItWorksPage = () => {
  const canonicalUrl = 'https://clarivex.ai/kaip-veikia';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kaip veikia Clarivex — nuo idėjos iki rezultato per 10 sekundžių',
    url: canonicalUrl,
    description: 'Sužinokite, kaip Clarivex veikia: 4 paprasti žingsniai nuo užklausos iki rezultato. Balsu ar tekstu — AI apdoroja akimirksniu.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Kaip veikia Clarivex AI</title>
        <meta
          name="description"
          content="Sužinokite, kaip veikia Clarivex AI: nuo užklausos lietuvių kalba iki paruošto rezultato socialiniams tinklams, el. paštui ar kitam veiksmui."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Kaip veikia Clarivex AI" />
        <meta property="og:description" content="Nuo užklausos lietuvių kalba iki paruošto rezultato socialiniams tinklams, el. paštui ar kitam workflow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex — AI asistentas" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaip veikia Clarivex AI" />
        <meta name="twitter:description" content="Sužinokite, kaip Clarivex AI paverčia užklausą lietuvių kalba į konkretų veiksmą ar paruoštą rezultatą." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="pt-20">
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowItWorksPage;
