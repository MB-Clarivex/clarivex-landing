import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Zap, CheckCircle, Rocket, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Mic,
    title: 'Pasakyk arba parašyk',
    description: 'Balsu ar tekstu — lietuviškai, angliškai, ar bet kuria kalba. Veikia naršyklėje ir Telegram. Clarivex supranta natūralią kalbą.',
    example: '"Sukurk postą apie akcijas"',
    moreExamples: ['"Primink rytoj 9:00"', '"Atsimink mano vardas Jonas"', '"Pridėk pieno į pirkinių sąrašą"'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'AI apdoroja akimirksniu',
    description: 'GPT-5.1, GPT Image 1.5 ir DALL-E modeliai analizuoja užklausą ir sukuria rezultatą per sekundes.',
    example: 'Tekstas + nuotraukos + hashtags',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: CheckCircle,
    title: 'Peržiūrėk ir patvirtink',
    description: 'Vienu paspaudimu publikuok iškart arba suplanuok į kalendorių. Pilna kontrolė tavo rankose.',
    example: 'Publikuoti dabar / Planuoti',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Padaryta!',
    description: 'Postas keliauja į Instagram, Facebook. El. laiškas išsiunčiamas. Priminimas nustatytas. Viskas automatiškai.',
    example: '✓ Instagram ✓ Facebook',
    color: 'from-orange-500 to-red-500'
  }
];

const demoMessages = [
  { type: 'user', text: '🎤 "Sukurk postą apie mūsų žiemos kolekciją"' },
  { type: 'ai', text: '✨ Postas sukurtas!\n\n❄️ Žiemos kolekcija jau čia! Šilti megztiniai, jaukūs šalikėliai ir stilingi paltai laukia tavęs.\n\n#žiema #kolekcija #mada' },
  { type: 'system', text: '📸 4 nuotraukos pridėtos • Carousel paruoštas' }
];

const HowItWorks = () => {
  const handleTry = () => {
    window.location.href = "https://app.clarivex.ai/";
  };

  return (
    <section id="how-it-works" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4" />
            4 paprasti žingsniai
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Nuo idėjos iki rezultato</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              per 10 sekundžių
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Jokių sudėtingų nustatymų. Jokio mokymosi. Tiesiog pasakyk ką nori — ir Clarivex tai padarys.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Clarivex yra AI asistentas, sukurtas lietuvių verslui. Nesvarbu ar kuriate Instagram postus, rašote el. laiškus ar planuojate turinį — platforma supranta lietuvišką kalbą ir atlieka užduotis per kelias sekundes. Tausodami laiką, galite susitelkti į strategiją ir klientų aptarnavimą.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-600 to-transparent" />
                )}
                
                <div className="flex gap-5 group">
                  {/* Step number & icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-300">
                      <span className="text-blue-400">→</span>
                      {step.example}
                    </div>
                    {step.moreExamples && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {step.moreExamples.map((ex, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-800/30 rounded text-xs text-gray-400 border border-gray-700/50">
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            
            {/* Demo card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-700/50 bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-gray-400 font-medium">Clarivex Demo</span>
                </div>
                <div className="text-xs text-gray-500">Realus pavyzdys</div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-4 min-h-[320px]">
                {demoMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md' 
                        : msg.type === 'ai'
                        ? 'bg-gray-800 text-white rounded-bl-md border border-gray-700/50'
                        : 'bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm'
                    }`}>
                      <p className="whitespace-pre-line text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Time indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Atlikta per <span className="font-bold text-white">4.2s</span></span>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="p-5 border-t border-gray-700/50 bg-gray-800/30 space-y-3">
                <Button
                  onClick={handleTry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 rounded-xl font-medium group"
                >
                  Išbandyk pats
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-gray-500">
                  <Link to="/kainos" className="text-blue-400 hover:text-blue-300">Peržiūrėti kainas</Link>
                  {' · '}
                  <Link to="/features" className="text-blue-400 hover:text-blue-300">Visi funkcijos</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
