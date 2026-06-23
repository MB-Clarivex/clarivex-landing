import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  MessageCircle,
  ClipboardList,
  TrendingUp,
  X,
  ZoomIn,
  Bot,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const INFOGRAPHIC_SRC = '/atsakiklis-problema-sprendimas.png';

const problemExamples = [
  {
    business: 'Pirties nuoma',
    time: '21:47',
    result: 'Klientas jau išsinuomojo kitur.',
  },
  {
    business: 'Autoservisas',
    time: '20:15',
    result: 'Klientas pasirinko kitą servisą.',
  },
  {
    business: 'Grožio salonas',
    time: '19:32',
    result: 'Klientas jau užsiregistravo pas kitą.',
  },
];

const solutionPoints = [
  'Atsako per kelias sekundes — nesvarbu, kur esate.',
  'Surenka reikiamą informaciją: vardą, datą, paslaugą, kontaktus.',
  'Daugiau užklausų, daugiau klientų, daugiau laiko sau.',
];

const quickFeatures = [
  { icon: Clock, label: 'Dirba 24/7', sub: 'Net kai ilsitės' },
  { icon: MessageCircle, label: 'Atsako akimirksniu', sub: 'Be laukimo iki rytojaus' },
  { icon: ClipboardList, label: 'Surenka informaciją', sub: 'Neprarandamos užklausos' },
  { icon: TrendingUp, label: 'Padeda augti', sub: 'Daugiau užsakymų' },
];

function ChatBubble({ align, label, time, children, variant = 'customer' }) {
  const isRight = align === 'right';
  const bubbleClass =
    variant === 'ai'
      ? 'bg-gradient-to-br from-emerald-600 to-green-700 text-white'
      : variant === 'late'
        ? 'bg-gray-800 border border-red-500/30 text-gray-200'
        : 'bg-gray-800 border border-gray-700/80 text-gray-200';

  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[92%] ${isRight ? 'text-right' : 'text-left'}`}>
        <div
          className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${bubbleClass} ${
            isRight ? 'rounded-br-sm' : 'rounded-bl-sm'
          }`}
        >
          {children}
        </div>
        <p className={`text-[10px] mt-1 text-gray-500 ${isRight ? 'pr-0.5' : 'pl-0.5'}`}>
          {label}
          {time ? ` · ${time}` : ''}
        </p>
      </div>
    </div>
  );
}

function InfographicLightbox({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Infografikas per visą ekraną"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
        aria-label="Uždaryti"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="relative z-[10000] max-h-[92vh] w-full max-w-[min(96vw,1100px)] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={INFOGRAPHIC_SRC}
          alt="Nepraraskite klientų dėl vėluojančių atsakymų — problema ir Clarivex sprendimas"
          className="max-h-[92vh] w-full h-auto rounded-xl shadow-2xl object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}

const AtsakiklisProblemSection = ({ onStart }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        {/* Infografikas — pirmas po hero, kad sutaptų su reklama */}
        <div className="mb-10 md:mb-14">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="group relative w-full max-w-5xl mx-auto block rounded-xl overflow-hidden border border-gray-700/60 hover:border-blue-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xl shadow-black/30"
            aria-label="Atidaryti infografiką per visą ekraną"
          >
            <img
              src={INFOGRAPHIC_SRC}
              alt="Infografikas: nepraraskite klientų dėl vėluojančių atsakymų — problema ir Clarivex sprendimas"
              className="w-full h-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium">
                <ZoomIn className="w-4 h-4" />
                Peržiūrėti didesniu
              </span>
            </div>
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">
            Paspauskite paveikslėlį — didesniam vaizdui
          </p>
        </div>

        <div className="text-center mb-8">
          <Button
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25"
          >
            Pradėti nemokamai
          </Button>
          <p className="text-gray-500 text-xs mt-3">
            Pirmam atsakiklio paleidimui padedame nemokamai
          </p>
        </div>

        <p className="text-center text-gray-500 text-sm mb-8">
          Slinkite žemyn — daugiau apie problemą ir sprendimą
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-10">
          {/* Problema */}
          <div className="rounded-2xl border border-red-500/25 bg-red-950/20 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              <h2 className="text-xl font-bold text-white">Problema, kainuojanti klientus</h2>
            </div>
            <div className="space-y-4">
              {problemExamples.map((ex) => (
                <div
                  key={ex.business}
                  className="rounded-xl border border-red-500/20 bg-gray-900/50 p-4"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-medium text-white text-sm">{ex.business}</span>
                    <span className="text-red-400 text-xs font-mono">{ex.time}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">Užklausa vakare → atsakymas kitą dieną</p>
                  <p className="text-red-300/90 text-sm">{ex.result}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm font-medium text-red-200/90 bg-red-500/10 rounded-lg py-2.5 px-3 border border-red-500/20">
              Kiekviena neatsakyta užklausa gali būti prarastas klientas
            </p>
          </div>

          {/* Sprendimas + before/after */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-6 md:p-7">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Sprendimas — Clarivex</h2>
                  <p className="text-gray-400 text-sm">Automatinis atsakymas per kelias sekundes</p>
                </div>
              </div>
              <ul className="space-y-3">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-700/60 bg-gray-900/40 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-800 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Pirties namelis</p>
                  <p className="text-gray-500 text-xs">Messenger</p>
                </div>
              </div>

              <div className="p-4 space-y-5">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-3">
                    Be Clarivex
                  </p>
                  <div className="space-y-2.5 rounded-xl border border-red-500/15 bg-red-950/10 p-3">
                    <ChatBubble label="Klientas" time="21:47">
                      Sveiki, ar šį sekmadienį laisvas kubilas?
                    </ChatBubble>
                    <ChatBubble align="right" label="Verslas" time="09:12 (kitą dieną)" variant="late">
                      Labas! Taip, kubilas laisvas sekmadienį…
                    </ChatBubble>
                    <p className="text-center text-red-300/80 text-xs pt-1">
                      Klientas jau parašė kitur
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-3">
                    Su Clarivex
                  </p>
                  <div className="space-y-2.5 rounded-xl border border-emerald-500/15 bg-emerald-950/10 p-3">
                    <ChatBubble label="Klientas" time="21:47">
                      Sveiki, ar šį sekmadienį laisvas kubilas?
                    </ChatBubble>
                    <ChatBubble align="right" label="Clarivex AI" time="21:47" variant="ai">
                      Labas! Taip, sekmadienį kubilas laisvas. Kaina — 120 €. Daugiau info: [nuoroda]
                    </ChatBubble>
                    <p className="text-center text-emerald-300/80 text-xs pt-1">
                      Klientas gauna atsakymą iš karto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Greitos naudos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {quickFeatures.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-700/50 bg-gray-900/30 p-4 text-center"
            >
              <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium mb-0.5">{label}</p>
              <p className="text-gray-500 text-xs">{sub}</p>
            </div>
          ))}
        </div>

      </motion.div>

      <InfographicLightbox open={lightboxOpen} onClose={closeLightbox} />
    </>
  );
};

export default AtsakiklisProblemSection;
