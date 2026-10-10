'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CourseDetail({ params }: { params: { id: string } }) {
  const [audioSubmitted, setAudioSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAudioSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-amber-400 mb-6 inline-block">
          ← Retour au tableau de bord
        </Link>

        <h1 className="text-2xl font-bold mb-2">Leçon : Placement du souffle et vocalises</h1>
        <p className="text-slate-400 text-sm mb-6">Module 1 • Exercice pratique</p>

        {/* Video / Audio Player Placeholder */}
        <div className="bg-slate-900 border border-slate-800 aspect-video rounded-2xl flex items-center justify-center mb-8">
          <p className="text-slate-500 text-sm">[ Lecteur Vidéo / Audio de la leçon ]</p>
        </div>

        {/* Formulaire de dépôt d'audio pour l'élève */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-2">Envoyer votre enregistrement à votre coach</h2>
          <p className="text-xs text-slate-400 mb-6">
            Enregistrez votre voix sur votre téléphone ou ordinateur puis importez le fichier pour recevoir un retour personnalisé.
          </p>

          {audioSubmitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm text-center">
              ✓ Enregistrement envoyé avec succès ! Votre coach vous répondra très rapidement.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="file" 
                accept="audio/*" 
                required
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-600 transition"
              />
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-xl font-semibold text-sm transition"
              >
                Soumettre pour correction
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
