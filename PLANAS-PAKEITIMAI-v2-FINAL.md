# CLARIVEX LANDING – PILNAS PAKEITIMŲ PLANAS (v2 FINAL, pataisytas)

# =========================================
# 1. HERO.JSX
# =========================================

## 1.1 Badge virš H1
```jsx
<span>🎁 Pradėk NEMOKAMAI — gauk iki 1 000 kreditų startui</span>
```
<!-- Patikslinimas: „gauk" aktyvesnis nei „dovanų"; tarpas tūkstantyje — geriau skaitosi. -->

## 1.2 Pagrindinis paragrafas (pirmas motion.p po H1)
```jsx
Socialiniai tinklai, el. paštas, priminimai, paveikslėliai —
viena komanda lietuviškai ir rezultatas per kelias sekundes.
Clarivex supranta kontekstą, paruošia turinį ir, jei nori, iškart publikuoja ar išsiunčia.
```
<!-- Pakeitimai: „balso" pašalintas — web irgi veikia tekstu; „rezultatas" dinamiškiau; trečias sakinys — end-to-end flow. -->

## 1.3 Antras paragrafas (motion.p su nuorodomis)
```jsx
Clarivex — AI asistentų platforma lietuvių kalba.
Automatizuoja turinio kūrimą ir klientų komunikaciją, o tu moki tik už tai, ką naudoji.
Jokių mėnesinių planų — lanksti kreditų sistema nuo €1.
{' '}
<Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/50">
  Kaip veikia
</Link>
{' · '}
<Link to="/kainos" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/50">
  Kainos
</Link>
```

## 1.4 Registracijos kortelės

### Email / Web kortelė (PIRMOJI — pagrindinis akcentas):
```jsx
<p className="text-xs text-gray-400 mb-3">
  Registracija per ~30 sek. Užbaigęs profilį gauni iki
  {' '}<span className="text-green-400 font-semibold">1 000 kreditų</span>{' '}
  startui — pakanka kelioms dešimtims AI užduočių.
</p>
```

### Telegram kortelė (ANTROJI — „Arba"):
```jsx
<p className="text-xs text-gray-400 mb-3">
  Valdyk Clarivex balsu iš telefono. Susiek Telegram ir gauk
  {' '}<span className="text-green-400 font-semibold">+250 kreditų</span>{' '}
  papildomai. Priminimai, pirkinių sąrašai, postai — vienu balso pranešimu.
</p>
```

## 1.5 Mažasis info tekstas apačioje
```jsx
<p className="text-center md:text-left text-xs text-gray-500">
  💡 Registracija + profilio užbaigimas = iki
  {' '}<span className="text-green-400 font-semibold">1 000 kreditų</span>{' '}
  startui. Telegram — papildomi kreditai ir balso funkcijos.
</p>
```

## 1.6 Pricing stats blokas
```
€0   Pradžia       +250 kreditų
€1   Pavedimas    Be mokesčių
€5   Kortelė      Momentinis
```
<!-- Visur „kreditų" vietoj „kr." -->


# =========================================
# 2. BENEFITS.JSX
# =========================================

## 2.1 Header aprašymas (pirmas ilgesnis <p>)
```jsx
<p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
  Tau — daugiau laiko, mažiau rutinos.
  Clarivex perima tai, ką šiandien darai ranka: postus, atsakymus, priminimus, paveikslėlius.
  Tu lieki strategijai ir klientams, o visos tos kasdienės užduotys kainuoja vos kelis eurus.
</p>
```

## 2.2 Antras paaiškinamasis tekstas
```jsx
<p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
  Sutaupytas laikas — tai tavo pinigai.
  Nesvarbu, ar savo valandą vertini 10€, ar 50€ — 10 val. per savaitę virsta šimtais eurų.
  Pradėk su nemokamais kreditais ir per pirmą savaitę pamatyk,
  kiek darbo Clarivex gali perimti už tave.
</p>
```

## 2.3 CTA apačioje
```jsx
<p className="text-gray-400 mb-4">
  Nori pamatyti, kaip tai veikia praktiškai? Pradėk su
  {' '}<span className="text-green-400 font-semibold">iki 1 000 kreditų</span>{' '}
  — be įsipareigojimų, be kortelės.
</p>
<a
  href="https://app.clarivex.ai/auth"
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all"
>
  Išbandyti nemokamai
  <Sparkles className="w-4 h-4" />
</a>
```


# =========================================
# 3. FEATURES.JSX – description reikšmės
# =========================================

```jsx
{
  icon: Mic,
  title: 'Balso Komandos',
  description: 'Pasakyk lietuviškai, ką reikia padaryti — postą, priminimą ar paveikslėlį. Clarivex supranta kontekstą ir per kelias sekundes paruošia galutinį variantą. Veikia naršyklėje ir per Telegram.',
  gradient: 'from-blue-500 to-cyan-500',
  badge: 'Populiariausia',
  stats: '~3s',
  statsLabel: 'vidutinis laikas'
},

{
  icon: Brain,
  title: 'Ilgalaikė Atmintis',
  description: 'Clarivex atsimena tavo prekės ženklą, terminus ir svarbias detales. Kuo daugiau bendrauji, tuo tiksliau AI pritaiko atsakymus prie tavo stiliaus — lyg būtum parašęs pats.',
  gradient: 'from-violet-500 to-purple-500',
  badge: 'Unikalus',
  stats: '∞',
  statsLabel: 'prisiminimų'
},
```
<!-- PATAISYTA: „rašęs" → „parašęs" — teisingas rezultatui (parašyti = baigti rašyti) -->


# =========================================
# 4. PRICINGPAGE.JSX
# =========================================

## 4.1 Hero aprašymas (p po H1)
```jsx
<p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
  Jokių paslėptų mokesčių ir mėnesinių planų.
  Moki tik už tai, ką realiai naudoji — AI žinutes, postus, paveikslėlius, el. laiškus.
  <br />
  <span className="text-blue-400 font-semibold">1 € = 1 000 kreditų</span> — to paprastai pakanka
  kelioms dešimtims AI žinučių ir keliems paveikslėliams.
</p>
```

## 4.2 „Kiek kainuoja tipiniai veiksmai?" – paaiškinimas virš lentelės
```jsx
<p className="text-gray-400 text-sm">
  1 € = 1 000 kreditų. Žemiau — apytikslės kreditų kainos dažniausiems veiksmams,
  kad lengviau suplanuotum savo biudžetą.
</p>
```


# =========================================
# 5. PRICING.JSX (landing kainodaros sekcija)
# =========================================

## 5.1 Pagrindinis aprašymas po H2
```jsx
<p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
  Jokių mėnesinių mokesčių ir kontraktų.
  Papildyk kreditus tada, kai reikia, ir naudok juos visoms funkcijoms:
  AI pokalbiams, socialiniams postams, paveikslėliams, el. paštui ir dar daugiau.
</p>
```

## 5.2 FREE STARTER kortelės badge
```jsx
<div className="absolute -top-px left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-b-xl shadow-lg">
  🎁 PRADĖK SU NEMOKAMAIS KREDITAIS
</div>
```

## 5.3 Free starter aprašymas (vidinis <p>)
```jsx
<p className="text-gray-400">
  Registruokis, užbaik profilį ir gauk
  iki <span className="text-green-400 font-semibold">1 000 kreditų</span>.
  Nori balsu? Susiek Telegram ir gauk papildomų kreditų. Be rizikos, be kortelės.
</p>
```

## 5.4 Free starter CTA mygtukas — WEB-FIRST
```jsx
// PATAISYTA: mygtukas turi nukreipti į web, ne Telegram
<Button
  onClick={() => window.location.href = 'https://app.clarivex.ai/auth'}
  className="bg-gradient-to-r from-green-500 to-emerald-500 ..."
>
  <Smartphone className="w-5 h-5 mr-2" />
  Pradėti nemokamai
</Button>
```
<!-- Arba: href="https://app.clarivex.ai/auth" jei naudojamas <a>. DABAR: onClick → t.me. KEISTI į app.clarivex.ai/auth -->


# =========================================
# 6. TELEGRAMSECTION.JSX
# =========================================

## 6.1 Pagrindinis paragrafas (po H1)
```jsx
<p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
  Nori valdyti Clarivex balsu? Susiek Telegram ir naudok AI asistentą bet kur, bet kada —
  tiesiai iš telefono.
  Už susiejimą gauni <span className="text-[#0088cc] font-semibold">+250 kreditų</span>,
  o užbaigęs profilį — iš viso iki
  {' '}<span className="text-[#0088cc] font-semibold">1 000 kreditų</span> startui.
</p>
```

## 6.2 Bonus banner H2 ir aprašymas
```jsx
<h2 className="text-2xl font-bold text-white">Iki 1 000 kreditų startui</h2>
<p className="text-gray-400">
  Registracija + profilio užbaigimas + Telegram = maksimalus startas.
  Kreditai leidžia išbandyti visas AI funkcijas be rizikos ir įsipareigojimų.
</p>
```

## 6.3 Bonus breakdown
<!-- Sutikrinti su backend. Landing'e rodomas tik bendras „iki 1 000".
     Granuliarus breakdown — tik app viduje, profilio pildymo metu. -->


# =========================================
# 7. FAQ.JSX
# =========================================

## 7.1 Klausimas „Kiek kainuoja Clarivex?"
```jsx
{
  q: 'Kiek kainuoja Clarivex?',
  a: 'Clarivex veikia kreditų sistema — be mėnesinių mokesčių ir be kontraktų. Papildai kreditus tada, kai reikia: 1 € = 1 000 kreditų. Nauji vartotojai gauna iki 1 000 nemokamų kreditų startui, kad galėtų realiai viską išbandyti be rizikos.'
},
```

## 7.2 Klausimas „Ką galiu padaryti su 1 000 kreditų?"
```jsx
{
  q: 'Ką galiu padaryti su 1 000 kreditų?',
  a: 'Su 1 000 kreditų (~1 €) gali: parašyti ~100 AI žinučių su GPT-4.1 mini arba ~30 su GPT-5.1, sugeneruoti 10–12 paveikslėlių, transkribuoti ~80 min. balso arba atlikti ~50 web paieškų. Net nedidelė suma leidžia labai daug išbandyti. Patarimas: naudojant GPT-4.1 mini modelį kreditai trunka kelis kartus ilgiau, o kokybė kasdienėms užduotims — puiki.'
},
```


# =========================================
# 8. PRIORITETAI IR PASTABOS
# =========================================
#
# Eilė: 1) Hero → 2) Benefits → 3) Pricing + PricingPage → 4) TelegramSection → 5) FAQ → 6) Features
#
# TONAS: Visur „tu" — nuoseklus, profesionalus. Jokio „jūs" maišymo.
#
# WEB-FIRST: Email/Web kortelė pirmoji. Telegram antrinė. Pricing Free Starter mygtukas → app.clarivex.ai/auth.
#
# KREDITAI: „kreditų" (ne „kr."). Tarpai: „1 000".
#
# PATAISYMAI v2 FINAL:
#   - Features Brain: „parašęs" (ne „rašęs")
#   - Pricing Free Starter CTA → web (app.clarivex.ai/auth), ne Telegram
#
