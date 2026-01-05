import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mic, Calendar, Image, Mail, Clock, Zap, Smartphone } from 'lucide-react';

const voiceCommands = [
  {
    voice: '🎤 "Sukurk postą apie mūsų naują kolekciją"',
    result: "✨ Postas sukurtas!",
    detail: "Instagram + Facebook • Carousel su 4 nuotraukomis",
    time: "3.2s",
    icon: Calendar
  },
  {
    voice: '🎤 "Primink rytoj 9:00 paskambinti klientui"',
    result: "⏰ Priminimas nustatytas!",
    detail: "Rytoj 09:00 • Telegram pranešimas",
    time: "1.8s",
    icon: Clock
  },
  {
    voice: '🎤 "Sugeneruok paveikslėlį žiemos išpardavimui"',
    result: "🎨 Paveikslėlis sukurtas!",
    detail: "1792×1024 HD • Išsaugotas į galeriją",
    time: "8.4s",
    icon: Image
  },
  {
    voice: '🎤 "Atsakyk į paskutinį el. laišką"',
    result: "📧 Juodraštis paruoštas!",
    detail: "Profesionalus atsakymas • 1 paspaudimas siųsti",
    time: "2.1s",
    icon: Mail
  }
];

const useTypingEffect = (text, speed = 30, startDelay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let index = 0;
    
    const startTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(prev => prev + text.charAt(index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(intervalId);
        }
      }, speed);
      return () => clearInterval(intervalId);
    }, startDelay);
    
    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);
  
  return { displayedText, isComplete };
};

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const command = voiceCommands[currentCommand];
  const { displayedText: voiceText, isComplete: voiceComplete } = useTypingEffect(
    command.voice, 25, 500
  );
  
  useEffect(() => {
    if (voiceComplete) {
      const resultTimer = setTimeout(() => setShowResult(true), 800);
      return () => clearTimeout(resultTimer);
    }
  }, [voiceComplete]);
  
  useEffect(() => {
    if (showResult) {
      const nextTimer = setTimeout(() => {
        setShowResult(false);
        setCurrentCommand((prev) => (prev + 1) % voiceCommands.length);
      }, 3500);
      return () => clearTimeout(nextTimer);
    }
  }, [showResult]);

  const handleTelegramRegister = () => {
    window.open('https://t.me/clarivex_notify_bot', '_blank');
  };

  const handleEmailRegister = () => {
    window.location.href = "https://app.clarivex.ai/auth";
  };

  const handleDemo = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-4 py-20 mt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>🎁 Pradėk NEMOKAMAI — 2000 kreditų dovanų</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Pasakyk.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Clarivex padarys.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Socialiniai tinklai, el. paštas, priminimai, paveikslėliai — 
            <span className="text-blue-400 font-semibold"> viena balso komanda</span> ir viskas padaryta per sekundes.
          </motion.p>

          {/* Pricing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 py-4"
          >
            <div className="text-center px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-2xl font-bold text-green-400">€0</p>
              <p className="text-xs text-green-300/80">Pradžia</p>
              <p className="text-xs text-gray-500">+2000 kr.</p>
            </div>
            <div className="text-center px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl">
              <p className="text-2xl font-bold text-white">nuo €1</p>
              <p className="text-xs text-gray-400">Pavedimas</p>
              <p className="text-xs text-emerald-400">Be mokesčių</p>
            </div>
            <div className="text-center px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl">
              <p className="text-2xl font-bold text-white">nuo €5</p>
              <p className="text-xs text-gray-400">Kortelė</p>
              <p className="text-xs text-blue-400">Momentinis</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 pt-4"
          >
            {/* Primary CTA - Telegram */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center">
              <Button
                size="lg"
                onClick={handleTelegramRegister}
                className="w-full sm:w-auto bg-gradient-to-r from-[#0088cc] to-[#0077b5] hover:from-[#0077b5] hover:to-[#006699] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#0088cc]/25 transition-all duration-300 group"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Registruotis su Telegram
                <span className="ml-2 text-sm opacity-75">2000 kr.</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDemo}
                className="w-full sm:w-auto border-2 border-gray-600 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-700/50 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Kaip tai veikia?
              </Button>
            </div>
            
            {/* Secondary options */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3 sm:gap-6">
              <button
                onClick={handleEmailRegister}
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Registruotis su email (200 kr.)
              </button>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="https://app.clarivex.ai/"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-1"
              >
                Jau turite paskyrą? Prisijungti
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Voice Command Demo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative w-full max-w-md">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            
            {/* Main card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-700/50 bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Clarivex AI</p>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Klausau...
                    </p>
                  </div>
                </div>
                <Mic className="w-5 h-5 text-red-400 animate-pulse" />
              </div>

              {/* Chat area */}
              <div className="p-5 space-y-4 min-h-[280px]">
                <AnimatePresence mode="wait">
                  {/* Voice command */}
                  <motion.div
                    key={`voice-${currentCommand}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-end"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-2xl rounded-br-md max-w-[90%] shadow-lg">
                      <p className="text-sm font-medium">{voiceText}</p>
                      {voiceComplete && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-1 mt-2 text-blue-200 text-xs"
                        >
                          <Mic className="w-3 h-3" />
                          <span>Balso komanda</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Result */}
                  {showResult && (
                    <motion.div
                      key={`result-${currentCommand}`}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-800/80 border border-gray-700/50 p-4 rounded-2xl rounded-bl-md max-w-[90%] shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                            <command.icon className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="font-bold text-green-400">{command.result}</p>
                            <p className="text-xs text-gray-400">{command.detail}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                          <span className="text-xs text-gray-500">Atlikta per</span>
                          <span className="text-sm font-bold text-blue-400">{command.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer - voice indicator */}
              <div className="p-4 border-t border-gray-700/50 bg-gray-800/30">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-blue-400 rounded-full"
                        animate={{
                          height: [8, 20, 8],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">Pasakyk ką nori...</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-4 top-1/4 bg-gray-800/90 backdrop-blur border border-gray-700 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-xs text-gray-400">Šią savaitę</p>
                  <p className="text-sm font-bold text-white">12 postų</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-4 bottom-1/4 bg-gray-800/90 backdrop-blur border border-gray-700 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-gray-400">Atsakyta</p>
                  <p className="text-sm font-bold text-white">47 laiškai</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
