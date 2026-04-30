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
    name: 'Kaip veikia Clarivex AI integracijos ir kreditų sistema',
    url: canonicalUrl,
    description: 'Integracija ir kreditų sistema: nuo užklausos lietuvių kalba iki paruošto rezultato el. paštui, socialiniams tinklams ir Telegram.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Kaip veikia Clarivex AI integracijos ir kreditų sistema</title>
        <meta
          name="description"
          content="Kaip veikia Clarivex AI integracija: kreditų sistema, el. paštas, socialiniai tinklai ir Telegram. Žingsniai nuo užklausos iki rezultato."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Kaip veikia Clarivex AI integracijos ir kreditų sistema" />
        <meta property="og:description" content="Kreditų sistema, integracijos ir žingsniai nuo užklausos iki paruošto rezultato social media, el. paštui ir Telegram." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex — AI asistentas" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaip veikia Clarivex AI — integracijos ir kreditai" />
        <meta name="twitter:description" content="Kreditai, el. paštas, socialiniai tinklai ir Telegram: kaip Clarivex AI paverčia užklausą konkrečiu veiksmu." />
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
