import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Mail, MessageCircle, Smartphone, Coins, Globe, ShieldCheck } from 'lucide-react';

const CTA = () => {
  const handleTelegramRegister = () => {
    window.open('https://t.me/clarivex_notify_bot', '_blank');
  };

  const handleEmailRegister = () => {
    window.location.href = "https://app.clarivex.ai/auth";
  };

  const handleContact = () => {
    window.open('https://t.me/clarivex_support_bot', '_blank');
  };

  return (
    <section id="cta" className="cvx-content-visibility cvx-hairline py-24 px-4 relative overflow-hidden">
      {/* Soft accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-cyan-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-indigo-500/[0.05] rounded-full blur-3xl" />
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
            className="cvx-eyebrow mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Pradėk šiandien — nemokamai
          </motion.div>

          {/* Main heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]">
            <span className="text-white">Pasiruošęs turėti</span>
            <br />
            <span className="cvx-accent-text">
              AI asistentą, kuris niekada nemiega?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Prisijunk prie šimtų verslų, kurie jau automatizavo savo 
            kasdienius darbus su Clarivex. 250 kr. nemokamai, iki 1000 kr. užbaigus profilį.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleEmailRegister}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold px-10 py-7 text-lg rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group"
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
                <MessageCircle className="w-5 h-5 mr-2" />
                Susisiekti per Telegram
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
              <span>250 kr. registracijai, +250 kr. susiejus Telegram</span>
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
          className="mt-20 grid md:grid-cols-2 gap-6 text-left"
        >
          {[
            {
              icon: Coins,
              q: 'Kaip veikia kreditai?',
              a: '1€ = 1000 kreditų. Kreditai naudojami AI veiksmams: pokalbiai, postai, paveikslėliai. Nenaudoti kreditai lieka ir niekada nesibaigia.',
            },
            {
              icon: Globe,
              q: 'Ar veikia lietuviškai?',
              a: 'Taip — Clarivex puikiai supranta lietuvių kalbą ir balsu, ir tekstu. Taip pat palaiko 100+ kitų kalbų.',
            },
            {
              icon: Smartphone,
              q: 'Ar galiu naudoti telefone?',
              a: 'Taip. Web aplikacija veikia visuose įrenginiuose. Taip pat turime Telegram botą — valdyk viską tiesiog iš messenger’io.',
            },
            {
              icon: ShieldCheck,
              q: 'Ar mano duomenys saugūs?',
              a: 'Visi duomenys šifruojami ir saugomi Europos serveriuose. Niekada neparduodame ir nesidalijame jūsų informacija.',
            },
          ].map(({ icon: Icon, q, a }) => (
            <div key={q} className="cvx-surface p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-white">{q}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Turite klausimų? Rašykite per Telegram!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://t.me/clarivex_support_bot" 
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-300 hover:border-blue-400 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              @clarivex_support_bot
            </a>
            <a 
              href="mailto:info@clarivex.ai" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:border-blue-500 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              info@clarivex.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
