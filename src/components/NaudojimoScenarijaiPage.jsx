import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, getPrimaryPageMeta } from '@/content/seoPages';

const blocks = [
  {
    title: 'Mažoms įmonėms ir e‑komercijai',
    paragraphs: [
      'Clarivex AI sumažina rutiną: el. laiškų juodraščiai, socialinių tinklų kalendorius ir priminimai lietuvių kalba.',
      'Viena integracija — aiški kreditų sistema be abonemento.',
    ],
    bullets: [
      'Greitesni atsakymai klientams ir nuoseklesnis tonas',
      'Postai ir akcijos suplanuoti iš anksto',
      'Mažiau šokinėjimo tarp kelių įrankių',
    ],
  },
  {
    title: 'Agentūroms ir komandoms',
    paragraphs: [
      'Kelios paskyros ir aiškūs workflow leidžia kartoti kokybę skirtingiems klientams.',
      'AI pagalba kuriant turinį ir atsakant į pasikartojančius klausimus.',
    ],
    bullets: [
      'Greitesnis turinio paruošimas keliems kanalams',
      'Vienodas terminas ir stilius visuose projektuose',
      'Lanksti Clarivex kreditų sistema pagal realų apkrovimą',
    ],
  },
  {
    title: 'Individualiems specialistams ir freelanceriams',
    paragraphs: [
      'Telefone — balsu per Telegram. Prie kompiuterio — naršyklėje su ta pačia AI automatika.',
      'Mokate tik už paleistas užduotis: žr. kainodarą ir kreditų pavyzdžius.',
    ],
    bullets: [
      'Priminimai ir užrašai be rankinio perkėliojimo',
      'Greiti juodraščiai sutartims ir laiškams',
      'Pradžia su nemokamais kreditais — be įsipareigojimų',
    ],
  },
];

const NaudojimoScenarijaiPage = () => {
  const canonicalUrl = `${siteConfig.url}/naudojimo-scenarijai`;
  const socialImage = siteConfig.socialImage;
  const fm = getPrimaryPageMeta('/naudojimo-scenarijai');
  const pageTitle = fm?.title ?? 'Clarivex AI naudojimo scenarijai';
  const pageDescription =
    fm?.description ??
    'Tipiniai Clarivex AI naudojimo atvejai verslui ir specialistams lietuvių kalba.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex AI naudojimo scenarijai" />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm text-blue-300 mb-4">
              <Link to="/" className="hover:text-white">
                Pradžia
              </Link>
              <span className="text-gray-600"> / </span>
              <span className="text-gray-300">Naudojimo scenarijai</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Clarivex AI naudojimo scenarijai
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Žemiau — trys dažniausi kontekstai. Detalesnę įrankių apžvalgą rasite puslapyje{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Clarivex AI funkcijos
              </Link>
              .{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Clarivex AI kainos ir kreditų sistema
              </Link>{' '}
              padės įvertinti sąnaudas.
            </p>

            <div className="space-y-12">
              {blocks.map((block) => (
                <article
                  key={block.title}
                  className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 md:p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">{block.title}</h2>
                  {block.paragraphs.map((p) => (
                    <p key={p} className="text-gray-400 mb-3 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-4">
                    {block.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-2xl border border-blue-500/25 bg-blue-500/5 p-6 text-center">
              <p className="text-gray-300 mb-4">
                Turite klausimų apie integraciją ar kreditus? Peržiūrėkite{' '}
                <Link to="/duk" className="text-blue-400 hover:text-blue-300 font-medium">
                  Clarivex DUK
                </Link>{' '}
                ir{' '}
                <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">
                  kaip veikia Clarivex AI
                </Link>
                .
              </p>
              <a
                href="https://app.clarivex.ai/auth"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-colors"
              >
                Išbandyti Clarivex
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NaudojimoScenarijaiPage;
