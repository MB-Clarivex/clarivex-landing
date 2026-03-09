import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getConsent,
  setConsent,
  hasConsent,
  OPEN_SETTINGS_EVENT,
} from '@/lib/cookieConsent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!hasConsent()) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    const handler = () => {
      const consent = getConsent();
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
      setIsVisible(true);
      setShowSettings(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
  }, []);

  const saveAndClose = (consent) => {
    setConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleEssentialOnly = () => {
    saveAndClose({ essential: true, analytics: false, marketing: false });
  };

  const handleAcceptAll = () => {
    saveAndClose({ essential: true, analytics: true, marketing: true });
  };

  const handleSaveSettings = () => {
    saveAndClose({
      essential: true,
      analytics,
      marketing,
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && e.stopPropagation()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Settings panel */}
            {showSettings ? (
              <div className="p-4 md:p-6">
                <h3 className="text-white font-semibold mb-4">
                  Slapukų nustatymai
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Pasirinkite, su kokiomis slapukų kategorijomis sutinkate.
                  Skaitykite daugiau{' '}
                  <Link
                    to="/privatumas"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    privatumo politikoje
                  </Link>
                  .
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm">
                        Būtiniai
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Reikalingi svetainės veikimui — sesijos, saugumas
                      </p>
                    </div>
                    <span className="text-gray-500 text-xs shrink-0">
                      Visada įjungti
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm">
                        Analitika
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Padeda suprasti, kaip naudojatės svetaine
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={analytics}
                      onClick={() => setAnalytics((v) => !v)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                        analytics ? 'bg-blue-500' : 'bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 shrink-0 rounded-full bg-white shadow ring-0 transition-transform ${
                          analytics ? 'translate-x-4' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm">
                        Marketingas
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Meta Pixel, reklamų personalizavimas
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={marketing}
                      onClick={() => setMarketing((v) => !v)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                        marketing ? 'bg-blue-500' : 'bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 shrink-0 rounded-full bg-white shadow ring-0 transition-transform ${
                          marketing ? 'translate-x-4' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSaveSettings}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm transition-colors"
                  >
                    Išsaugoti pasirinkimą
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
                  >
                    Atgal
                  </button>
                </div>
              </div>
            ) : (
              /* Banner */
              <div className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Naudojame slapukus, kad pagerintume jūsų patirtį. Galite
                    pasirinkti, su kuo sutinkate.{' '}
                    <Link
                      to="/privatumas"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      Privatumo politika
                    </Link>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <button
                    onClick={handleEssentialOnly}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
                  >
                    Tik būtiniai
                  </button>
                  <button
                    onClick={() => {
                      const c = getConsent();
                      setAnalytics(c?.analytics ?? false);
                      setMarketing(c?.marketing ?? false);
                      setShowSettings(true);
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
                  >
                    Nustatymai
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm transition-colors"
                  >
                    Priimti visus
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
