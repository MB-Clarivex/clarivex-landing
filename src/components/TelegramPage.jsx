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
    name: 'Clarivex Telegram integracija — AI asistentas kišenėje',
    url: canonicalUrl,
    description: 'Clarivex Telegram botas: balso komandos, priminimai, užrašai ir pirkinių sąrašai. Gaukite +250 kreditų už susiejimą. Pradėkite nemokamai.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Clarivex Telegram AI botas</title>
        <meta
          name="description"
          content="Clarivex Telegram AI botas leidžia naudoti balso komandas, priminimus, užrašus ir AI pagalbą telefone lietuvių kalba."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex Telegram AI botas" />
        <meta property="og:description" content="Balso komandos, priminimai, užrašai ir AI pagalba telefone per Clarivex Telegram botą." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex Telegram" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex Telegram AI botas" />
        <meta name="twitter:description" content="AI asistentas telefone: balso komandos, priminimai ir užrašai per Clarivex Telegram botą." />
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
