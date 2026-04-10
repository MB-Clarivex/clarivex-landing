import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Moon,
  Zap,
  Shield,
  Inbox,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Smartphone,
  CalendarClock,
  Timer,
  ListFilter,
  Headphones,
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
    body: 'DM, Messenger ir komentarai vienoje vietoje su AI — ne atskiras „chatbot projektas“ su mėnesiais planavimo.',
  },
  {
    title: 'Meta integracija',
    body: 'Prijungiate Instagram ir Facebook per oficialų Meta prisijungimą — kiekviena paskyra valdoma atskirai.',
  },
  {
    title: 'Skaidri kaina',
    body: 'Kreditų sistema: mokate už realų naudojimą, be paslėpto mėnesinio plano už patį faktą.',
  },
  {
    title: 'Pirmas paleidimas',
    body: 'Su pirmu atsakiklio paleidimu padedame nemokamai — kad greitai pasiektumėte veikiančią konfigūraciją.',
  },
];

const benefits = [
  {
    icon: Inbox,
    title: 'DM ir komentarai',
    description:
      'Atsakymai į tiesiogines žinutes (Messenger, Instagram DM) ir į komentarus po įrašais — viskas tame pačiame inbox.',
  },
  {
    icon: ListFilter,
    title: 'Skirtingos taisyklės žinutėms ir komentarams',
    description:
      'Kiekvienai paskyrai atskirai: įjungti ar išjungti automatiką DM ir komentaruose, atskiros auto-reply taisyklės tik žinutėms, tik komentarams ar visur.',
  },
  {
    icon: CalendarClock,
    title: 'Darbo valandos ir grafikas',
    description:
      'Nustatykite, kada AI gali atsakinėti automatiškai (pagal dienas ir intervalus, laiko juostą), ir ne darbo valandų žinutes — klientas žino, kada sulauks žmogaus.',
  },
  {
    icon: Timer,
    title: '4 val. po jūsų atsakymo',
    description:
      'Kai atsakote patys (per programėlę ar Meta), AI tam pokalbiui nebekiša nosies 4 valandas — lieka erdvė žmogui, vėliau automatiką galima vėl paleisti pagal taisykles.',
  },
  {
    icon: Sparkles,
    title: 'AI juodraščiai ir tonas',
    description:
      'Siūlomi atsakymai pagal jūsų stilių ir žinių bazę — ne tušti šablonai; galite patvirtinti ar paredaguoti prieš siunčiant.',
  },
  {
    icon: Zap,
    title: 'Auto-reply ir intencijos',
    description:
      'Taisyklės pagal raktažodžius, intenciją, pirmą kontaktą, sentimentą; ribojimai per dieną ir „cooldown“ tarp atsakymų — kad išliktų natūralu.',
  },
  {
    icon: Moon,
    title: '24/7 kai jums tinka',
    description:
      'Jei leidžiate automatiką už grafiko ribų ar su ne darbo valandų tekstu, klientas vis tiek gauna aiškų atsakymą — be „tylos“ iki rytojaus.',
  },
  {
    icon: Headphones,
    title: 'Pagalba pirmam paleidimui',
    description:
      'Nemokamai padedame su pirmu atsakiklio įjungimu ir pagrindiniais nustatymais, kad greitai pradėtumėte naudoti be spėliojimo.',
  },
  {
    icon: Shield,
    title: 'Kontrolė ir leidimai',
    description:
      'Integracija per Meta su jūsų suteiktais leidimais; duomenų naudojimas aprašytas privatumo politikoje.',
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
    title: 'Nustatykite taisykles ir paleiskite',
    body: 'Atskirai DM ir komentarams, darbo grafikas, auto-reply — tada AI ir juodraščiai dirba pagal jūsų scenarijų. Pirmam kartui padedame nemokamai.',
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
            DM, Messenger ir komentarai
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Išmanus atsakiklis</span>
            <br />
            <span
              className={`bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}
            >
              žinutėms ir komentarams
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Clarivex AI padeda atsakyti į Messenger, Instagram DM ir komentarus po įrašais — greičiau,
            su juodraščiais, taisyklėmis ir automatizacija lietuvių kalba.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Kiekvienai paskyrai atskirai: kada AI atsakinėja, skirtingos taisyklės žinutėms ir komentarams,
            po jūsų atsakymo — 4 val. pertrauka automatikai tame pokalbyje. Pirmam paleidimui padedame
            nemokamai.
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
                <div className="p-4 space-y-3.5 min-h-[300px] bg-gray-950/80">
                  {/* 1 — klientas */}
                  <div className="flex justify-start">
                    <div className="max-w-[90%]">
                      <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 border border-gray-700/80">
                        <p className="text-gray-200 text-sm">
                          Ar ši prekė bus sandėlyje sekmadienį?
                        </p>
                      </div>
                      <p className="text-gray-500 text-[10px] mt-1 pl-0.5">Klientas · komentaras</p>
                    </div>
                  </div>
                  {/* 2 — AI juodraštis */}
                  <div className="flex justify-end">
                    <div className="max-w-[90%]">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rounded-br-sm px-3 py-2">
                        <p className="text-white text-sm">
                          Sekmadienį sandėlis nedirba — išsiųsime pirmadienį. Ar tinka?
                        </p>
                      </div>
                      <p className="text-gray-500 text-[10px] mt-1 pr-0.5 text-right">
                        AI juodraštis · patvirtinti
                      </p>
                    </div>
                  </div>
                  {/* 3 — klientas */}
                  <div className="flex justify-start">
                    <div className="max-w-[90%]">
                      <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 border border-gray-700/80">
                        <p className="text-gray-200 text-sm">Gerai. O dydis M dar yra?</p>
                      </div>
                      <p className="text-gray-500 text-[10px] mt-1 pl-0.5">Klientas · DM</p>
                    </div>
                  </div>
                  {/* 4 — AI (automatika / darbo laikas) */}
                  <div className="flex justify-end">
                    <div className="max-w-[90%]">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rounded-br-sm px-3 py-2">
                        <p className="text-white text-sm">
                          Taip, M turime. Siunčiame per 1–2 d. d.
                        </p>
                      </div>
                      <p className="text-gray-500 text-[10px] mt-1 pr-0.5 text-right">
                        AI · automatinis · darbo valandos
                      </p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Kaip veikia
          </h2>
          <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-10">
            Nuo paskyros prijungimo iki veikiančio atsakiklio — keliais aiškiais žingsniais.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-gray-700/60 bg-gray-900/30 p-6 text-center flex flex-col items-center"
              >
                <div
                  className={`flex w-10 h-10 items-center justify-center rounded-full ${accentBg} ${accentText} font-bold mb-4`}
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
