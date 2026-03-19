import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, CreditCard, Bot, Shield, Zap, HelpCircle, MessageCircle } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    title: 'Bendri klausimai',
    icon: HelpCircle,
    questions: [
      {
        q: 'Kas yra Clarivex?',
        a: 'Clarivex yra dirbtinio intelekto (AI) asistentų platforma, leidžianti automatizuoti kasdienius darbus: kurti ir publikuoti turinį socialiniuose tinkluose, valdyti el. paštą, nustatyti priminimus, generuoti paveikslėlius ir daug daugiau. Platforma palaiko lietuvių kalbą ir balso komandas.'
      },
      {
        q: 'Ar Clarivex supranta lietuviškai?',
        a: 'Taip! Clarivex puikiai supranta lietuvių kalbą – tiek rašytinę, tiek balso komandas. Galite bendrauti natūraliai, kaip su tikru asistentu.'
      },
      {
        q: 'Kokias platformas palaiko Clarivex?',
        a: 'Šiuo metu palaikome: Instagram (postai, Stories, Reels, carousel), Facebook (puslapiai), Telegram botą ir Shopify blogus. El. paštui – IMAP/SMTP (Gmail, Outlook ir kt. per App Password). Nuolat dirbame prie naujų integracijų.'
      },
      {
        q: 'Ar galiu naudotis Clarivex mobiliajame telefone?',
        a: 'Taip! Clarivex veikia bet kurioje naršyklėje, taip pat turime Telegram botą, kuris leidžia valdyti platformą tiesiogiai iš Telegram programėlės – idealiai tinka mobiliajam naudojimui.'
      },
    ]
  },
  {
    id: 'pricing',
    title: 'Kainodara ir mokėjimai',
    icon: CreditCard,
    questions: [
      {
        q: 'Kiek kainuoja Clarivex?',
        a: 'Clarivex veikia kreditų sistema — be mėnesinių mokesčių ir be kontraktų. Papildai kreditus tada, kai reikia: 1 € = 1 000 kreditų. Nauji vartotojai gauna iki 1 000 nemokamų kreditų startui, kad galėtų realiai viską išbandyti be rizikos.'
      },
      {
        q: 'Ką galiu padaryti su 1 000 kreditų?',
        a: 'Su 1 000 kreditų (~1 €) gali: parašyti ~100 AI žinučių su GPT-4.1 mini arba ~30 su GPT-5.1, sugeneruoti ~8 paveikslėlių (Nano Banana 2, pro kokybė), transkribuoti ~80 min. balso arba atlikti ~50 web paieškų. Net nedidelė suma leidžia labai daug išbandyti. Patarimas: naudojant GPT-4.1 mini modelį kreditai trunka kelis kartus ilgiau, o kokybė kasdienėms užduotims — puiki.'
      },
      {
        q: 'Ar kreditai baigiasi?',
        a: 'Ne! Nepanaudoti kreditai niekada nesibaigia – jie lieka jūsų paskyroje neribotą laiką. Nėra jokių mėnesinių mokesčių ar prenumeratų.'
      },
      {
        q: 'Kokius mokėjimo būdus priimate?',
        a: 'Priimame visas pagrindines mokėjimo korteles (Visa, Mastercard, American Express) per saugią Stripe sistemą. Mokėjimai apdorojami iš karto, kreditai pridedami akimirksniu.'
      },
      {
        q: 'Ar galiu gauti sąskaitą faktūrą?',
        a: 'Taip! Po kiekvieno mokėjimo automatiškai išsiunčiame sąskaitą faktūrą el. paštu. Taip pat galite atsisiųsti visas sąskaitas iš savo paskyros nustatymų.'
      },
      {
        q: 'Ar grąžinate pinigus?',
        a: 'Kreditai nėra grąžinami, išskyrus atvejus, kai paslauga neveikė dėl mūsų kaltės. Jei susidūrėte su problema, susisiekite su mumis per 14 dienų – visada stengiamės rasti sprendimą.'
      },
    ]
  },
  {
    id: 'ai',
    title: 'AI ir funkcijos',
    icon: Bot,
    questions: [
      {
        q: 'Kokie AI modeliai naudojami?',
        a: 'Naudojame OpenAI modelius tekstui (GPT-5.2, GPT-5.1, GPT-4.1 mini); Nano Banana 2 (Gemini) paveikslėliams – pro kokybė, puikiai rašo tekstą; OpenAI fallback (GPT Image, DALL-E); Whisper balso transkripcijai. Galite patys pasirinkti modelį kiekviename pokalbyje!'
      },
      {
        q: 'Kurį AI modelį pasirinkti?',
        a: 'GPT-4.1 mini (numatytasis) — idealus kasdienėms užduotims: paprasti pokalbiai, el. laiškai, receptai, patarimai, vertimai. Greitas ir ekonomiškas. GPT-5.1 — sudėtingesniems darbams: ilgų dokumentų analizė, failų su paveikslėliais analizė, programavimas. GPT-5.2 — maksimali kokybė: mokslinė analizė, sudėtingas loginis mąstymas. Patarimas: pradėkite nuo mini — jei rezultatas netenkina, perjunkite į 5.1 ar 5.2.'
      },
      {
        q: 'Ar AI prisimena mano ankstesnius pokalbius?',
        a: 'Taip! Clarivex turi ilgalaikę atmintį. Galite pasakyti "atsimink, kad..." ir AI prisimins šią informaciją visuose būsimuose pokalbiuose. Taip pat automatiškai mokosi iš jūsų bendravimo stiliaus.'
      },
      {
        q: 'Ar galiu generuoti paveikslėlius?',
        a: 'Taip! Naudojame Nano Banana 2 (Gemini) – pro kokybė, 2K rezoliucija, puikiai rašo tekstą ant paveikslėlių (lietuviškai ir anglų). Tiesiog aprašykite, ko norite. OpenAI (GPT Image, DALL-E) – fallback, kai Gemini neprieinamas.'
      },
      {
        q: 'Kaip veikia balso komandos?',
        a: 'Tiesiog paspauskite mikrofono mygtuką ir kalbėkite lietuviškai. AI automatiškai transkribuos jūsų balsą ir atliks užklausą. Veikia ir per Telegram botą!'
      },
      {
        q: 'Ką galiu pasakyti Clarivex? Kokie raktazodžiai veikia?',
        a: 'Šios komandos veikia visur Clarivex platformoje — naršyklėje (app.clarivex.ai) ir Telegram. Clarivex supranta natūralią kalbą. Pradėkite nuo šių frazių:\n\n• Primink — priminimui su laiku (pvz. "Primink rytoj 9:00 paskambinti")\n• Atsimink / Prisimink — įsiminti informaciją apie save (pvz. "Atsimink mano vardas Jonas")\n• Užsirašyk / Pasižymėk — paprastas užrašas (pvz. "Užsirašyk kad Jonas nori pasiūlymo")\n• Pirkinių sąrašas / Pridėk į sąrašą — pirkinių krepšelis (pvz. "Pridėk pieno ir duonos")\n• Sukurk postą — social media postas (pvz. "Sukurk postą apie akciją")\n• Turiu idėją — išsaugoti idėją (pvz. "Turiu idėją postui apie vasarą")\n• Sugeneruok paveikslėlį — AI vaizdo generavimas\n• Papildyk X užrašą — pridėti info į esamą užrašą (pvz. "Papildyk Jono užrašą: jis atidavė 100€")\n• Kas su X? / Parodyk X užrašą — peržiūrėti užrašą\n• Sukurk pasiūlymą / Sukurk sutartį — dokumentų generavimas\n\nGalite kalbėti balsu ar rašyti tekstu — bet kurioje platformoje.'
      },
      {
        q: 'Ar AI gali analizuoti mano dokumentus?',
        a: 'Taip! Galite įkelti PDF, Word, Excel ir kitus failus. AI juos išanalizuos ir galės atsakyti į klausimus apie dokumento turinį, apibendrinti informaciją ar išgauti konkrečius duomenis.'
      },
    ]
  },
  {
    id: 'social',
    title: 'Socialiniai tinklai',
    icon: Zap,
    questions: [
      {
        q: 'Kaip prijungti Instagram/Facebook paskyrą?',
        a: 'Eikite į Socialinių tinklų skyrių → Paskyros → Prijungti naują. Būsite nukreipti į Meta (Facebook) prisijungimą, kur suteiksite leidimus. Svarbu: Instagram turi būti Business arba Creator tipo paskyra, susieta su Facebook puslapiu.'
      },
      {
        q: 'Ar galiu planuoti postus į ateitį?',
        a: 'Taip! Galite suplanuoti postus bet kuriam laikui į ateitį. Naudokite kalendoriaus vaizdą, kad matytumėte visus suplanuotus postus, arba nustatykite pasikartojančius laiko tarpus automatiniam publikavimui.'
      },
      {
        q: 'Ar palaikote Instagram Stories ir Reels?',
        a: 'Taip! Palaikome ir Stories, ir Reels. Stories – viena nuotrauka arba video (9:16 formatas). Reels – įkelkite video ir publikuokite kaip Reel. Abu veikia ir Instagram, ir Facebook.'
      },
      {
        q: 'Kiek nuotraukų galiu įkelti į vieną postą?',
        a: 'Galite įkelti iki 10 nuotraukų/video į vieną postą (carousel). Tai Instagram limitas, kurį palaikome pilnai.'
      },
      {
        q: 'Kodėl mano postas nepublikavosi?',
        a: 'Dažniausios priežastys: 1) Pasibaigė prieigos rakto galiojimas – perjunkite paskyrą iš naujo; 2) Instagram API klaida – bandykite dar kartą; 3) Turinys pažeidžia platformos taisykles. Patikrinkite klaidos pranešimą kalendoriuje.'
      },
    ]
  },
  {
    id: 'security',
    title: 'Saugumas ir privatumas',
    icon: Shield,
    questions: [
      {
        q: 'Ar mano duomenys saugūs?',
        a: 'Taip! Naudojame šiuolaikinius saugumo standartus: SSL/TLS šifravimą, duomenų šifravimą ramybės būsenoje, reguliarias saugumo peržiūras. Jūsų duomenys saugomi ES serveriuose pagal BDAR reikalavimus.'
      },
      {
        q: 'Ar Clarivex mato mano slaptažodžius?',
        a: 'Ne. Socialinių tinklų prisijungimai vyksta per oficialų OAuth. El. paštui naudojate IMAP/SMTP arba App Password – mes nematome ir nesaugome jūsų slaptažodžių.'
      },
      {
        q: 'Ar galiu ištrinti savo duomenis?',
        a: 'Taip! Pagal BDAR turite teisę būti pamirštas. Galite pateikti prašymą per mūsų duomenų ištrynimo puslapį arba parašyti el. laišką info@clarivex.ai. Duomenys bus ištrinti per 30 dienų.'
      },
      {
        q: 'Ar mano pokalbiai su AI naudojami AI mokymui?',
        a: 'Mes nenaudojame jūsų duomenų AI modelių mokymui. Jūsų pokalbiai naudojami tik paslaugos teikimui ir jūsų asmeninei AI atminčiai.'
      },
    ]
  },
  {
    id: 'support',
    title: 'Pagalba ir kontaktai',
    icon: MessageCircle,
    questions: [
      {
        q: 'Kaip susisiekti su pagalba?',
        a: 'Parašykite per Telegram @clarivex_support_bot – greičiausias būdas, atsakome per 1–2 valandas. Arba el. paštu info@clarivex.ai.'
      },
      {
        q: 'Ar turite vaizdo instrukcijas?',
        a: 'Dirbame prie vaizdo pamokų! Tuo tarpu rasite tekstines instrukcijas šiame DUK skyriuje ir pagalbos straipsniuose platformoje.'
      },
      {
        q: 'Radau klaidą, kur pranešti?',
        a: 'Ačiū, kad padedame tobulėti! Parašykite per Telegram @clarivex_support_bot su kuo detalesniu aprašymu – ką darėte, kas nutiko, kokį klaidos pranešimą matėte. Arba el. paštu info@clarivex.ai.'
      },
    ]
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors px-2 -mx-2 rounded-lg"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-300 leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState({
    'general-0': true,
    'general-1': true,
    'pricing-0': true,
    'pricing-1': true,
  });
  const [activeCategory, setActiveCategory] = useState('general');
  const canonicalUrl = 'https://clarivex.ai/duk';
  const socialImage = 'https://clarivex.ai/og.svg';
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap((category) =>
      category.questions.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  const toggleItem = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeQuestions = faqCategories.find(c => c.id === activeCategory);

  return (
    <>
      <Helmet>
        <title>Clarivex DUK - atsakymai apie funkcijas, kainas ir saugumą</title>
        <meta name="description" content="Raskite atsakymus į dažniausiai užduodamus klausimus apie Clarivex AI funkcijas, kainas, saugumą, Telegram ir pagalbą." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex DUK - atsakymai apie funkcijas, kainas ir saugumą" />
        <meta property="og:description" content="Raskite atsakymus į dažniausiai užduodamus klausimus apie Clarivex AI funkcijas, kainas, saugumą, Telegram ir pagalbą." />
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
        <meta name="twitter:title" content="Clarivex DUK - atsakymai apie funkcijas, kainas ir saugumą" />
        <meta name="twitter:description" content="Raskite atsakymus į dažniausiai užduodamus klausimus apie Clarivex AI funkcijas, kainas, saugumą, Telegram ir pagalbą." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Grįžti į pradžią
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Dažnai užduodami klausimai</h1>
            <p className="text-gray-400 text-lg">
              Raskite atsakymus apie Clarivex funkcijas, kainas, saugumą, Telegram ir kasdienį naudojimą.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
              Jei norite greitos produkto apžvalgos, peržiūrėkite{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">funkcijas</Link>
              {' · '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">kaip veikia</Link>
              {' · '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">kainas</Link>
              {' · '}
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300">Telegram</Link>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Questions */}
            <div className="flex-1">
              {activeQuestions && (
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                    {(() => {
                      const Icon = activeQuestions.icon;
                      return <Icon className="w-6 h-6 text-blue-400" />;
                    })()}
                    <h2 className="text-xl font-semibold">{activeQuestions.title}</h2>
                  </div>
                  
                  <div>
                    {activeQuestions.questions.map((item, index) => (
                      <FAQItem
                        key={index}
                        question={item.q}
                        answer={item.a}
                        isOpen={openItems[`${activeQuestions.id}-${index}`]}
                        onClick={() => toggleItem(activeQuestions.id, index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Neradote atsakymo?</h3>
            <p className="text-gray-400 mb-6">Rašykite per Telegram – atsakome per 1–2 valandas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/clarivex_support_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Parašyti per Telegram
              </a>
              <a 
                href="mailto:info@clarivex.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-white font-medium transition-all"
              >
                El. paštas info@clarivex.ai
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Taip pat galite pereiti į{' '}
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">naudos puslapį</Link>
              {' arba '}
              <Link to="/statusas" className="text-blue-400 hover:text-blue-300">sistemos statusą</Link>.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
            <p>© 2026 Clarivex. Visos teisės saugomos.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FAQ;







