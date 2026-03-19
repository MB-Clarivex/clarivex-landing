import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-10 text-gray-300 leading-relaxed">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clarivex AI - kas tai?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Clarivex yra AI asistentas lietuvių kalba, skirtas verslui ir kūrėjams. Jis sujungia
              el. paštą, social media, priminimus ir Telegram į vieną aiškią darbo eigą.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Pagrindinės funkcijos</h2>
            <p>
              Sistema padeda atlikti pasikartojančius darbus greičiau. Vietoje kelių atskirų įrankių
              gaunate vieną vietą kasdieniam turiniui, komunikacijai ir AI užduotims.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>El. laiškų juodraščiai, atsakymai ir darbo taisyklės</li>
              <li>Socialinių tinklų postų kūrimas, planavimas ir publikavimas</li>
              <li>Priminimai, užrašai, idėjos ir balso komandos</li>
              <li>Paveikslėlių generavimas ir dokumentų analizė</li>
            </ul>
            <p className="mt-3">
              Visą funkcijų sąrašą rasite puslapyje{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Funkcijos
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Nauda verslui ir kūrėjams</h2>
            <p>
              Didžiausia vertė atsiranda tada, kai AI sutrumpina mažus darbus, kurie kartojasi kasdien.
              Mažiau rankinio darbo, mažiau perrašinėjimo ir daugiau laiko svarbiems sprendimams.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>Greitesnė komunikacija su klientais ir komanda</li>
              <li>Aiškesnis turinio planavimas be papildomo chaoso</li>
              <li>Mažesnis poreikis šokinėti tarp kelių sistemų</li>
              <li>Daugiau rezultato net su maža komanda</li>
            </ul>
            <p className="mt-3">
              Praktinius panaudojimo atvejus aprašome puslapyje{' '}
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                Nauda verslui
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Kaip veikia kreditų sistema</h2>
            <p>
              Clarivex neturi privalomo mėnesinio plano. Papildote kreditus tada, kai reikia, todėl
              galite pradėti nuo mažo testo ir išmatuoti realią naudą.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>1 € = 1 000 kreditų</li>
              <li>Nauji vartotojai gauna kreditų startui</li>
              <li>Nepanaudoti kreditai nesibaigia</li>
              <li>Mokate tik už realiai atliktus AI veiksmus</li>
            </ul>
            <p className="mt-3">
              Detalesnį paaiškinimą rasite puslapyje{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Kainos ir kreditų sistema
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Integracijos ir darbo eiga</h2>
            <p>
              Clarivex supranta lietuvių kalbą ir padeda pereiti nuo komandos iki rezultato per kelias
              sekundes. Galite dirbti naršyklėje arba telefone.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>Telegram balso komandos ir priminimai</li>
              <li>Social media integracijos su Instagram ir Facebook</li>
              <li>El. pašto darbo eiga vienoje vietoje</li>
              <li>Aiškūs veiksmai nuo užklausos iki publikavimo</li>
            </ul>
            <p className="mt-3">
              Plačiau skaitykite puslapiuose{' '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia
              </Link>
              {' ir '}
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300">
                Telegram integracija
              </Link>.
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
