import React from 'react';
import { Link } from 'react-router-dom';

const SeoContent = () => {
  return (
    <section id="apie-clarivex" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-14 text-gray-300 leading-relaxed">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-blue-400/90 mb-3">Clarivex AI Lietuvoje</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI automatizavimas su lanksčia kreditų sistema
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Clarivex leidžia sutrumpinti rutiną lietuvių kalba. AI paruošia juodraščius ir planą — jūs renkatės toną ir patvirtinate veiksmą.
            </p>
          </div>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4">Ką galite automatizuoti su Clarivex AI?</h2>
            <h3 className="text-lg font-semibold text-white mb-2">El. paštas ir atsakymai klientams</h3>
            <p className="mb-4 max-w-3xl">
              Laiškų juodraščiai ir darbo taisyklės vienoje vietoje. Plačiau —{' '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Clarivex AI funkcijos
              </Link>
              .
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Socialinių kanalų turinys ir planavimas</h3>
            <p className="mb-4 max-w-3xl">
              Įrašai ir kalendorius be šokinėjimo tarp įrankių. Žinutėms DM —{' '}
              <Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300">
                AI atsakiklis
              </Link>
              .
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Vidinė komunikacija ir dokumentai</h3>
            <p className="max-w-3xl">
              Santraukos, užrašai ir dokumentų analizė — mažiau rankinio darbo komandoje.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Lanksti kreditų sistema – mokate tik už naudojimą
            </h2>
            <p className="mb-3 max-w-3xl">
              Nėra privalomų abonementų. Papildote kreditus, kai reikia —{' '}
              <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
                peržiūrėkite Clarivex AI kainas
              </Link>
              .
            </p>
            <ul className="space-y-2 list-disc pl-5 max-w-3xl">
              <li>Mokate tik už realiai atliktus AI veiksmus</li>
              <li>Nepanaudoti kreditai nesibaigia</li>
              <li>Aiškus santykis: 1 € = 1 000 kreditų</li>
              <li>Mažiau įsipareigojimų nei fiksuoti mėnesiniai planai</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4">Kodėl Clarivex išsiskiria Lietuvoje?</h2>
            <h3 className="text-lg font-semibold text-white mb-2">Lietuvių kalba ir tikslus suvokimas</h3>
            <p className="mb-4 max-w-3xl">
              Tekstas ir balsas suprantami natūraliai — kasdienėms užduotims ir klientų komunikacijai.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Integracija su jums jau naudojamais kanalais</h3>
            <p className="mb-4 max-w-3xl">
              El. paštas, Instagram, Facebook, Telegram.{' '}
              <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
                Kaip veikia Clarivex AI integracija
              </Link>
              .
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Patikimumas ir veikimo greitis</h3>
            <p className="max-w-3xl">
              Tipinės užklausos įvykdomos per kelias sekundes. Incidentų metu sekite{' '}
              <Link to="/statusas" className="text-blue-400 hover:text-blue-300">
                sistemos statusą
              </Link>
              .
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4">Kaip pradėti naudotis per kelias minutes</h2>
            <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-300 max-w-3xl">
              <li>Užsiregistruokite Clarivex platformoje</li>
              <li>Gaukite startinius kreditus</li>
              <li>Pasirinkite kanalą: el. paštas, Telegram ar socialiniai tinklai</li>
              <li>Sukurkite pirmą užduotį su AI</li>
            </ol>
            <p className="mt-4 max-w-3xl">
              <Link to="/duk" className="text-blue-400 hover:text-blue-300">
                DUK apie Clarivex AI
              </Link>
              {' · '}
              <Link to="/features" className="text-blue-400 hover:text-blue-300">
                Visos funkcijos
              </Link>
              .
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4">Dažniausi Clarivex naudojimo scenarijai</h2>
            <p className="mb-3 max-w-3xl">
              <span className="text-white font-semibold">Mažoms įmonėms:</span>{' '}
              greitesni atsakymai ir nuoseklus turinys be papildomo etato.
            </p>
            <p className="mb-3 max-w-3xl">
              <span className="text-white font-semibold">Agentūroms:</span>{' '}
              pakartojama kokybė ir greitesnis turinio paruošimas keliems klientams.
            </p>
            <p className="mb-3 max-w-3xl">
              <span className="text-white font-semibold">Individualiems specialistams:</span>{' '}
              priminimai ir juodraščiai telefone bei naršyklėje su ta pačia AI automatika.
            </p>
            <p className="max-w-3xl">
              <Link to="/naudojimo-scenarijai" className="text-blue-400 hover:text-blue-300">
                Clarivex AI naudojimo scenarijai
              </Link>
              {' — detalesnė suvestinė.'}
            </p>
          </article>
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
          <h2 className="text-2xl font-semibold text-white mb-3">Kaip pradėti naudotis Clarivex</h2>
          <p className="text-gray-300">
            Pirmam bandymui nereikia ilgo pasiruošimo. Dažniausiai užtenka pasirinkti vieną procesą ir
            jį išsibandyti su nemokamais kreditais.
          </p>
          <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-300">
            <li>Užsiregistruokite ir gaukite startinius kreditus.</li>
            <li>Išbandykite vieną aiškią užduotį: el. laišką, postą, priminimą arba Telegram komandą.</li>
            <li>Įvertinkite rezultatą ir tik tada plėskite naudojimą į kitus procesus.</li>
          </ol>
          <p className="mt-3">
            Pradžiai naudingi puslapiai:{' '}
            <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">
              Kaip veikia
            </Link>
            {' · '}
            <Link to="/features" className="text-blue-400 hover:text-blue-300">
              Funkcijos
            </Link>
            {' · '}
            <Link to="/kainos" className="text-blue-400 hover:text-blue-300">
              Kainos
            </Link>.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-3">Dažniausiai užduodami klausimai</h2>
          <p className="text-sm text-gray-500 mb-4">
            Visą sąrašą rasite puslapyje{' '}
            <Link to="/duk" className="text-blue-400 hover:text-blue-300">
              DUK apie Clarivex AI
            </Link>
            .
          </p>
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
              rel="nofollow noopener noreferrer"
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
            <li><Link to="/features" className="text-blue-400 hover:text-blue-300">Clarivex AI funkcijos verslui</Link></li>
            <li><Link to="/telegram" className="text-blue-400 hover:text-blue-300">Telegram AI botas lietuvių kalba</Link></li>
            <li><Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">Kaip veikia</Link></li>
            <li><Link to="/nauda" className="text-blue-400 hover:text-blue-300">Privalumai verslui</Link></li>
            <li><Link to="/atsakiklis" className="text-blue-400 hover:text-blue-300">AI atsakiklis (Messenger / Instagram DM)</Link></li>
            <li><Link to="/naudojimo-scenarijai" className="text-blue-400 hover:text-blue-300">AI naudojimo scenarijai</Link></li>
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
