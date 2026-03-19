import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <section className="cvx-content-visibility py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kur pradėti?</h2>
        <p className="text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Jei norite greitai suprasti produktą, pradėkite nuo svarbiausių puslapių.{' '}
          <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">Kaip veikia Clarivex</Link>{' '}
          paaiškina eigą, o kiti puslapiai parodo funkcijas, naudą ir kainodarą.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/features" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            AI funkcijos ir galimybės verslui
          </Link>
          <Link to="/kaip-veikia" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            Kaip veikia Clarivex platforma
          </Link>
          <Link to="/nauda" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            AI sprendimai mažoms įmonėms
          </Link>
          <Link to="/telegram" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            Telegram integracija ir balso komandos
          </Link>
          <Link to="/kainos" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            Kainodara ir kreditų sistema
          </Link>
          <Link to="/resursai" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            AI resursai ir praktiniai straipsniai
          </Link>
          <a href="/#pakviesk" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-emerald-500/50 transition-all">
            Pakviesk draugą — 10% abiem
          </a>
          <Link to="/duk" className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-blue-500/50 transition-all">
            DUK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
