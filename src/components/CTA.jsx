import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Mail, MessageCircle, Smartphone } from 'lucide-react';

const CTA = () => {
  const handleTelegramRegister = () => {
    window.open('https://t.me/clarivex_notify_bot', '_blank');
  };

  const handleEmailRegister = () => {
    window.location.href = "https://app.clarivex.ai/auth";
  };

  const handleContact = () => {
    window.location.href = "mailto:info@clarivex.ai";
  };

  return (
    <section id="cta" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Pradėk šiandien — nemokamai
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Pasiruošęs turėti</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI asistentą, kuris niekada nemiega?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Prisijunk prie šimtų verslų, kurie jau automatizavo savo 
            kasdienius darbus su Clarivex. 250 kr. nemokamai, iki 1000 kr. užbaigus profilį.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleEmailRegister}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-7 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <Zap className="w-5 h-5 mr-2" />
                Pradėti nemokamai
                <span className="ml-2 text-sm opacity-75">+250 kr.</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleContact}
                className="border-2 border-gray-600 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-700/50 text-white px-10 py-7 text-lg rounded-2xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Susisiekti
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Nereikia kortelės</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>250 kr. su email, 500 kr. su Telegram</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-blue-400">Iki 1000 kr. užbaigus profilį</span>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-2">🤔 Kaip veikia kreditai?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              1€ = 1000 kreditų. Kreditai naudojami AI veiksmams: pokalbiai, postai, 
              paveikslėliai. Nenaudoti kreditai lieka ir niekada nesibaigia.
            </p>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-2">🌍 Ar veikia lietuviškai?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Taip! Clarivex puikiai supranta lietuvių kalbą — ir balsu, ir tekstu. 
              Taip pat palaiko 100+ kitų kalbų.
            </p>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-2">📱 Ar galiu naudoti telefone?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Taip! Web aplikacija veikia visuose įrenginiuose. Taip pat turime 
              Telegram botą — valdyk viską tiesiog iš messenger'io.
            </p>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-2">🔒 Ar mano duomenys saugūs?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Absoliučiai. Visi duomenys šifruojami ir saugomi Europos serveriuose. 
              Niekada neparduodame ir nesidalijame jūsų informacija.
            </p>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Turite klausimų? Mielai padėsime!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:info@clarivex.ai" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:border-blue-500 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              info@clarivex.ai
            </a>
            <a 
              href="https://t.me/clarivex_support" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:border-blue-500 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram palaikymas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
