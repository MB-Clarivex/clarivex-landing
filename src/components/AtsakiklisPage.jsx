import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AtsakiklisSection from '@/components/AtsakiklisSection';

const AtsakiklisPage = () => {
  const canonicalUrl = 'https://clarivex.ai/atsakiklis';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI atsakiklis Messenger ir Instagram DM — Clarivex',
    url: canonicalUrl,
    description:
      'Išmanus Clarivex AI atsakiklis: Messenger ir Instagram DM, inbox vienoje vietoje, AI juodraščiai ir automatizacija lietuvių kalba. Be atskiro projekto diegimo.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>AI atsakiklis Messenger ir Instagram — Clarivex</title>
        <meta
          name="description"
          content="Atsakykite į Messenger ir Instagram DM greičiau: vienas inbox, AI juodraščiai, taisyklės ir automatizacija lietuvių kalba. Clarivex — jau platformoje, su skaidria kreditų kaina."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="AI atsakiklis Messenger ir Instagram — Clarivex" />
        <meta
          property="og:description"
          content="DM ir komentarai vienoje vietoje, AI siūlomi atsakymai, auto-reply ir ne darbo valandų žinutės. Pradėkite per app.clarivex.ai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex AI atsakiklis" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI atsakiklis Messenger ir Instagram — Clarivex" />
        <meta
          name="twitter:description"
          content="Inbox + AI juodraščiai + automatizacija Meta kanaluose. Lietuviškai, su kreditų sistema."
        />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="pt-20">
          <AtsakiklisSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AtsakiklisPage;
