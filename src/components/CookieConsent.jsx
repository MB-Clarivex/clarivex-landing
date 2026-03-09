import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getConsent,
  setConsent,
  hasConsent,
  OPEN_SETTINGS_EVENT,
} from '@/lib/cookieConsent';

const CookieConsent = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const isPrivacyPage = pathname === '/privatumas';
  const shouldBlock = isVisible && !isPrivacyPage;

  useEffect(() => {
    if (!hasConsent()) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (shouldBlock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [shouldBlock]);

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
      {shouldBlock && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && e.stopPropagation()}
        />
      )}
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] border-t border-gray-700 bg-gray-900 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto">
            {/* Settings panel */}
            {showSettings ? (
              <div className="p-4 sm:p-5 md:p-6 max-h-[80vh] overflow-y-auto">
                <h3 className="text-white font-semibold text-lg md:text-xl mb-4">
                  Slapukų nustatymai
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
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
                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <div className="flex items-start justify-between gap-4 p-4 md:p-5 rounded-xl bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">
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
                  <div className="flex items-start justify-between gap-4 p-4 md:p-5 rounded-xl bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">
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
                  <div className="flex items-start justify-between gap-4 p-4 md:p-5 rounded-xl bg-gray-800/50">
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">
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
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleSaveSettings}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm transition-colors"
                  >
                    Išsaugoti pasirinkimą
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
                  >
                    Atgal
                  </button>
                </div>
              </div>
            ) : (
              /* Banner */
              <div className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1 min-w-0">
                  Naudojame slapukus, kad pagerintume jūsų patirtį. Galite
                  pasirinkti, su kuo sutinkate.{' '}
                  <Link
                    to="/privatumas"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    Privatumo politika
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
                  <button
                    onClick={handleEssentialOnly}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
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
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-lg text-sm transition-colors"
                  >
                    Nustatymai
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm transition-colors"
                  >
                    Priimti visus
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
