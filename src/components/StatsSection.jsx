import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Image, Clock, Package, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: '10+',
    label: 'AI modelių',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: MessageSquare,
    value: '~3s',
    label: 'vidutinis atsakymo laikas',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Image,
    value: ['1792', '×', '1024'],
    label: 'HD vaizdai',
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    icon: Package,
    value: '3 GB',
    label: 'nemokamai per Transfer',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'AI pagalba',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Sparkles,
    value: '1000 kr',
    label: 'dovanų pradžiai',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const StatsSection = () => {
  return (
    <section className="cvx-content-visibility cvx-hairline py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Kodėl Clarivex?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Galinga AI platforma su lanksčia kaina — moki tik už tai, ką naudoji
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="cvx-surface cvx-surface-hover relative h-full p-6">
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 mb-4 text-cyan-400 group-hover:border-cyan-500/30 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 flex flex-col items-center justify-center gap-0 leading-tight tracking-tight">
                      {Array.isArray(stat.value)
                        ? stat.value.map((line, i) => <span key={i}>{line}</span>)
                        : stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
