import React from 'react';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';
import PapildymoSection from '@/components/PapildymoSection';
import ReferralSection from '@/components/ReferralSection';
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
import CookieConsent from '@/components/CookieConsent';
import MetaPixel from '@/components/MetaPixel';
import ResourcesHubPage from '@/components/ResourcesHubPage';
import SeoResourcePage from '@/components/SeoResourcePage';
import { contentPages, siteConfig } from '@/content/seoPages';
import { Toaster } from '@/components/ui/toaster';

// Landing page component
function LandingPage() {
  const canonicalUrl = `${siteConfig.url}/`;
  const socialImage = siteConfig.socialImage;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": `${siteConfig.url}/`,
        "logo": siteConfig.logo,
        "sameAs": siteConfig.sameAs,
        "email": siteConfig.supportEmail
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "name": siteConfig.name,
        "url": `${siteConfig.url}/`,
        "inLanguage": siteConfig.language,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        "name": "Clarivex AI asistentas lietuvių kalba verslui",
        "url": `${siteConfig.url}/`,
        "description": "Clarivex yra AI asistentas lietuvių kalba, padedantis greičiau kurti turinį, atsakyti į el. laiškus ir automatizuoti kasdienius verslo veiksmus.",
        "inLanguage": siteConfig.language,
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Clarivex",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI asistentų platforma lietuvių kalba socialiniams tinklams, el. paštui, Telegram, priminimams ir kasdieniam verslo automatizavimui.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "1",
          "url": `${siteConfig.url}/kainos`,
          "description": "Clarivex kreditų sistema prasideda nuo 1 €."
        },
        "featureList": [
          "AI asistentas lietuvių kalba",
          "Socialinių tinklų turinio kūrimas ir publikavimas",
          "AI el. paštui ir atsakymams",
          "Telegram AI botas",
          "Balso komandos ir priminimai"
        ],
        "provider": {
          "@id": `${siteConfig.url}/#organization`
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Clarivex AI asistentas lietuvių kalba verslui</title>
        <meta 
          name="description" 
          content="Clarivex yra AI asistentas lietuvių kalba verslui. Greičiau kurkite turinį, atsakykite į el. laiškus ir automatizuokite kasdienes užduotis vienoje platformoje." 
        />
        <meta name="keywords" content="AI asistentas, dirbtinis intelektas, socialiniai tinklai, automatizavimas, Lietuva, lietuviškai, Instagram, Facebook, el. paštas" />
        <meta property="og:title" content="Clarivex AI asistentas lietuvių kalba verslui" />
        <meta property="og:description" content="AI asistentas socialiniams tinklams, el. paštui, Telegram ir kasdieniam verslo automatizavimui lietuvių kalba." />
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
        <meta name="twitter:title" content="Clarivex AI asistentas lietuvių kalba" />
        <meta name="twitter:description" content="AI asistentas lietuvių kalba socialiniams tinklams, el. paštui ir kasdieniam verslo automatizavimui." />
        <meta name="twitter:image" content={socialImage} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white antialiased">
        <Header />
        <main>
          <Hero />
          <div className="cvx-content-visibility">
            <Features />
            <StatsSection />
            <QuickLinks />
            <PapildymoSection />
            <ReferralSection />
            <CTA />
            <SeoContent />
          </div>
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
  { path: '/resursai', element: <ResourcesHubPage /> },
  ...contentPages.map((page) => ({
    path: page.path,
    element: <SeoResourcePage page={page} />,
  })),
];

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      {routing}
      <CookieConsent />
      <MetaPixel />
    </>
  );
}

export default App;
