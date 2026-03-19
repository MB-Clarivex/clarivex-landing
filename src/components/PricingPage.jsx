import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calculator, 
  Zap, 
  Lightbulb, 
  MessageSquare, 
  Image, 
  Mic, 
  Volume2, 
  Search, 
  Mail, 
  Info,
  CheckCircle2,
  ArrowRight,
  Brain,
  Clock,
  Trash2,
  RefreshCw,
  Layers,
} from 'lucide-react';

// ============================================================================
// KAINŲ DUOMENYS (atitinka usage.ts)
// ============================================================================

const AI_MODELS = [
  // GPT-5 serija
  { 
    name: 'GPT-5.2', 
    inPrice: 4.29, 
    outPrice: 34.34, 
    tier: 'premium',
    badge: '🚀 Naujausias',
    description: 'Galingiausias modelis sudėtingiausioms užduotims',
  },
  { 
    name: 'GPT-5.1', 
    inPrice: 3.07, 
    outPrice: 24.53, 
    tier: 'recommended',
    badge: '⭐ Rekomenduojamas',
    description: 'Geriausias kainos ir kokybės balansas kasdieniam naudojimui',
  },
  { 
    name: 'GPT-5-mini', 
    inPrice: 0.61, 
    outPrice: 4.91, 
    tier: 'economy',
    badge: '⚡ Greitas',
    description: 'Greitas ir ekonomiškas paprastoms užduotims',
  },
  { 
    name: 'GPT-5-nano', 
    inPrice: 0.12, 
    outPrice: 0.98, 
    tier: 'economy',
    badge: '💰 Pigiausias',
    description: 'Ekonomiškiausias variantas paprastiems klausimams',
  },
  // GPT-4.1 serija
  { 
    name: 'GPT-4.1', 
    inPrice: 4.91, 
    outPrice: 19.62, 
    tier: 'standard',
    description: 'Patikimas ir stabilus modelis',
  },
  { 
    name: 'GPT-4.1-mini', 
    inPrice: 0.98, 
    outPrice: 3.92, 
    tier: 'economy',
    description: 'Geras kainos/kokybės balansas',
  },
  { 
    name: 'GPT-4.1-nano', 
    inPrice: 0.25, 
    outPrice: 0.98, 
    tier: 'economy',
    description: 'Paprastiems uždaviniams',
  },
  // Legacy
  { 
    name: 'GPT-4o', 
    inPrice: 6.13, 
    outPrice: 24.53, 
    tier: 'standard',
    badge: '🖼️ Vision',
    description: 'Gali analizuoti paveikslėlius',
  },
  { 
    name: 'GPT-4o-mini', 
    inPrice: 0.37, 
    outPrice: 1.47, 
    tier: 'economy',
    description: 'Greitas multimodalinis modelis',
  },
];

const OTHER_SERVICES = [
  {
    name: 'Nano Banana 2 (Gemini)',
    price: '~125 kr',
    unit: 'paveikslėlis',
    icon: Image,
    description: 'Pagrindinis – pro kokybė, 2K, puikiai rašo tekstą',
  },
  {
    name: 'GPT Image 1.5 / DALL-E 3',
    price: '35–196 kr',
    unit: 'paveikslėlis',
    icon: Image,
    description: 'Fallback – kai Gemini neprieinamas',
  },
  {
    name: 'Balso transkripcija (Whisper)',
    price: '~15 kr',
    unit: 'minutė',
    icon: Mic,
    description: 'Audio į tekstą',
  },
  {
    name: 'Teksto skaitymas (TTS)',
    price: '~37 kr',
    unit: '1000 simbolių',
    icon: Volume2,
    description: 'Tekstas į audio',
  },
  {
    name: 'TTS HD kokybė',
    price: '~74 kr',
    unit: '1000 simbolių',
    icon: Volume2,
    description: 'Aukštesnė audio kokybė',
  },
  {
    name: 'Web paieška',
    price: '~25 kr',
    unit: 'paieška',
    icon: Search,
    description: 'Realaus laiko informacija',
  },
  {
    name: 'El. laiško siuntimas',
    price: '~2.5 kr',
    unit: 'laiškas',
    icon: Mail,
    description: 'Siuntimas per Clarivex',
  },
];

const TRANSFER_PRICING = {
  free: {
    perTransfer: '3 GB',
    perMonth: '30 GB',
    days: '7 dienų',
  },
  paid: [
    { range: '3-30 GB', price: '€0.02/GB', credits: '20 kr/GB' },
    { range: '30+ GB', price: '€0.01/GB', credits: '10 kr/GB' },
    { range: '8-30 dienų', price: '+€0.01/GB', credits: '+10 kr/GB', note: 'priedas už ilgesnį saugojimą' },
  ],
};

const TIPS = [
  {
    icon: RefreshCw,
    title: 'Pradėk naują temą',
    description: 'Kai keiti pokalbio temą, pradėk naują susirašinėjimą. AI nereikės skaityti visos ankstesnės istorijos – sutaupysi iki 50% kreditų!',
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Viena aiški užklausa',
    description: 'Vietoj kelių trumpų žinučių, parašyk vieną aiškią ir išsamią – sutaupysi tokenų kiekviename atsakyme.',
    color: 'purple',
  },
  {
    icon: Trash2,
    title: 'Nelaik nereikalingų failų',
    description: 'Transfer saugomi failai užima vietą. Kai adresatas parsisiuntė – ištrink ir nepasieksi mokamo limito.',
    color: 'orange',
  },
  {
    icon: Clock,
    title: 'Transfer: rinkis trumpesnį laiką',
    description: 'Jei žinai, kad adresatas parsisiųs greitai – rinkis 1-7 dienas, ne 30. Ilgesnis saugojimas = papildomas mokestis.',
    color: 'cyan',
  },
];

// ============================================================================
// KOMPONENTAI
// ============================================================================

function ModelTable({ models, title, icon: Icon }) {
  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700/50 flex items-center gap-3">
        <Icon className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Modelis</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Įvestis (1K tok.)</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Išvestis (1K tok.)</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">~Žinutė</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {models.map((model, idx) => {
              // Apytikslė žinutės kaina: ~300 in + ~500 out tokenų
              const avgMessage = (model.inPrice * 0.3) + (model.outPrice * 0.5);
              const minMsg = Math.round(avgMessage * 0.7);
              const maxMsg = Math.round(avgMessage * 1.5);
              
              return (
                <tr 
                  key={model.name} 
                  className={`hover:bg-gray-700/20 transition-colors ${
                    model.tier === 'recommended' ? 'bg-blue-500/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{model.name}</span>
                          {model.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              model.tier === 'recommended' 
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                : model.tier === 'premium'
                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                : 'bg-gray-700 text-gray-400'
                            }`}>
                              {model.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{model.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-gray-300 font-mono">{model.inPrice.toFixed(2)} kr</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-gray-300 font-mono">{model.outPrice.toFixed(2)} kr</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`font-semibold ${
                      model.tier === 'economy' ? 'text-green-400' : 
                      model.tier === 'recommended' ? 'text-blue-400' :
                      model.tier === 'premium' ? 'text-purple-400' : 'text-gray-300'
                    }`}>
                      {minMsg}-{maxMsg} kr
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 bg-gray-900/50 border-t border-gray-700/50">
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <Info className="w-3 h-3" />
          Tokenas ≈ 4 simboliai lietuviškai. Vidutinė žinutė: ~300 įvesties + ~500 išvesties tokenų.
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white">{service.name}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{service.description}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-blue-400">{service.price}</div>
          <div className="text-xs text-gray-500">/ {service.unit}</div>
        </div>
      </div>
    </div>
  );
}

function TipCard({ tip }) {
  const Icon = tip.icon;
  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClasses[tip.color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">{tip.title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{tip.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function PricingPage() {
  const [showAllModels, setShowAllModels] = useState(false);
  const canonicalUrl = 'https://clarivex.ai/kainos';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Clarivex kainodara — skaidri kainos',
        url: canonicalUrl,
        description: 'Skaidri Clarivex kainodara: AI modelių, vaizdų generavimo, failų siuntimo kainos. 1€ = 1000 kreditų. Jokių mėnesinių mokesčių.',
        inLanguage: 'lt-LT',
        isPartOf: { '@id': 'https://clarivex.ai/#website' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Clarivex',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          price: '1',
          url: canonicalUrl,
          description: 'Clarivex kreditų sistema prasideda nuo 1 €.',
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Clarivex AI kainodara ir kreditų sistema</title>
        <meta name="description" content="Peržiūrėkite Clarivex AI kainodarą ir kreditų sistemą. Mokėkite tik už tai, ką naudojate: AI žinutes, vaizdus, el. paštą ir kitus veiksmus." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex AI kainodara ir kreditų sistema" />
        <meta property="og:description" content="Mokėkite tik už tai, ką naudojate: AI žinutes, vaizdus, el. paštą ir kitus Clarivex veiksmus be mėnesinio plano." />
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
        <meta name="twitter:title" content="Clarivex AI kainodara ir kreditų sistema" />
        <meta name="twitter:description" content="Skaidri Clarivex kainodara be mėnesinio plano: mokėkite tik už realiai naudojamas AI funkcijas." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        
        <main className="pt-24 pb-20">
          {/* Hero */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                  <Calculator className="w-4 h-4" />
                  Skaidri kainodara
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Žinok kiek moki</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    už kiekvieną veiksmą
                  </span>
                </h1>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                  Jokių paslėptų mokesčių ir mėnesinių planų.
                  Moki tik už tai, ką realiai naudoji — AI žinutes, postus, paveikslėlius, el. laiškus.
                  <br />
                  <span className="text-blue-400 font-semibold">1 € = 1 000 kreditų</span> — to paprastai pakanka
                  kelioms dešimtims AI žinučių ir keliems paveikslėliams.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Neribotas galiojimas
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Jokių mėnesinių mokesčių
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Iki 1000 kr dovanų pradžiai
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Kas kainuoja — greita nuoroda */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  ⚡ Kiek kainuoja tipiniai veiksmai?
                </h2>
                <p className="text-gray-400 text-sm">
                  1 € = 1 000 kreditų. Žemiau — apytikslės kreditų kainos dažniausiems veiksmams,
                  kad lengviau suplanuotum savo biudžetą.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {[
                  { name: 'AI žinutė', credits: '~1-15 kr', note: 'priklauso nuo modelio' },
                  { name: 'Posto tekstas', credits: '~5-15 kr', note: 'AI generavimas' },
                  { name: 'Publikavimas', credits: '15 kr', note: 'IG / FB / Blog' },
                  { name: 'DM atsakymas', credits: '~2-10 kr', note: 'Inbox AI' },
                  { name: 'Paveikslėlis', credits: '~125 kr', note: 'Nano Banana 2' },
                  { name: 'El. laiškas', credits: '~5-12 kr', note: 'atsakymas + siuntimas' },
                  { name: 'Balso komanda', credits: '~10-25 kr', note: 'Whisper + AI' },
                  { name: 'Web paieška', credits: '~25 kr', note: 'SerpApi' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/30 transition-colors"
                  >
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-lg font-bold text-blue-400 mt-1">{item.credits}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* AI Modeliai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🤖 AI Pokalbių modeliai
                </h2>
                <p className="text-gray-400">
                  Kaina priklauso nuo modelio ir žinutės ilgio (tokenų kiekio)
                </p>
              </motion.div>
              
              <ModelTable 
                models={AI_MODELS} 
                title="GPT modeliai" 
                icon={MessageSquare} 
              />
              
              {/* Reasoning modeliai – greitu metu */}
              <div className="mt-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-white">Reasoning modeliai (o1, o1-mini ir kt.)</h3>
                    <p className="text-sm text-gray-500">Greitu metu – dirbame prie integracijos</p>
                  </div>
                </div>
              </div>
              
              {/* Paaiškinimas */}
              <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-2">Kaip skaičiuojama?</p>
                    <ul className="space-y-1 text-gray-400">
                      <li>• <strong>Įvestis</strong> – tai ką tu parašai + visa pokalbio istorija</li>
                      <li>• <strong>Išvestis</strong> – AI atsakymas</li>
                      <li>• Kuo ilgesnis pokalbis, tuo daugiau tokenų siunčiama kiekvieną kartą</li>
                      <li>• <strong className="text-blue-400">Patarimas:</strong> Kai keiti temą – pradėk naują pokalbį!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Kitos paslaugos */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🎨 Kitos paslaugos
                </h2>
                <p className="text-gray-400">
                  Paveikslėlių generavimas, balso transkripcija ir daugiau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {OTHER_SERVICES.map((service, idx) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Socialinių tinklų limitai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  📱 Socialinių tinklų limitai
                </h2>
                <p className="text-gray-400">
                  Meta (Instagram/Facebook) platformos apribojimai – ne Clarivex
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-700/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                    <span className="text-lg">📸</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Meta API limitai</h3>
                    <p className="text-xs text-gray-500">Taikoma kiekvienam vartotojui per 24 valandas</p>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-700/30">
                  {[
                    { icon: '📷', name: 'Instagram publikacijos', limit: 'iki 25', period: '/ 24h', color: 'pink' },
                    { icon: '📖', name: 'Instagram Stories', limit: 'iki 25', period: '/ 24h', color: 'purple' },
                    { icon: '💬', name: 'Instagram komentarų atsakymai', limit: 'iki 60', period: '/ val.', color: 'blue' },
                    { icon: '📘', name: 'Facebook publikacijos', limit: 'iki 25', period: '/ 24h', color: 'blue' },
                    { icon: '🔄', name: 'API užklausos', limit: 'iki 200', period: '/ val.', color: 'gray' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between px-6 py-4 hover:bg-gray-700/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${
                          item.color === 'pink' ? 'text-pink-400' :
                          item.color === 'purple' ? 'text-purple-400' :
                          item.color === 'blue' ? 'text-blue-400' :
                          'text-gray-400'
                        }`}>{item.limit}</span>
                        <span className="text-gray-500 text-sm ml-1">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="px-6 py-4 bg-orange-500/5 border-t border-orange-500/20">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">⚠️</span>
                    <div className="text-sm text-gray-400">
                      <p>Šie limitai nustatyti <span className="text-orange-400 font-medium">Meta platformos</span>, ne Clarivex. Pasiekus limitą, publikavimas bus laikinai sustabdytas ir atsinaujins automatiškai.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Failų siuntimas */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  📦 Failų siuntimas (Transfer)
                </h2>
                <p className="text-gray-400">
                  Siųsk didelius failus be jokių apribojimų – kaip WeTransfer, tik geriau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nemokama */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Nemokama</h3>
                      <p className="text-sm text-green-400">Kiekvienam vartotojui</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📁</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.perTransfer}</span>
                        <span className="text-gray-400"> per siuntimą</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.perMonth}</span>
                        <span className="text-gray-400"> per 30 dienų</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">⏰</span>
                      <div>
                        <span className="text-white font-semibold">Iki {TRANSFER_PRICING.free.days}</span>
                        <span className="text-gray-400"> saugojimo</span>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Mokama */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Virš nemokamo limito</h3>
                      <p className="text-sm text-gray-400">Tik jei viršiji</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {TRANSFER_PRICING.paid.map((tier, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                        <div>
                          <span className="text-white font-medium">{tier.range}</span>
                          {tier.note && (
                            <p className="text-xs text-gray-500">{tier.note}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-blue-400 font-semibold">{tier.price}</div>
                          <div className="text-xs text-gray-500">{tier.credits}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4 flex items-start gap-2">
                    <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    Ištrinti failai nesumažina mėnesio limito – skaičiuojami įkėlimai
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Patarimai */}
          <section className="px-4 mb-16">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
                  <Lightbulb className="w-4 h-4" />
                  Naudingi patarimai
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  💡 Kaip taupyti kreditus?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Keli paprasti patarimai, kurie padės naudoti Clarivex efektyviau
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {TIPS.map((tip, idx) => (
                  <TipCard key={idx} tip={tip} />
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="px-4">
            <div className="container mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-3xl p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Pasiruošęs pradėti?
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Gauk <span className="text-green-400 font-semibold">iki 1000 kreditų dovanų</span> užsiregistravęs ir užbaigęs profilį.
                    Jokių įsipareigojimų – papildysi kai norėsi.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://app.clarivex.ai"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Pradėti nemokamai
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/#pricing"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700/50 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-600 transition-all"
                    >
                      Papildyti kreditus
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

