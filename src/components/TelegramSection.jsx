import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Bell, 
  Smartphone, 
  Zap, 
  MessageCircle,
  Clock,
  Image,
  Brain,
  Gift,
  ChevronRight,
  StickyNote,
  ShoppingCart,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const telegramFeatures = [
  {
    icon: Mic,
    title: 'Balso komandos bet kur',
    description: 'Autobuse, virtuvėje, sporto salėje — tiesiog pasakyk ir Clarivex supras.',
  },
  {
    icon: Bell,
    title: 'Priminimai į kišenę',
    description: '"Primink rytoj 9:00 paskambinti" — gausite push pranešimą laiku.',
  },
  {
    icon: StickyNote,
    title: 'Užrašai balsu',
    description: '"Užsirašyk, kad Jonas nori pasiūlymo" — viskas išsaugoma ir prieinama.',
  },
  {
    icon: ShoppingCart,
    title: 'Pirkinių sąrašai',
    description: '"Pridėk kavos ir cukraus" — automatiškai sukuria sąrašą su elementais.',
  },
  {
    icon: Lightbulb,
    title: 'Idėjos → Postai',
    description: '"Turiu idėją postui apie akciją" — vėliau paversk postu vienu mygtuku.',
  },
  {
    icon: Brain,
    title: 'Ilgalaikė atmintis',
    description: 'Pasakykite ką reikia atsiminti — Clarivex išsaugos visam laikui.',
  },
];

const TelegramSection = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/clarivex_notify_bot', '_blank');
  };

  return (
    <section id="telegram" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900" />
      
      {/* Telegram blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0088cc]/10 rounded-full blur-3xl" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0088cc]/10 border border-[#0088cc]/30 rounded-full text-[#0088cc] text-sm font-medium mb-6"
          >
            <Smartphone className="w-4 h-4" />
            Telegram Botas
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">AI asistentas</span>
            <br />
            <span className="bg-gradient-to-r from-[#0088cc] to-cyan-400 bg-clip-text text-transparent">
              tavo kišenėje
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Susieti Telegram ir valdyti Clarivex balsu bet kur ir bet kada. 
            Gauk <span className="text-[#0088cc] font-semibold">+1800 bonus kreditų</span> už susiejimą!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 border-4 border-gray-800 shadow-2xl shadow-[#0088cc]/20">
                {/* Screen */}
                <div className="bg-[#17212b] rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#17212b] px-6 py-3 flex justify-between items-center">
                    <span className="text-white text-sm font-medium">18:42</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/30 rounded-sm" />
                      <div className="w-4 h-2 bg-white/50 rounded-sm" />
                      <div className="w-6 h-3 bg-green-400 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Telegram header */}
                  <div className="bg-[#232e3c] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Clarivex</p>
                      <p className="text-gray-400 text-xs">online</p>
                    </div>
                  </div>
                  
                  {/* Chat messages */}
                  <div className="p-4 space-y-3 min-h-[300px] bg-[#0e1621]">
                    {/* User message - shopping */}
                    <div className="flex justify-end">
                      <div className="bg-[#2b5278] rounded-2xl rounded-br-sm px-4 py-2 max-w-[85%]">
                        <p className="text-white text-sm">🎤 Pridėk kavos, pieno ir duonos</p>
                        <p className="text-gray-400 text-xs text-right mt-1">18:41</p>
                      </div>
                    </div>
                    
                    {/* Bot response - shopping list */}
                    <div className="flex justify-start">
                      <div className="bg-[#182533] rounded-2xl rounded-bl-sm px-4 py-2 max-w-[85%]">
                        <p className="text-white text-sm">🛒 <b>Pirkinių sąrašas!</b></p>
                        <p className="text-gray-300 text-sm mt-1">☐ Kava</p>
                        <p className="text-gray-300 text-sm">☐ Pienas</p>
                        <p className="text-gray-300 text-sm">☐ Duona</p>
                        <p className="text-gray-400 text-xs text-right mt-1">18:41</p>
                      </div>
                    </div>
                    
                    {/* User message 2 - idea */}
                    <div className="flex justify-end">
                      <div className="bg-[#2b5278] rounded-2xl rounded-br-sm px-4 py-2 max-w-[85%]">
                        <p className="text-white text-sm">🎤 Turiu idėją postui apie akciją</p>
                        <p className="text-gray-400 text-xs text-right mt-1">18:42</p>
                      </div>
                    </div>
                    
                    {/* Bot response - idea with button */}
                    <div className="flex justify-start">
                      <div className="bg-[#182533] rounded-2xl rounded-bl-sm px-4 py-2 max-w-[85%]">
                        <p className="text-white text-sm">💡 <b>Idėja išsaugota!</b></p>
                        <p className="text-gray-300 text-sm mt-1">Postui apie akciją</p>
                        <div className="mt-2 px-3 py-1.5 bg-[#0088cc]/20 rounded-lg text-[#0088cc] text-xs text-center">
                          🚀 Sukurti postą
                        </div>
                        <p className="text-gray-400 text-xs text-right mt-1">18:42</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input area */}
                  <div className="bg-[#17212b] px-4 py-3 flex items-center gap-3">
                    <div className="flex-1 bg-[#242f3d] rounded-full px-4 py-2">
                      <p className="text-gray-500 text-sm">Žinutė...</p>
                    </div>
                    <div className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0088cc]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Right: Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {telegramFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-[#0088cc]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0088cc]/10 border border-[#0088cc]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0088cc]/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-[#0088cc]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pt-4"
            >
              <Button
                onClick={handleTelegramStart}
                className="w-full sm:w-auto px-8 py-6 bg-[#0088cc] hover:bg-[#0077b5] text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#0088cc]/25 hover:shadow-xl hover:shadow-[#0088cc]/30"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Pradėti su Telegram
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-gray-500 text-sm mt-3">
                Arba ieškokite <span className="text-[#0088cc]">@clarivex_notify_bot</span> Telegram programėlėje
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bonus banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-[#0088cc]/20 to-purple-500/20 border border-[#0088cc]/30 rounded-2xl p-8 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0088cc]/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0088cc] to-purple-500 flex items-center justify-center shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">+1800 bonus kreditų</h3>
                  <p className="text-gray-400">Susieti Telegram ir gauti papildomus kreditus nemokamai</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-center px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <p className="text-sm text-gray-400">Email registracija</p>
                  <p className="text-2xl font-bold text-white">200 <span className="text-sm text-gray-400">kr.</span></p>
                </div>
                <div className="text-2xl text-gray-500">+</div>
                <div className="text-center px-6 py-3 bg-[#0088cc]/10 rounded-xl border border-[#0088cc]/30">
                  <p className="text-sm text-[#0088cc]">+ Telegram</p>
                  <p className="text-2xl font-bold text-[#0088cc]">+1800 <span className="text-sm">kr.</span></p>
                </div>
                <div className="text-2xl text-gray-500">=</div>
                <div className="text-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <p className="text-sm text-green-400">Iš viso</p>
                  <p className="text-2xl font-bold text-green-400">2000 <span className="text-sm">kr.</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TelegramSection;







