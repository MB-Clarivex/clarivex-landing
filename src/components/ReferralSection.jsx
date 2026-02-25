import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReferralSection = () => {
  const handleGoToApp = () => {
    window.location.href = 'https://app.clarivex.ai/billing';
  };

  return (
    <section id="pakviesk" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6"
          >
            <Share2 className="w-4 h-4" />
            Pakviesk draugą
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Abu gaunate po </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">10% bonus</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Pasiūlyk Clarivex draugui — jis registruojasi per tavo nuorodą ir papildo bent €10. 
            Tu ir tavo draugas gaunate po 10% papildomų kreditų. Vienkartinis bonusas už pirmą papildymą.
          </p>
          <p className="text-base text-emerald-400/90 max-w-xl mx-auto mt-4 font-medium">
            Kuo daugiau papildo — tuo daugiau gauna abu: €20 → +2 000 kr., €50 → +5 000 kr. ir t. t.
          </p>
        </motion.div>

        {/* How it works - two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-14"
        >
          {/* Referrer (Tu) */}
          <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Tu — pakvietei</h3>
                <p className="text-sm text-gray-500">Pasidalink savo nuoroda</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Gauk savo nuorodą Billing puslapyje (prisijungus)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Draugas registruojasi per tavo nuorodą</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Kai jis papildo bent €10 — gauni <strong className="text-emerald-400">+10%</strong> nuo sumos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Gali atvesti daug draugų — iš kiekvieno pirmo papildymo po 10%</span>
              </li>
            </ul>
          </div>

          {/* Referred (Draugas) */}
          <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Gift className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Draugas — prisijungė</h3>
                <p className="text-sm text-gray-500">Per tavo nuorodą</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Atidaro tavo nuorodą ir registruojasi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Papildo bent €10 (kortele arba pavedimu)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Gauna <strong className="text-emerald-400">+10%</strong> papildomų kreditų pirmam papildymui</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>10% nuo bet kokios sumos (€10, €20, €50…) — kuo daugiau, tuo daugiau bonus</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Example box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Pavyzdžiai — 10% nuo bet kokios sumos</p>
                  <p className="text-sm text-gray-400">Kuo daugiau papildo, tuo daugiau gauna abu</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-400">€10</span>
                  <span className="text-emerald-400 font-bold ml-2">→ +1 000 kr.</span>
                </div>
                <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-400">€20</span>
                  <span className="text-emerald-400 font-bold ml-2">→ +2 000 kr.</span>
                </div>
                <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-400">€30</span>
                  <span className="text-emerald-400 font-bold ml-2">→ +3 000 kr.</span>
                </div>
                <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-400">€50</span>
                  <span className="text-emerald-400 font-bold ml-2">→ +5 000 kr.</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center sm:text-left">Abu laimi — vienkartinis bonusas už pirmą papildymą.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Prisijunk prie Clarivex ir gauk savo nuorodą Billing puslapyje. Pasidalink su draugais — abu naudositės.
          </p>
          <Button
            onClick={handleGoToApp}
            className="px-8 py-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Gauti savo nuorodą
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            Būsite nukreipti į prisijungimą, po to — į Billing, kur rasite bloką „Pakviesk draugą“.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralSection;
