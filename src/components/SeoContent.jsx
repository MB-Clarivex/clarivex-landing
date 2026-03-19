import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clarivex AI asistentas lietuvių kalba
          </h2>
          <p className="text-lg text-gray-400">
            Vienoje vietoje sujungiami socialiniai tinklai, el. paštas, priminimai ir Telegram.
            Clarivex padeda greičiau atlikti kasdienius verslo darbus lietuvių kalba.
          </p>
        </div>

        <div className="space-y-5 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Kaip veikia Clarivex AI</h3>
            <p>
              Jūs parašote arba pasakote, ko reikia. Clarivex supranta lietuvių kalbą, paruošia
              rezultatą ir padeda pereiti nuo idėjos prie realaus veiksmo.
            </p>
            <p className="mt-3">
              Tai gali būti socialinio tinklo postas, laiško juodraštis, priminimas, užrašas ar
              kita pasikartojanti užduotis. Plačiau skaitykite puslapyje{' '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia
              </Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Pagrindinės funkcijos verslui</h3>
            <p>
              Clarivex tinka mažoms įmonėms, e. parduotuvėms, agentūroms ir freelancer'iams.
              Svarbiausia vertė atsiranda tada, kai viena sistema padeda su turiniu, komunikacija
              ir rutina.
            </p>
            <p className="mt-3">
              Visas pagrindines galimybes rasite puslapyje{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Funkcijos
              </Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Nauda kasdienėms užduotims</h3>
            <p>
              AI didžiausią vertę duoda ne tada, kai parašo vieną gražų tekstą, o kai sutrumpina
              keliolika mažų veiksmų per dieną. Mažiau kopijavimo, mažiau perrašinėjimo ir daugiau
              aiškumo komandoje.
            </p>
            <p className="mt-3">
              Praktinius panaudojimo atvejus aprašome puslapyje{' '}
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                Nauda verslui
              </Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Kaip pradėti naudotis Clarivex</h3>
            <p>
              Pradėti paprasta: išsirenkate vieną procesą, kurį norite sutrumpinti. Dažniausiai tai
              būna socialinių tinklų turinys, el. pašto atsakymai arba Telegram darbo eiga.
            </p>
            <p className="mt-3">
              Paskui galite peržiūrėti{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                kainodarą
              </Link>{' '}
              ir pradėti nuo mažo testavimo be mėnesinio plano.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Ką automatizuoja Clarivex?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Socialinių tinklų turinio planavimą ir publikavimą</li>
              <li>El. laiškų rašymą, atsakymus ir taisykles</li>
              <li>Priminimus, užrašus ir idėjų kaupimą</li>
              <li>Paveikslėlių generavimą ir dokumentų analizę</li>
            </ul>
          </div>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Kam naudingas AI asistentas?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mažoms įmonėms ir e‑parduotuvėms</li>
              <li>Freelancer’iams ir rinkodaros specialistams</li>
              <li>Agentūroms, dirbančioms su keliais klientais</li>
              <li>Komandoms, kurios nori aiškios komunikacijos</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Dažniausiai užduodami klausimai</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-semibold text-white">Ar Clarivex veikia lietuviškai?</p>
              <p>
                Taip, Clarivex puikiai supranta lietuvių kalbą ir gali vykdyti tiek tekstines,
                tiek balso komandas.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Kaip veikia kreditų sistema?</p>
              <p>
                1€ = 1000 kreditų. Kreditai naudojami AI veiksmams, o nepanaudoti kreditai
                niekada nesibaigia.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Ar reikia kortelės registracijai?</p>
              <p>
                Ne. Registracija nemokama, o nauji vartotojai gauna iki 1000 kreditų dovanų.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Ar mano duomenys saugūs?</p>
              <p>
                Duomenys šifruojami ir saugomi ES serveriuose. Socialiniai tinklai jungiami per
                OAuth, o el. paštui naudojamas IMAP arba App Password principas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Paruošti pradėti?</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://app.clarivex.ai/auth"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
            >
              Išbandyti Clarivex
            </a>
            <Link
              to="/kainos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-semibold rounded-xl transition-all"
            >
              Peržiūrėti kainas
            </Link>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Naudingos nuorodos</h3>
          <ul className="space-y-2 text-gray-300 max-w-md mx-auto text-left">
            <li><Link to="/features" className="text-blue-400 hover:text-blue-300">Funkcijos ir galimybės</Link></li>
            <li><Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">Kaip veikia</Link></li>
            <li><Link to="/nauda" className="text-blue-400 hover:text-blue-300">Privalumai verslui</Link></li>
            <li><Link to="/telegram" className="text-blue-400 hover:text-blue-300">Telegram integracija</Link></li>
            <li><Link to="/kainos" className="text-blue-400 hover:text-blue-300">Kainodara</Link></li>
            <li><Link to="/resursai" className="text-blue-400 hover:text-blue-300">AI resursų centras</Link></li>
            <li><Link to="/duk" className="text-blue-400 hover:text-blue-300">DUK</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
