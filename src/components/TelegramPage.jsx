import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TelegramSection from '@/components/TelegramSection';

const TelegramPage = () => {
  const canonicalUrl = 'https://clarivex.ai/telegram';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clarivex Telegram AI botas - balso komandos ir priminimai',
    url: canonicalUrl,
    description: 'Clarivex Telegram AI botas leidžia naudoti balso komandas, priminimus, užrašus ir AI pagalbą telefone lietuvių kalba.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Telegram AI botas — balsas, priminimai ir kreditai</title>
        <meta
          name="description"
          content="Clarivex Telegram botas: balso komandos lietuviškai, priminimai ir užduotys telefone. Ta pati kreditų sąskaita kaip naršyklėje — žr. kainodarą."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Telegram AI botas — balsas, priminimai ir kreditai" />
        <meta property="og:description" content="Valdykite Clarivex balsu iš telefono: priminimai, sąrašai ir AI užduotys. Kreditai tie patys kaip aplikacijoje." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex Telegram" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telegram AI botas — Clarivex" />
        <meta name="twitter:description" content="Balso komandos ir priminimai telefone. Susiejimas su ta pačia Clarivex paskyra ir kreditų sistema." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="pt-20">
          <TelegramSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TelegramPage;
