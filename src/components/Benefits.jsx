import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Shield, TrendingUp, Users, Globe, Sparkles, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Sutaupyk 10+ val. / savaitę',
    description: 'Postų kūrimas, el. laiškai, priminimai — viskas automatizuota. Daugiau laiko tam, kas svarbu.',
    stat: '10h+',
    statLabel: 'sutaupoma'
  },
  {
    icon: Zap,
    title: 'Rezultatai per sekundes',
    description: 'Jokio laukimo. Pasakei — gavai. AI veikia 24/7 ir niekada neužmiega.',
    stat: '3s',
    statLabel: 'vidutiniškai'
  },
  {
    icon: Shield,
    title: 'Tavo stilius, tavo balsas',
    description: 'Clarivex prisimena tavo prekės ženklą, terminus, toną. Kiekvienas postas — tikrai tavo.',
    stat: '100%',
    statLabel: 'nuoseklumas'
  },
  {
    icon: TrendingUp,
    title: 'Augink be papildomų darbuotojų',
    description: 'Vienas žmogus gali valdyti tai, kam anksčiau reikėjo komandos. Skalėjimas be ribų.',
    stat: '5x',
    statLabel: 'efektyvumas'
  }
];

const useCases = [
  {
    title: 'E-parduotuvės',
    description: 'Automatiniai produktų postai, akcijų skelbimai, klientų atsakymai',
    features: ['Produktų carousel', 'Kainų atnaujinimai', 'Atsiliepimų valdymas']
  },
  {
    title: 'Influenceriai',
    description: 'Turinio kalendorius, bendradarbiavimų valdymas, analitika',
    features: ['Postų planavimas', 'Stories idėjos', 'Statistika']
  },
  {
    title: 'Smulkus verslas',
    description: 'Profesionalus marketingas be marketingo komandos',
    features: ['Social media', 'El. paštas', 'Priminimai']
  },
  {
    title: 'Agentūros',
    description: 'Kelių klientų valdymas vienoje platformoje',
    features: ['Multi-brand', 'Komandinis darbas', 'Ataskaitos']
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Kodėl Clarivex?
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Mažiau darbo,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              daugiau rezultatų
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Clarivex nėra tik dar vienas įrankis. Tai tavo virtualus asistentas, 
            kuris dirba už tave kol tu fokusuojiesi į strategiją.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                
                {/* Stat */}
                <div className="mb-4">
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {benefit.stat}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</p>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sukurta įvairiems poreikiams
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Nesvarbu ar esi vienas žmogus ar didelė komanda — Clarivex prisitaiko prie tavęs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                
                <ul className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
