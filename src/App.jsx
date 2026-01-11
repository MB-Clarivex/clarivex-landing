import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import TelegramSection from '@/components/TelegramSection';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfService from '@/components/TermsOfService';
import DataDeletion from '@/components/DataDeletion';
import FAQ from '@/components/FAQ';
import Status from '@/components/Status';
import PricingPage from '@/components/PricingPage';
import { Toaster } from '@/components/ui/toaster';

// Landing page component
function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Clarivex — AI asistentas, kuris supranta lietuviškai</title>
        <meta 
          name="description" 
          content="Pasakyk ką nori — Clarivex padarys. Socialiniai tinklai, el. paštas, priminimai, paveikslėliai — viena balso komanda ir viskas padaryta per sekundes." 
        />
        <meta name="keywords" content="AI asistentas, dirbtinis intelektas, socialiniai tinklai, automatizavimas, Lietuva, lietuviškai, Instagram, Facebook, el. paštas" />
        <meta property="og:title" content="Clarivex — AI asistentas, kuris supranta lietuviškai" />
        <meta property="og:description" content="Pasakyk ką nori — Clarivex padarys. Viena balso komanda ir viskas padaryta per sekundes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clarivex.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex — AI asistentas" />
        <meta name="twitter:description" content="Pasakyk ką nori — Clarivex padarys. AI automatizavimas lietuviškai." />
        <link rel="canonical" href="https://clarivex.ai" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white antialiased">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Benefits />
          <TelegramSection />
          <Pricing />
          <CTA />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privatumas" element={<PrivacyPolicy />} />
      <Route path="/salygos" element={<TermsOfService />} />
      <Route path="/duomenu-istrynimas" element={<DataDeletion />} />
      <Route path="/duk" element={<FAQ />} />
      <Route path="/statusas" element={<Status />} />
      <Route path="/kainos" element={<PricingPage />} />
    </Routes>
    </>
  );
}

export default App;
