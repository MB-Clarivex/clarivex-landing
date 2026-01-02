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
        a: 'Šiuo metu palaikome: Instagram (postai, stories, reels), Facebook (puslapiai, grupės), Gmail integraciją, Telegram botą ir WordPress blogus. Nuolat dirbame prie naujų integracijų.'
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
        a: 'Clarivex veikia kreditų sistema be mėnesinių mokesčių. Perkate kreditus, kai jų reikia: 1€ = 1000 kreditų. Nauji vartotojai gauna 2000 nemokamų kreditų pradžiai!'
      },
      {
        q: 'Ką galiu padaryti su 1000 kreditų?',
        a: 'Su 1000 kreditų (~1€) galite: parašyti ~50 AI tekstų, sugeneruoti 12 paveikslėlių (DALL-E 3), transkribuoti ~80 minučių balso, arba atlikti ~50 web paieškų. Tikslios kainos priklauso nuo naudojamo AI modelio.'
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
        a: 'Naudojame naujausius OpenAI modelius: GPT-4o ir GPT-4o-mini tekstui, DALL-E 3 paveikslėliams, Whisper balso transkripcijai. Modelis parenkamas automatiškai pagal užduoties sudėtingumą.'
      },
      {
        q: 'Ar AI prisimena mano ankstesnius pokalbius?',
        a: 'Taip! Clarivex turi ilgalaikę atmintį. Galite pasakyti "atsimink, kad..." ir AI prisimins šią informaciją visuose būsimuose pokalbiuose. Taip pat automatiškai mokosi iš jūsų bendravimo stiliaus.'
      },
      {
        q: 'Ar galiu generuoti paveikslėlius?',
        a: 'Taip! Naudojame DALL-E 3 modelį, kuris generuoja aukštos kokybės paveikslėlius iki 1792x1024 pikselių. Tiesiog aprašykite, ko norite, ir AI sukurs unikalų paveikslėlį.'
      },
      {
        q: 'Kaip veikia balso komandos?',
        a: 'Tiesiog paspauskite mikrofono mygtuką ir kalbėkite lietuviškai. AI automatiškai transkribuos jūsų balsą ir atliks užklausą. Veikia ir per Telegram botą!'
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
        a: 'Stories publikavimas šiuo metu nepalaikomas dėl Instagram API apribojimų. Reels palaikomi – galite įkelti video ir publikuoti kaip Reel.'
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
        a: 'Ne. Socialinių tinklų ir el. pašto prisijungimai vyksta tiesiogiai per oficialias platformų sistemas (OAuth). Mes nematome ir nesaugome jūsų slaptažodžių.'
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
        a: 'Galite parašyti el. laišką info@clarivex.ai arba susisiekti per Telegram @clarivex_support. Atsakome per 24 valandas darbo dienomis.'
      },
      {
        q: 'Ar turite vaizdo instrukcijas?',
        a: 'Dirbame prie vaizdo pamokų! Tuo tarpu rasite tekstines instrukcijas šiame DUK skyriuje ir pagalbos straipsniuose platformoje.'
      },
      {
        q: 'Radau klaidą, kur pranešti?',
        a: 'Ačiū, kad padedame tobulėti! Prašome pranešti apie klaidas el. paštu info@clarivex.ai su kuo detalesniu aprašymu – ką darėte, kas nutiko, kokį klaidos pranešimą matėte.'
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
        <div className="pb-5 text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState('general');

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
        <title>DUK — Dažnai užduodami klausimai — Clarivex</title>
        <meta name="description" content="Raskite atsakymus į dažniausiai užduodamus klausimus apie Clarivex AI platformą, kainas, funkcijas ir daugiau." />
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
            <p className="text-gray-400 text-lg">Raskite atsakymus į populiariausius klausimus apie Clarivex</p>
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
            <p className="text-gray-400 mb-6">Susisiekite su mumis ir mielai padėsime!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@clarivex.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Parašyti el. laišką
              </a>
              <a 
                href="https://t.me/clarivex_support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-white font-medium transition-all"
              >
                Telegram palaikymas
              </a>
            </div>
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

