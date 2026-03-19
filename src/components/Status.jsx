import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, XCircle, Activity, Globe, Bot, Mail, Calendar, Database } from 'lucide-react';

const services = [
  {
    id: 'platform',
    name: 'Clarivex platforma',
    description: 'Pagrindinė app.clarivex.ai sistema',
    icon: Globe,
    status: 'operational',
  },
  {
    id: 'ai',
    name: 'AI asistentas',
    description: 'GPT modeliai ir pokalbių sistema',
    icon: Bot,
    status: 'operational',
  },
  {
    id: 'social',
    name: 'Socialinių tinklų publikavimas',
    description: 'Instagram, Facebook postų publikavimas',
    icon: Calendar,
    status: 'operational',
  },
  {
    id: 'email',
    name: 'El. pašto integracija',
    description: 'Gmail skaitymas ir siuntimas',
    icon: Mail,
    status: 'operational',
  },
  {
    id: 'telegram',
    name: 'Telegram botas',
    description: 'Pranešimai ir komandos per Telegram',
    icon: Activity,
    status: 'operational',
  },
  {
    id: 'storage',
    name: 'Failų saugykla',
    description: 'Nuotraukų, dokumentų saugojimas',
    icon: Database,
    status: 'operational',
  },
];

const statusConfig = {
  operational: {
    label: 'Veikia',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    icon: CheckCircle,
  },
  degraded: {
    label: 'Sulėtėjęs',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    icon: AlertCircle,
  },
  outage: {
    label: 'Neveikia',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    icon: XCircle,
  },
};

const recentIncidents = [
  // Placeholder for incidents - empty means no recent incidents
];

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const canonicalUrl = 'https://clarivex.ai/statusas';
  const socialImage = 'https://clarivex.ai/og.svg';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clarivex sistemos statusas - paslaugų veikimas realiu laiku',
    url: canonicalUrl,
    description: 'Patikrinkite Clarivex paslaugų būklę realiu laiku: platformos, AI, el. pašto, Telegram ir kitų integracijų veikimą.',
    inLanguage: 'lt-LT',
    isPartOf: { '@id': 'https://clarivex.ai/#website' },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const allOperational = services.every(s => s.status === 'operational');

  const overallStatus = allOperational 
    ? statusConfig.operational 
    : services.some(s => s.status === 'outage')
      ? statusConfig.outage
      : statusConfig.degraded;

  return (
    <>
      <Helmet>
        <title>Clarivex sistemos statusas - paslaugų veikimas realiu laiku</title>
        <meta name="description" content="Patikrinkite Clarivex paslaugų būklę realiu laiku. Matykite platformos, AI, Telegram, el. pašto ir kitų sistemų veikimo statusą." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clarivex sistemos statusas - paslaugų veikimas realiu laiku" />
        <meta property="og:description" content="Patikrinkite Clarivex paslaugų būklę realiu laiku. Matykite platformos, AI, Telegram, el. pašto ir kitų sistemų veikimo statusą." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Clarivex" />
        <meta property="og:locale" content="lt_LT" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Clarivex logotipas" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivex sistemos statusas - paslaugų veikimas realiu laiku" />
        <meta name="twitter:description" content="Patikrinkite Clarivex paslaugų būklę realiu laiku. Matykite platformos, AI, Telegram, el. pašto ir kitų sistemų veikimo statusą." />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Grįžti į pradžią
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Overall Status */}
          <div className={`rounded-2xl p-8 mb-8 ${overallStatus.bgColor} border ${overallStatus.borderColor}`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${overallStatus.bgColor} flex items-center justify-center`}>
                  <overallStatus.icon className={`w-8 h-8 ${overallStatus.color}`} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    {allOperational ? 'Visos sistemos veikia' : 'Yra problemų'}
                  </h1>
                  <p className="text-gray-400 mt-1">
                    Atnaujinta: {currentTime.toLocaleString('lt-LT')}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    Susipažinti su produktu galite čia:{' '}
                    <Link to="/features" className="text-blue-400 hover:text-blue-300">funkcijos</Link>
                    {' · '}
                    <Link to="/kaip-veikia" className="text-blue-400 hover:text-blue-300">kaip veikia</Link>
                    {' · '}
                    <Link to="/kainos" className="text-blue-400 hover:text-blue-300">kainos</Link>
                  </p>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-full ${overallStatus.bgColor} ${overallStatus.color} font-medium`}>
                {overallStatus.label}
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Paslaugos</h2>
            </div>
            <div className="divide-y divide-gray-800">
              {services.map((service) => {
                const status = statusConfig[service.status];
                const Icon = service.icon;
                const StatusIcon = status.icon;

                return (
                  <div key={service.id} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${status.bgColor}`}>
                      <StatusIcon className={`w-4 h-4 ${status.color}`} />
                      <span className={`text-sm font-medium ${status.color}`}>{status.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Paskutiniai incidentai</h2>
            </div>
            <div className="p-6">
              {recentIncidents.length > 0 ? (
                <div className="space-y-4">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="border-l-2 border-yellow-500 pl-4">
                      <h3 className="font-medium">{incident.title}</h3>
                      <p className="text-sm text-gray-400">{incident.date}</p>
                      <p className="text-gray-300 mt-2">{incident.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-400">Pastaruoju metu incidentų nebuvo</p>
                  <p className="text-sm text-gray-500 mt-1">Visos sistemos veikia stabiliai</p>
                </div>
              )}
            </div>
          </div>

          {/* Uptime Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">99.9%</p>
              <p className="text-sm text-gray-400 mt-1">Uptime (30 dienų)</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-blue-400">&lt;200ms</p>
              <p className="text-sm text-gray-400 mt-1">Vid. atsakymo laikas</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-purple-400">0</p>
              <p className="text-sm text-gray-400 mt-1">Incidentai (7 dienos)</p>
            </div>
          </div>

          {/* Contact for issues */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Turite problemų?</h3>
            <p className="text-gray-400 mb-6">
              Rašykite per Telegram – atsakome per 1–2 valandas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://t.me/clarivex_support_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all"
              >
                Telegram palaikymas
              </a>
              <a 
                href="mailto:info@clarivex.ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-xl text-white font-medium transition-all"
              >
                info@clarivex.ai
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <nav className="flex flex-wrap justify-center gap-6 text-sm mb-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Pradžia</Link>
              <Link to="/kaip-veikia" className="text-gray-400 hover:text-white transition-colors">Kaip veikia</Link>
              <Link to="/kainos" className="text-gray-400 hover:text-white transition-colors">Kainodara</Link>
              <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Funkcijos</Link>
              <Link to="/duk" className="text-gray-400 hover:text-white transition-colors">DUK</Link>
              <Link to="/telegram" className="text-gray-400 hover:text-white transition-colors">Telegram</Link>
            </nav>
            <p className="text-gray-500 text-sm">© 2026 Clarivex. Visos teisės saugomos.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Status;







