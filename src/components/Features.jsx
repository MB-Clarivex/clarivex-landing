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
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Balso Komandos',
    description: 'Pasakyk ką nori — postas, priminimas, paveikslėlis. Clarivex supranta lietuviškai ir padaro per sekundes.',
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
    description: 'GPT Image 1.5 ir DALL-E 3. Aprašyk ką nori matyti — AI automatiškai pasirinks modelį ir sukurs profesionalų paveikslėlį. HD kokybė iki 1792×1024.',
    gradient: 'from-orange-500 to-red-500',
    badge: null,
    stats: '1792×1024',
    statsLabel: 'HD kokybė'
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
    description: 'Clarivex atsimena tavo prekės ženklą, klientus, terminus. Kuo daugiau naudoji — tuo protingesnis tampa.',
    gradient: 'from-violet-500 to-purple-500',
    badge: 'Unikalus',
    stats: '∞',
    statsLabel: 'prisiminimų'
  }
];

const integrations = [
  { icon: Instagram, name: 'Instagram', color: 'text-pink-400' },
  { icon: Facebook, name: 'Facebook', color: 'text-blue-400' },
  { icon: Mail, name: 'El. paštas', color: 'text-red-400' },
  { icon: Calendar, name: 'Kalendorius', color: 'text-yellow-400' },
  { icon: LayoutGrid, name: 'Telegram', color: 'text-cyan-400' },
];

const Features = () => {
  return (
    <section id="features" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Galimybės
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Viskas ko reikia,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              vienoje platformoje
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nuo postų kūrimo iki el. pašto valdymo — Clarivex automatizuoja 
            kasdienines užduotis, kad tu galėtum fokusuotis į tai, kas svarbu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 h-full">
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {feature.badge}
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-700/50">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {feature.stats}
                  </span>
                  <span className="text-xs text-gray-500">{feature.statsLabel}</span>
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
          <p className="text-gray-400 mb-8 text-lg">Integruojasi su įrankiais, kuriuos jau naudoji</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all cursor-pointer"
              >
                <integration.icon className={`w-5 h-5 ${integration.color}`} />
                <span className="text-gray-300 font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
