import React from 'react';
import { MotionProvider } from './MotionProvider';
import { Header } from './Header';
import { Footer } from './Footer';
import { Hero } from './home/Hero';
import { About } from './home/About';
import { Training } from './home/Training';
import { Approaches } from './home/Approaches';
import { type Language, localePath } from '../lib/i18n';

// Página principal. O idioma vem do endereço: / (português) ou /en (inglês).
// Cada secção está no seu ficheiro em components/home/ e os textos em content/site.ts.
export function HomePage({ lang }: { lang: Language }) {
  const otherLang: Language = lang === 'pt' ? 'en' : 'pt';

  return (
    <MotionProvider>
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30 overflow-x-hidden">
      <Header lang={lang} switchHref={localePath(otherLang)} isHome />
      <Hero lang={lang} />
      <About lang={lang} />
      <Training lang={lang} />
      <Approaches lang={lang} />
      <Footer lang={lang} />
    </div>
    </MotionProvider>
  );
}
