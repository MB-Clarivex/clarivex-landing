import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clarivex — AI asistentas verslui
          </h2>
          <p className="text-lg text-gray-400">
            Clarivex padeda verslams automatizuoti kasdienius procesus: nuo turinio kūrimo iki
            el. pašto valdymo, klientų atsakymų ir dokumentų analizės. Sistema supranta lietuvių
            kalbą ir veikia tiek balsu, tiek tekstu — todėl komandos gali dirbti greičiau ir be
            papildomų įrankių.
          </p>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Platforma skirta mažoms ir vidutinėms įmonėms, e‑parduotuvėms, agentūroms ir
            komandoms, kurios nori sumažinti rutiną. Clarivex sukuria socialinių tinklų postus,
            suplanuoja publikacijas, parengia atsakymus klientams ir padeda valdyti komunikaciją
            vienoje vietoje. Tai reiškia mažiau perjunginėjimo tarp sistemų ir daugiau laiko
            strategijai.
          </p>
          <p>
            Naudojant Clarivex, turinio kūrimas tampa greitesnis: AI sugeneruoja tekstus, parenka
            idėjas, padeda kurti vizualus ir pasirūpina struktūra. El. paštas taip pat
            automatizuojamas — galite kurti taisykles, ruošti juodraščius ir atsakyti pagal savo
            komunikacijos stilių. Visa tai veikia su kreditų sistema, be mėnesinių mokesčių.
          </p>
          <p>
            Saugumas ir privatumas — prioritetas. Duomenys šifruojami, paslaugos atitinka BDAR
            reikalavimus, o socialinių tinklų ir el. pašto integracijos veikia per oficialius
            prisijungimus. Jūsų turinys nenaudojamas AI modelių mokymui, o paskyros prieigos
            kontroliuojamos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Ką automatizuoja Clarivex?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Socialinių tinklų turinio planavimą ir publikavimą</li>
              <li>El. laiškų rašymą, atsakymus ir taisykles</li>
              <li>Priminimus, užrašus, idėjų kaupimą</li>
              <li>Paveikslėlių generavimą ir dokumentų analizę</li>
            </ul>
          </div>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Kodėl verta?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sutaupote laiką ir mažinate rankinį darbą</li>
              <li>Turinys kuriamas nuosekliai pagal prekės ženklą</li>
              <li>Veikia lietuviškai ir prisitaiko prie jūsų stiliaus</li>
              <li>Kreditai nesibaigia, mokate tik už naudojimą</li>
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
                Ne. Registracija nemokama, o nauji vartotojai gauna 2000 kreditų dovanų.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Ar mano duomenys saugūs?</p>
              <p>
                Duomenys šifruojami ir saugomi ES serveriuose. Prieigos per OAuth, be slaptažodžių
                saugojimo mūsų pusėje.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Naudingos vidinės nuorodos</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Plačiau apie Clarivex funkcijas
              </Link>
            </li>
            <li>
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia Clarivex platforma
              </Link>
            </li>
            <li>
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                Privalumai ir naudojimo scenarijai
              </Link>
            </li>
            <li>
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300">
                Telegram integracija ir balso komandos
              </Link>
            </li>
            <li>
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Peržiūrėti kainodarą ir kreditų sistemą
              </Link>
            </li>
            <li>
              <Link to="/duk" className="text-blue-400 hover:text-blue-300">
                Dažniausiai užduodami klausimai (DUK)
              </Link>
            </li>
            <li>
              <Link to="/privatumas" className="text-blue-400 hover:text-blue-300">
                Privatumo politika ir duomenų apsauga
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
