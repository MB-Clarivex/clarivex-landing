import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TelegramSection from '@/components/TelegramSection';

const TelegramPage = () => {
  return (
    <>
      <Helmet>
        <title>Telegram integracija — Clarivex</title>
        <meta
          name="description"
          content="Clarivex Telegram integracija: balso komandos, priminimai ir AI asistentas telefone."
        />
        <link rel="canonical" href="https://clarivex.ai/telegram" />
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
