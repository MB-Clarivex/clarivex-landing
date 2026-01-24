import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>Kaip veikia — Clarivex</title>
        <meta
          name="description"
          content="Sužinokite, kaip Clarivex veikia: nuo užklausos iki rezultato per kelias sekundes."
        />
        <link rel="canonical" href="https://clarivex.ai/kaip-veikia" />
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
