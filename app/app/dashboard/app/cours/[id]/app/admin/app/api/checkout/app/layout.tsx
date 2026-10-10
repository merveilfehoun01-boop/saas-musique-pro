import './globals.css';
import type { Metadata } from 'metadata';

export const metadata: Metadata = {
  title: 'Harmonie & Voix Pro',
  description: 'Plateforme de coaching vocal et chorale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
