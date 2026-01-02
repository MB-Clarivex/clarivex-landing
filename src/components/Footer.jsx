import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-2 mb-6 cursor-pointer group"
            >
              <img 
                src="/logo.png" 
                alt="Clarivex" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">Clarivex</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI asistentų platforma, kuri automatizuoja kasdienius darbus — 
              nuo socialinių tinklų iki el. pašto valdymo.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/clarivex.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/clarivex.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/clarivex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-5">Platforma</p>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => handleScrollTo('features')} 
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  Funkcijos
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleScrollTo('how-it-works')} 
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  Kaip veikia
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleScrollTo('pricing')} 
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  Kainodara
                </span>
              </li>
              <li>
                <a 
                  href="https://app.clarivex.ai/" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Prisijungti
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold text-white mb-5">Pagalba</p>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/duk" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  DUK
                </Link>
              </li>
              <li>
                <Link 
                  to="/statusas" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Sistemos statusas
                </Link>
              </li>
              <li>
                <span 
                  onClick={() => handleScrollTo('cta')} 
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors text-sm"
                >
                  DUK
                </span>
              </li>
              <li>
                <a 
                  href="mailto:info@clarivex.ai" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Susisiekti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-5">Kontaktai</p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@clarivex.ai" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@clarivex.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/clarivex_support" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Telegram palaikymas</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Clarivex. Visos teisės saugomos.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privatumas" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privatumo politika
            </Link>
            <Link to="/salygos" className="text-gray-500 hover:text-gray-300 transition-colors">
              Naudojimosi sąlygos
            </Link>
            <Link to="/duomenu-istrynimas" className="text-gray-500 hover:text-gray-300 transition-colors">
              Duomenų ištrynimas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
