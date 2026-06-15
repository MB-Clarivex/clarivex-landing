import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Calendar, 
  Mail, 
  Image, 
  FileText, 
  Brain,
  Instagram,
  Facebook,
  Sparkles,
  LayoutGrid,
  StickyNote,
  Lightbulb,
  Search,
  Globe,
  CheckCircle,
  Languages,
  Bot,
  Package,
  BarChart3,
  ShoppingCart
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Balso Komandos',
    description: 'Pasakyk lietuviškai, ką reikia padaryti — postą, priminimą ar paveikslėlį. Clarivex supranta kontekstą ir per kelias sekundes paruošia galutinį variantą. Veikia naršyklėje ir per Telegram.',
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'Populiariausia',
    stats: '~3s',
    statsLabel: 'vidutinis laikas'
  },
  {
    icon: StickyNote,
    title: 'Balso Užrašai',
    description: 'Užrašai, pirkinių sąrašai, idėjos — pasakyk ir sistema supras ko nori. Idėją gali paversti postu vienu paspaudimu.',
    gradient: 'from-amber-500 to-orange-500',
    badge: 'Nauja',
    stats: '4',
    statsLabel: 'tipai'
  },
  {
    icon: Calendar,
    title: 'Social Media Kalendorius',
    description: 'Planuok Instagram ir Facebook postus savaitėms į priekį. Carousel, Reels, Stories — viskas vienoje vietoje.',
    gradient: 'from-purple-500 to-pink-500',
    badge: null,
    stats: '∞',
    statsLabel: 'suplanuotų postų'
  },
  {
    icon: Mail,
    title: 'AI El. Paštas',
    description: 'Automatiniai atsakymai, juodraščiai, taisyklės. El. paštas, kuris tvarko save pats pagal tavo stilių.',
    gradient: 'from-green-500 to-emerald-500',
    badge: null,
    stats: '10x',
    statsLabel: 'greičiau atsakai'
  },
  {
    icon: Image,
    title: 'Paveikslėlių Generavimas',
    description: 'GPT Image 2 – pagrindinis generavimas, puikiai rašo tekstą ant paveikslėlių. Kaina priklauso nuo kokybės ir dydžio. Gemini fallback.',
    gradient: 'from-orange-500 to-red-500',
    badge: null,
    stats: '2K',
    statsLabel: 'pro kokybė'
  },
  {
    icon: FileText,
    title: 'Dokumentų Analizė',
    description: 'Įkelk PDF, Word, Excel — AI išanalizuos, apibendrins ir atsakys į klausimus apie turinį.',
    gradient: 'from-indigo-500 to-blue-500',
    badge: null,
    stats: '100+',
    statsLabel: 'puslapių vienu metu'
  },
  {
    icon: Brain,
    title: 'Ilgalaikė Atmintis',
    description: 'Clarivex atsimena tavo prekės ženklą, terminus ir svarbias detales. Kuo daugiau bendrauji, tuo tiksliau AI pritaiko atsakymus prie tavo stiliaus — lyg būtum parašęs pats.',
    gradient: 'from-violet-500 to-purple-500',
    badge: 'Unikalus',
    stats: '∞',
    statsLabel: 'prisiminimų'
  },
  {
    icon: Languages,
    title: 'Vertėjas',
    description: 'AI tekstų ir dokumentų vertimas į daugelį kalbų. Live ir HQ režimai, žodynas (glossary), lietuvių kalba.',
    gradient: 'from-teal-500 to-cyan-500',
    badge: null,
    stats: 'LT+',
    statsLabel: 'kalbos'
  },
  {
    icon: Bot,
    title: 'AI Asistentai',
    description: 'Sukurkite savo AI asistentus su individualiomis instrukcijomis. Pasirinkite modelį, web search, atmintį.',
    gradient: 'from-slate-500 to-zinc-500',
    badge: null,
    stats: '∞',
    statsLabel: 'asistentai'
  },
  {
    icon: Package,
    title: 'Failų Siuntimas',
    description: 'WeTransfer stiliaus failų siuntimas. Iki 3 GB nemokamai per transfer, iki 30 GB/mėn. Slaptažodžio apsauga.',
    gradient: 'from-sky-500 to-blue-500',
    badge: null,
    stats: '3 GB',
    statsLabel: 'nemokamai'
  },
  {
    icon: BarChart3,
    title: 'SEO Auditas',
    description: 'Svetainės SEO analizė – Core Web Vitals, meta tags, struktūra. Rekomendacijos kaip pagerinti matomumą.',
    gradient: 'from-lime-500 to-green-500',
    badge: null,
    stats: '✓',
    statsLabel: 'Core Web Vitals'
  }
];

const integrations = [
  { icon: Instagram, name: 'Instagram', color: 'text-pink-400' },
  { icon: Facebook, name: 'Facebook', color: 'text-blue-400' },
  { icon: Mail, name: 'El. paštas', color: 'text-red-400' },
  { icon: Calendar, name: 'Kalendorius', color: 'text-yellow-400' },
  { icon: LayoutGrid, name: 'Telegram', color: 'text-cyan-400' },
  { icon: ShoppingCart, name: 'Shopify', color: 'text-green-400' },
];

const Features = () => {
  return (
    <section id="features" className="cvx-content-visibility cvx-hairline py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cvx-eyebrow mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Galimybės
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]">
            <span className="text-white">Viskas ko reikia,</span>
            <br />
            <span className="cvx-accent-text">vienoje platformoje</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nuo postų kūrimo iki el. pašto valdymo — Clarivex automatizuoja 
            kasdienines užduotis, kad tu galėtum fokusuotis į tai, kas svarbu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative"
            >
              <div className="cvx-surface cvx-surface-hover relative p-6 h-full">
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-white/[0.06] border border-white/15 text-cyan-300 text-xs font-semibold rounded-full backdrop-blur">
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2.5 text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-baseline gap-2 pt-4 border-t border-white/[0.06]">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {feature.stats}
                  </span>
                  <span className="text-xs text-slate-500">{feature.statsLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-400 mb-8 text-lg">Integruojasi su įrankiais, kuriuos jau naudoji</p>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="cvx-surface cvx-surface-hover flex items-center gap-3 px-5 py-3"
              >
                <integration.icon className={`w-5 h-5 ${integration.color}`} />
                <span className="text-slate-300 font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
