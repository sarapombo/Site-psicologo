"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { textos } from '../../content/site';
import type { Language } from '../../lib/i18n';

// Topo da página principal, com o vídeo de fundo
export function Hero({ lang }: { lang: Language }) {
  const t = textos.hero;

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute z-0 w-full h-full object-cover">
        <source src="/video-grass-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute z-10 inset-0 bg-black/40"></div>
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
          {t.title[lang]} <span className="text-white">{t.titleHighlight[lang]}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-2xl text-white/95 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
          {t.subtitle[lang]}
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <a href="#contacto" className="px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-xl">{t.bookBtn[lang]}</a>
          <a href="#intervencoes" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#d76d2d] transition-colors py-2">{t.approachesBtn[lang]} <ChevronRight size={18} className="ml-2" /></a>
        </div>
      </div>
    </section>
  );
}
