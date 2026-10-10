'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-slate-800">
        <div className="text-xl font-extrabold tracking-tight text-amber-400">
          Harmonie & Voix <span className="text-xs font-normal text-slate-400">PRO</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-xs text-slate-400 hover:text-amber-400 transition">
            Espace Formateur
          </Link>
          <Link href="/dashboard" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold transition">
            Espace Élève
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full font-semibold mb-6 inline-block">
          SaaS Vocal & Chorale
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Maîtrisez votre voix, <br />
          <span className="text-amber-400">Progressez en ligne.</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
          La plateforme professionnelle pour les chanteurs et choristes. Suivez des cours guidés, envoyez vos enregistrements et obtenez des corrections personnalisées par votre coach.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dashboard" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition">
            Commencer à chanter
          </Link>
          <a href="#tarifs" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition">
            Voir les tarifs
          </a>
        </div>
      </section>

      {/* Section Tarifs */}
      <section id="tarifs" className="px-6 md:px-12 py-20 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tarifs simples et transparents</h2>
          <p className="text-slate-400 text-sm">Investissez dans votre technique vocale dès aujourd'hui.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Mensuel</span>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">15 000 XOF <span className="text-sm font-normal text-slate-400">/ mois</span></h3>
              <p className="text-slate-400 text-sm mb-6">Idéal pour tester la méthode et progresser régulièrement.</p>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2">✓ Accès à tous les cours</li>
                <li className="flex items-center gap-2">✓ 2 corrections audio par mois</li>
                <li className="flex items-center gap-2">✓ Suivi de progression</li>
              </ul>
            </div>
            <Link href="/dashboard" className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 text-center py-3 rounded-xl font-semibold text-sm transition">
              Choisir ce plan
            </Link>
          </div>

          <div className="bg-slate-900 border-2 border-amber-500/50 p-8 rounded-3xl flex flex-col justify-between relative shadow-xl shadow-amber-500/5">
            <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Populaire
            </div>
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Annuel / Pro</span>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">120 000 XOF <span className="text-sm font-normal text-slate-400">/ an</span></h3>
              <p className="text-slate-400 text-sm mb-6">Pour un engagement sérieux et une progression optimale toute l'année.</p>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2">✓ Accès illimité à vie aux modules</li>
                <li className="flex items-center gap-2">✓ Corrections audio illimitées</li>
                <li className="flex items-center gap-2">✓ Masterclass en direct exclusives</li>
              </ul>
            </div>
            <Link href="/dashboard" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-center py-3 rounded-xl font-semibold text-sm transition">
              Profiter du plan Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-900 text-xs text-slate-500">
        © 2026 Harmonie & Voix Pro. Tous droits réservés.
      </footer>
    </div>
  );
}
