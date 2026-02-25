import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

const PACKAGES = [
  { price: 5, credits: 5000, bonus: 0, label: 'Pradinis' },
  { price: 10, credits: 10500, bonus: 5, label: 'Populiarus', popular: true },
  { price: 20, credits: 22000, bonus: 10, label: 'Pro' },
];

const BILLING_BASE = 'https://app.clarivex.ai/billing';
const handlePapildyti = (packageId) => {
  // Nukreips į app billing – jei neprisijungęs, app nukreips į auth, po to atgal į billing
  window.location.href = `${BILLING_BASE}?package=${packageId}`;
};

const handlePavedimu = () => {
  window.location.href = `${BILLING_BASE}?bank=true`;
};

const PapildymoSection = () => {
  return (
    <section id="papildymas" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ką gaunate papildę?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            1€ = 1000 kreditų. Didesnėms sumoms — bonus kreditai. Spustelėjus pildytis, 
            būsite nukreipti į prisijungimą, po to galėsite papildyti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.price}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                pkg.popular
                  ? 'border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/30'
                  : 'border-gray-700/50 bg-gray-800/30'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full">
                  ⭐ Populiariausias
                </span>
              )}
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-white">€{pkg.price}</div>
                <div className="text-lg font-semibold text-blue-400 mt-1">
                  {pkg.credits.toLocaleString('lt-LT')} kr.
                </div>
                {pkg.bonus > 0 && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                    +{pkg.bonus}% bonus
                  </span>
                )}
              </div>
              <Button
                onClick={() => handlePapildyti(`credits_${pkg.price}`)}
                className={`mt-auto w-full ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-500'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white`}
              >
                Papildyti
              </Button>
            </div>
          ))}

          {/* Pavedimu */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 flex flex-col">
            <div className="flex justify-center mb-2">
              <Wallet className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-center mb-4">
              <div className="text-lg font-bold text-white">Pavedimu</div>
              <div className="text-sm text-emerald-400 mt-1">nuo €1, tie patys bonus %</div>
              <div className="text-xs text-gray-500 mt-1">Kreditai per 24 val.</div>
            </div>
            <Button
              onClick={handlePavedimu}
              variant="outline"
              className="mt-auto w-full border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
            >
              Gauti sąskaitą
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Spustelėjus „Papildyti“ ar „Gauti sąskaitą“, būsite nukreipti į prisijungimą (jei dar neprisijungę), 
          po to — į papildymo puslapį, kur galėsite užbaigti mokėjimą.
        </motion.p>
      </div>
    </section>
  );
};

export default PapildymoSection;
