import React, { Suspense, lazy } from 'react';
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
import CookieConsent from '@/components/CookieConsent';
import MetaPixel from '@/components/MetaPixel';
import { contentPages, siteConfig } from '@/content/seoPages';
import { Toaster } from '@/components/ui/toaster';

function lazyPage(loader) {
  const Component = lazy(loader);
  Component.preload = loader;
  return Component;
}

const PrivacyPolicy = lazyPage(() => import('@/components/PrivacyPolicy'));
const TermsOfService = lazyPage(() => import('@/components/TermsOfService'));
const DataDeletion = lazyPage(() => import('@/components/DataDeletion'));
const FAQ = lazyPage(() => import('@/components/FAQ'));
const Status = lazyPage(() => import('@/components/Status'));
const PricingPage = lazyPage(() => import('@/components/PricingPage'));
const FeaturesPage = lazyPage(() => import('@/components/FeaturesPage'));
const HowItWorksPage = lazyPage(() => import('@/components/HowItWorksPage'));
const BenefitsPage = lazyPage(() => import('@/components/BenefitsPage'));
const TelegramPage = lazyPage(() => import('@/components/TelegramPage'));
const ResourcesHubPage = lazyPage(() => import('@/components/ResourcesHubPage'));
const SeoResourcePage = lazyPage(() => import('@/components/SeoResourcePage'));

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
        "name": "Clarivex AI - lietuviškai suprantantis AI asistentas verslui",
        "url": `${siteConfig.url}/`,
        "description": "Clarivex AI padeda automatizuoti el. paštą, social media, priminimus ir kitas kasdienes užduotis lietuvių kalba.",
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
        <title>Clarivex AI - lietuviškai suprantantis AI asistentas verslui</title>
        <meta 
          name="description" 
          content="Clarivex AI padeda automatizuoti el. paštą, social media, priminimus ir kitas kasdienes užduotis lietuvių kalba. Išbandykite be mėnesinio plano." 
        />
        <meta name="keywords" content="AI asistentas, dirbtinis intelektas, socialiniai tinklai, automatizavimas, Lietuva, lietuviškai, Instagram, Facebook, el. paštas" />
        <meta property="og:title" content="Clarivex AI - lietuviškai suprantantis AI asistentas verslui" />
        <meta property="og:description" content="Automatizuokite el. paštą, social media, priminimus ir kasdienius workflow su Clarivex AI lietuvių kalba." />
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
        <meta name="twitter:title" content="Clarivex AI - AI asistentas lietuvių kalba" />
        <meta name="twitter:description" content="Automatizuokite el. paštą, social media, priminimus ir kasdienius workflow su Clarivex AI lietuvių kalba." />
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

export const routeDefinitions = [
  { path: '/', component: LandingPage },
  { path: '/privatumas', component: PrivacyPolicy },
  { path: '/salygos', component: TermsOfService },
  { path: '/duomenu-istrynimas', component: DataDeletion },
  { path: '/duk', component: FAQ },
  { path: '/statusas', component: Status },
  { path: '/kainos', component: PricingPage },
  { path: '/features', component: FeaturesPage },
  { path: '/kaip-veikia', component: HowItWorksPage },
  { path: '/nauda', component: BenefitsPage },
  { path: '/telegram', component: TelegramPage },
  { path: '/resursai', component: ResourcesHubPage },
  ...contentPages.map((page) => ({
    path: page.path,
    component: SeoResourcePage,
    props: { page },
  })),
];

export const routes = routeDefinitions.map(({ path, component: Component, props }) => ({
  path,
  element: (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  ),
}));

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
