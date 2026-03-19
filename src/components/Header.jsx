import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Pradžia' },
  { id: 'features', label: 'Funkcijos', href: '/features' },
  { id: 'resources', label: 'Resursai', href: '/resursai' },
  { id: 'how-it-works', label: 'Kaip veikia', href: '/kaip-veikia' },
  { id: 'benefits', label: 'Nauda', href: '/nauda' },
  { id: 'telegram', label: 'Telegram', href: '/telegram' },
  { id: 'pricing', label: 'Kainodara', href: '/kainos' },
  { id: 'pakviesk', label: 'Pakviesk draugą' },
  { id: 'cta', label: 'Kontaktai' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    // Jei ne pagrindiniame puslapyje, grįžti į pagrindinį
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    window.location.href = "https://app.clarivex.ai/";
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-950/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-2 cursor-pointer group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="/logo.svg" 
                alt="Clarivex" 
                width="40"
                height="40"
                decoding="async"
                fetchpriority="high"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
              Clarivex
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              link.href ? (
                <motion.div
                  key={link.id}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.button
                  key={link.id}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  onClick={() => handleScrollTo(link.id)}
                  className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            {/* Prisijungti - ryškus mygtukas */}
            <Button
              onClick={handleLogin}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              Prisijungti
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-gray-950/98 backdrop-blur-xl border-b border-gray-800 shadow-xl">
              <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  link.href ? (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleScrollTo(link.id)}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {link.label}
                    </motion.button>
                  )
                ))}
                <div className="border-t border-gray-800 my-2" />
                <Button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl"
                >
                  Pradėti nemokamai
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
