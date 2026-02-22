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
    value: '1792×1024',
    label: 'HD paveikslėliai',
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
    <section className="cvx-content-visibility py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900/50 to-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Kodėl Clarivex?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Galinga AI platforma su lanksčia kaina — moki tik už tai, ką naudoji
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative h-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
                  <div className="relative text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
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
