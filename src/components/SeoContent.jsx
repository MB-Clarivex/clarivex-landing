import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clarivex — AI asistentas lietuvių kalbai
          </h2>
          <p className="text-lg text-gray-400">
            Clarivex automatizuoja kasdienius verslo darbus. Turinys, el. paštas, priminimai,
            dokumentai ir socialiniai tinklai — vienoje platformoje.
          </p>
        </div>

        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            Sistema supranta lietuviškai ir veikia tiek tekstu, tiek balsu. AI padeda parengti
            įrašus, atsakyti klientams ir suplanuoti publikacijas. Tai reiškia mažiau rutinos ir
            daugiau laiko augimui.
          </p>
          <p>
            Clarivex tinka e‑parduotuvėms, agentūroms, mažoms įmonėms ir freelancer’iams. Galite
            kurti taisykles el. paštui, generuoti vizualus ir automatizuoti pasikartojančias
            užduotis. Kreditų sistema leidžia mokėti tik už naudojimą.
          </p>
          <p>
            Saugumas svarbus. Duomenys šifruojami, integracijos vyksta per oficialius OAuth
            prisijungimus. Jūsų turinys nenaudojamas AI modelių mokymui.
          </p>
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
                AI asistentas lietuvių kalbai — funkcijos
              </Link>
            </li>
            <li>
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia AI asistentas verslui
              </Link>
            </li>
            <li>
              <Link to="/nauda" className="text-blue-400 hover:text-blue-300">
                AI sprendimai verslui ir privalumai
              </Link>
            </li>
            <li>
              <Link to="/telegram" className="text-blue-400 hover:text-blue-300">
                Telegram integracija ir balso komandos lietuviškai
              </Link>
            </li>
            <li>
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                Kainodara ir kreditų sistema
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
