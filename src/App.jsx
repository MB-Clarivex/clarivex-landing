import React from 'react';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import SeoContent from '@/components/SeoContent';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfService from '@/components/TermsOfService';
import DataDeletion from '@/components/DataDeletion';
import FAQ from '@/components/FAQ';
import Status from '@/components/Status';
import PricingPage from '@/components/PricingPage';
import FeaturesPage from '@/components/FeaturesPage';
import HowItWorksPage from '@/components/HowItWorksPage';
import BenefitsPage from '@/components/BenefitsPage';
import TelegramPage from '@/components/TelegramPage';
import { Toaster } from '@/components/ui/toaster';

// Landing page component
function LandingPage() {
  const canonicalUrl = 'https://clarivex.ai/';
  const socialImage = 'https://clarivex.ai/og.svg';
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://clarivex.ai/#organization",
        "name": "Clarivex",
        "url": "https://clarivex.ai/",
        "logo": "https://clarivex.ai/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://clarivex.ai/#website",
        "name": "Clarivex",
        "url": "https://clarivex.ai/",
        "inLanguage": "lt-LT",
        "publisher": {
          "@id": "https://clarivex.ai/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://clarivex.ai/#webpage",
        "name": "Clarivex — AI asistentas, kuris supranta lietuviškai",
        "url": "https://clarivex.ai/",
        "description": "Pasakyk ką nori — Clarivex padarys. Socialiniai tinklai, el. paštas, priminimai, paveikslėliai — viena balso komanda ir viskas padaryta per sekundes.",
        "inLanguage": "lt-LT",
        "isPartOf": {
          "@id": "https://clarivex.ai/#website"
        }
      }
    ]
  };

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
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex logotipas" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex — AI asistentas" />
        <meta name="twitter:description" content="Pasakyk ką nori — Clarivex padarys. AI automatizavimas lietuviškai." />
        <meta name="twitter:image" content={socialImage} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white antialiased">
        <Header />
        <main>
          <Hero />
          <Features />
          <StatsSection />
          <QuickLinks />
          <CTA />
          <SeoContent />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/privatumas', element: <PrivacyPolicy /> },
  { path: '/salygos', element: <TermsOfService /> },
  { path: '/duomenu-istrynimas', element: <DataDeletion /> },
  { path: '/duk', element: <FAQ /> },
  { path: '/statusas', element: <Status /> },
  { path: '/kainos', element: <PricingPage /> },
  { path: '/features', element: <FeaturesPage /> },
  { path: '/kaip-veikia', element: <HowItWorksPage /> },
  { path: '/nauda', element: <BenefitsPage /> },
  { path: '/telegram', element: <TelegramPage /> },
];

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      {routing}
    </>
  );
}

export default App;
