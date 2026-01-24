import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';

const BenefitsPage = () => {
  return (
    <>
      <Helmet>
        <title>Privalumai — Clarivex</title>
        <meta
          name="description"
          content="Sužinokite, kokią naudą Clarivex suteikia verslui: efektyvumas, automatizavimas ir laiko taupymas."
        />
        <link rel="canonical" href="https://clarivex.ai/nauda" />
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
