import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';

const BenefitsPage = () => {
  const canonicalUrl = 'https://clarivex.ai/nauda';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clarivex AI nauda verslui — laiko taupymas ir automatizavimas',
    url: canonicalUrl,
    description: 'Nauda verslui lietuvių kalba: mažiau rutinos, greitesnė komunikacija, paruošti juodraščiai ir aiškūs kasdieniai workflow.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>Clarivex AI nauda verslui — laiko taupymas ir automatizavimas</title>
        <meta
          name="description"
          content="Nauda verslui lietuvių kalba: mažiau rutinos, greitesnė komunikacija, paruošti juodraščiai. Sužinokite, kam tinka Clarivex."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex AI nauda verslui — laiko taupymas ir automatizavimas" />
        <meta property="og:description" content="Mažiau rutinos ir daugiau rezultato: Clarivex sutrumpina kasdienę komunikaciją ir turinio darbus lietuvių kalba." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex privalumai" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex AI nauda verslui — automatizavimas" />
        <meta name="twitter:description" content="Laiko taupymas ir komunikacijos automatika: kam naudinga ir kokius darbus Clarivex perima už jus." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
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
