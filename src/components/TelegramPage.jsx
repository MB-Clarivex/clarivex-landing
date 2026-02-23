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
        <title>Telegram integracija — Clarivex AI</title>
        <meta
          name="description"
          content="Clarivex Telegram botas: balso komandos, priminimai, užrašai ir AI asistentas telefone. Gaukite +250 kreditų už susiejimą. Pradėkite dabar."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Telegram integracija — Clarivex AI" />
        <meta property="og:description" content="AI asistentas tavo kišenėje. Balso komandos, priminimai ir daugiau per Telegram. Gaukite bonus kreditų už susiejimą." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex Telegram" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telegram integracija — Clarivex AI" />
        <meta name="twitter:description" content="AI asistentas kišenėje. Balso komandos ir priminimai per Telegram." />
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
