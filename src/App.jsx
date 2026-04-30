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

const isServer = import.meta.env.SSR;

function lazyPage(loader) {
  const Component = lazy(loader);
  Component.preload = loader;
  return Component;
}

const pageModules = isServer
  ? import.meta.glob('./components/{PrivacyPolicy,TermsOfService,DataDeletion,FAQ,Status,PricingPage,FeaturesPage,HowItWorksPage,BenefitsPage,TelegramPage,AtsakiklisPage,ResourcesHubPage,SeoResourcePage}.jsx', { eager: true })
  : import.meta.glob('./components/{PrivacyPolicy,TermsOfService,DataDeletion,FAQ,Status,PricingPage,FeaturesPage,HowItWorksPage,BenefitsPage,TelegramPage,AtsakiklisPage,ResourcesHubPage,SeoResourcePage}.jsx');

function createPageComponent(modulePath) {
  const moduleOrLoader = pageModules[modulePath];

  if (!moduleOrLoader) {
    throw new Error(`Missing page module: ${modulePath}`);
  }

  if (isServer) {
    return moduleOrLoader.default;
  }

  return lazyPage(moduleOrLoader);
}

const PrivacyPolicy = createPageComponent('./components/PrivacyPolicy.jsx');
const TermsOfService = createPageComponent('./components/TermsOfService.jsx');
const DataDeletion = createPageComponent('./components/DataDeletion.jsx');
const FAQ = createPageComponent('./components/FAQ.jsx');
const Status = createPageComponent('./components/Status.jsx');
const PricingPage = createPageComponent('./components/PricingPage.jsx');
const FeaturesPage = createPageComponent('./components/FeaturesPage.jsx');
const HowItWorksPage = createPageComponent('./components/HowItWorksPage.jsx');
const BenefitsPage = createPageComponent('./components/BenefitsPage.jsx');
const TelegramPage = createPageComponent('./components/TelegramPage.jsx');
const AtsakiklisPage = createPageComponent('./components/AtsakiklisPage.jsx');
const ResourcesHubPage = createPageComponent('./components/ResourcesHubPage.jsx');
const SeoResourcePage = createPageComponent('./components/SeoResourcePage.jsx');

// Landing page component
function LandingPage() {
  const canonicalUrl = `${siteConfig.url}/`;
  const socialImage = siteConfig.socialImage;
  const landingDescription =
    'Clarivex AI – lietuviškai suprantantis asistentas verslui ir kūrėjams. Automatizuokite tekstus, el. laiškus ir kasdienes užduotis su lanksčia kreditų sistema.';
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
        "name": "Paruošti darbai verslui — Clarivex AI ir kreditų sistema",
        "url": `${siteConfig.url}/`,
        "description": landingDescription,
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
        <title>Paruošti darbai verslui — Clarivex AI ir kreditų sistema</title>
        <meta 
          name="description" 
          content={landingDescription} 
        />
        <meta name="keywords" content="AI asistentas, dirbtinis intelektas, socialiniai tinklai, automatizavimas, Lietuva, lietuviškai, Instagram, Facebook, el. paštas" />
        <meta property="og:title" content="Paruošti darbai verslui — Clarivex AI ir kreditų sistema" />
        <meta property="og:description" content={landingDescription} />
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
        <meta name="twitter:title" content="Clarivex AI verslui — paruošti darbai ir kreditų sistema" />
        <meta name="twitter:description" content={landingDescription} />
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
  { path: '/atsakiklis', component: AtsakiklisPage },
  { path: '/resursai', component: ResourcesHubPage },
  ...contentPages.map((page) => ({
    path: page.path,
    component: SeoResourcePage,
    props: { page },
  })),
];

export const routes = routeDefinitions.map(({ path, component: Component, props }) => ({
  path,
  element: isServer ? (
    <Component {...props} />
  ) : (
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
