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
    name: 'AI atsakiklis Messenger, Instagram DM ir komentarams — Clarivex',
    url: canonicalUrl,
    description:
      'Clarivex AI atsakiklis: Messenger, Instagram DM ir komentarai, skirtingos taisyklės žinutėms ir komentarams, darbo grafikas, 4 val. pertrauka po jūsų atsakymo, nemokama pagalba pirmam paleidimui.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  return (
    <>
      <Helmet>
        <title>AI atsakiklis Messenger, Instagram DM ir komentarams — Clarivex</title>
        <meta
          name="description"
          content="DM, Messenger ir komentarai vienoje vietoje. Skirtingos taisyklės žinutėms ir komentarams, darbo valandos, po jūsų atsakymo AI 4 val. nebekiša į pokalbį. Nemokama pagalba pirmam paleidimui. Lietuviškai, kreditų sistema."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="AI atsakiklis Messenger, DM ir komentarams — Clarivex" />
        <meta
          property="og:description"
          content="Atsakykite į žinutes ir komentarus su AI: grafikas, atskiros taisyklės, 4 val. po žmogaus atsakymo. Pirmam paleidimui — nemokama pagalba."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex AI atsakiklis" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI atsakiklis Messenger, DM ir komentarams — Clarivex" />
        <meta
          name="twitter:description"
          content="DM, komentarai, darbo grafikas, skirtingos taisyklės, 4 val. po jūsų atsakymo. Nemokama pagalba pirmam paleidimui."
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
