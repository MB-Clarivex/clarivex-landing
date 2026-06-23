import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <section className="cvx-content-visibility cvx-hairline py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Kur pradėti?</h2>
        <p className="text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Jei norite greitai suprasti produktą, pradėkite nuo svarbiausių puslapių.{' '}
          <Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300 font-medium">AI atsakiklis Messenger, DM ir komentarams</Link>{' '}
          — inbox ir taisyklės;{' '}
          <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 font-medium">Kaip veikia Clarivex</Link>{' '}
          paaiškina eigą, o kiti puslapiai parodo funkcijas, naudą ir kainodarą.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/features" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI funkcijos ir galimybės verslui
          </Link>
          <Link to="/kaip-veikia" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Kaip veikia Clarivex platforma
          </Link>
          <Link to="/nauda" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI sprendimai mažoms įmonėms
          </Link>
          <Link to="/telegram" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Telegram integracija ir balso komandos
          </Link>
          <Link to="/atsakiklis" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI atsakiklis: DM, Messenger ir komentarai
          </Link>
          <Link to="/kainos" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Kainodara ir kreditų sistema
          </Link>
          <Link to="/resursai" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI resursai ir praktiniai straipsniai
          </Link>
          <a href="/#pakviesk" className="cvx-surface px-4 py-2 text-slate-300 hover:text-white hover:!border-emerald-500/40 transition-all">
            Pakviesk draugą — 10% abiem
          </a>
          <Link to="/duk" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            DUK
          </Link>
          <Link to="/statusas" className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Sistemos statusas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
