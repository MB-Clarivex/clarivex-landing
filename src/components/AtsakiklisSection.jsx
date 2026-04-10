import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  MessageCircle,
  Moon,
  Zap,
  Shield,
  Inbox,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const accentFrom = 'from-blue-500';
const accentTo = 'to-purple-500';
const accentBorder = 'border-blue-500/30';
const accentText = 'text-blue-400';
const accentBg = 'bg-blue-500/10';

const edgeItems = [
  {
    title: 'Jau platformoje',
    body: 'DM ir komentarų inbox su AI — ne atskiras „chatbot projektas“ su mėnesiais planavimo.',
  },
  {
    title: 'Meta integracija',
    body: 'Prijungiate Instagram ir Facebook per oficialų Meta prisijungimą — veikiate savo paskyrose.',
  },
  {
    title: 'Skaidri kaina',
    body: 'Kreditų sistema: mokate už realų naudojimą, be paslėpto mėnesinio plano už patį faktą.',
  },
  {
    title: 'Lietuviškai',
    body: 'AI atsakymai ir tonas pritaikomi jūsų verslui lietuvių kalba.',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Greitesnis pirmas atsakymas',
    description:
      'AI siūlo juodraštį — jūs patvirtinate ar paredaguojate. Mažiau tuščios eilės klientams.',
  },
  {
    icon: Inbox,
    title: 'Vienas inbox',
    description: 'Facebook ir Instagram komentarai bei DM vienoje vietoje — nereikia šokinėti tarp programėlių.',
  },
  {
    icon: Sparkles,
    title: 'AI juodraščiai',
    description: 'Atsakymai pagal jūsų stilių ir kontekstą — ne šablonai be galvos.',
  },
  {
    icon: Zap,
    title: 'Automatizacija',
    description:
      'Auto-reply pagal raktažodžius, intent-based taisyklės, žinutės ne darbo metu — kur sukonfigūruosite.',
  },
  {
    icon: Moon,
    title: '24/7 pasiekiamumas',
    description:
      'Kai sukonfigūruojate automatizaciją ir AI, klientai gali gauti atsakymą bet kuriuo metu — jūs kontroliuojate taisykles.',
  },
  {
    icon: Shield,
    title: 'Kontrolė pas jus',
    description:
      'Leidimai per Meta; duomenys naudojami atsakymams ir funkcijoms, kaip aprašyta privatumo politikoje.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Prisijunkite prie Clarivex',
    body: 'Sukurkite paskyrą app.clarivex.ai — greitai, be sudėtingo diegimo pas paslaugų teikėją.',
  },
  {
    n: '2',
    title: 'Prijunkite Meta paskyrą',
    body: 'Socialinių tinklų skyriuje prijunkite Facebook puslapį ir Instagram (Business arba Creator).',
  },
  {
    n: '3',
    title: 'Valdykite inbox ir AI',
    body: 'Atsakykite į DM ir komentarus su AI pagalba, nustatykite taisykles ir automatizaciją.',
  },
];

const AtsakiklisSection = () => {
  const handleStart = () => {
    window.location.href = 'https://app.clarivex.ai/';
  };

  return (
    <section id="atsakiklis" className="cvx-content-visibility py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
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
            className={`inline-flex items-center gap-2 px-4 py-2 ${accentBg} border ${accentBorder} rounded-full ${accentText} text-sm font-medium mb-6`}
          >
            <MessageCircle className="w-4 h-4" />
            Messenger ir Instagram DM
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Išmanus atsakiklis</span>
            <br />
            <span
              className={`bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}
            >
              klientams visą parą
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Clarivex AI padeda atsakyti į Messenger ir Instagram žinutes greičiau — su juodraščiais,
            taisyklėmis ir automatizacija lietuvių kalba.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Vienoje platformoje: inbox, AI siūlomi atsakymai ir nustatymai, kuriuos kontroliuojate jūs.
            Tinka verslams, kurie jau naudoja Meta ir nori mažiau rankinio copy-paste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
        >
          <p className="text-center text-lg md:text-xl font-semibold text-white mb-6">
            Kol kiti žada — <span className={accentText}>mes jau turime</span>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {edgeItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-4 text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${accentText}`} />
                  <span className="font-medium text-white text-sm">{item.title}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[320px]"
          >
            <div className="relative bg-gray-900 rounded-[3rem] p-3 border-4 border-gray-800 shadow-2xl shadow-purple-500/15">
              <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden">
                <div className="bg-gray-900 px-5 py-2.5 flex justify-between items-center text-xs text-gray-400">
                  <span>9:41</span>
                  <Smartphone className="w-3.5 h-3.5 opacity-60" />
                </div>
                <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    C
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Jūsų prekės ženklas</p>
                    <p className="text-gray-500 text-xs">Instagram · aktyvu</p>
                  </div>
                </div>
                <div className="p-4 space-y-3 min-h-[280px] bg-gray-950/80">
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[88%]">
                      <p className="text-white text-sm">Sveiki! Kokia šiandien pristatymo kaina?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[88%] border border-gray-700/80">
                      <p className="text-gray-200 text-sm">
                        Labas! Siunčiame per 1–2 d. d. Kreditai nuo… — patvirtinkite, jei tinka.
                      </p>
                      <p className="text-gray-500 text-[10px] mt-1">AI juodraštis · peržiūrėti</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[88%]">
                      <p className="text-white text-sm">Gerai, ačiū.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 px-3 py-2.5 flex items-center gap-2">
                  <div className="flex-1 bg-gray-800 rounded-full px-3 py-2 text-gray-500 text-sm">
                    Žinutė…
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Kuo tai naudinga</h2>
            <p className="text-gray-400 text-sm mb-4">
              Funkcijos, kurias rasite Clarivex Inbox ir Automatizacijos skyriuose.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b, index) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  className="group p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg ${accentBg} border ${accentBorder} flex items-center justify-center shrink-0`}
                    >
                      <b.icon className={`w-4 h-4 ${accentText}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{b.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Kaip pradedate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-gray-700/60 bg-gray-900/30 p-6 text-center md:text-left"
              >
                <div
                  className={`inline-flex w-10 h-10 items-center justify-center rounded-full ${accentBg} ${accentText} font-bold mb-4`}
                >
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Daugiau apie prijungimą:{' '}
            <Link to="/duk" className="text-blue-400 hover:text-blue-300">
              DUK
            </Link>
            {' · '}
            <Link to="/features" className="text-blue-400 hover:text-blue-300">
              funkcijos
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-700/50 bg-gray-800/20 p-6 md:p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Pasitikėjimas ir leidimai</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instagram ir Facebook prijungiate per Meta su jūsų aiškiai suteiktais leidimais.
                Clarivex naudoja integraciją atsakymams ir suplanuotoms funkcijoms — kaip aprašyta{' '}
                <Link to="/privatumas" className="text-blue-400 hover:text-blue-300">
                  privatumo politikoje
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleStart}
            className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25"
          >
            Atidaryti Clarivex
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
              Kainodara ir kreditai
            </Link>
            {' · '}
            <Link to="/features" className="text-blue-400 hover:text-blue-300">
              Visos platformos galimybės
            </Link>
            {' · '}
            <Link to="/" className="text-blue-400 hover:text-blue-300">
              Pagrindinis puslapis
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AtsakiklisSection;
