"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { textos } from '../../content/site';
import type { Language } from '../../lib/i18n';
import heroPoster from '../../../public/hero-poster.jpg';

// Topo da página principal, com o vídeo de fundo.
// Para o site abrir depressa: aparece logo a imagem de capa (leve e otimizada) e o vídeo
// só começa a carregar depois, por cima dela. No telemóvel carrega uma versão mais pequena.
// Quem tem "reduzir movimento" ou "poupança de dados" ativos fica só com a imagem.
export function Hero({ lang }: { lang: Language }) {
  const t = textos.hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) return;
    video.load();
    video.play().catch(() => {
      // Se o browser bloquear a reprodução automática, fica a imagem de capa
    });
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={heroPoster}
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="absolute z-0 object-cover"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setVideoVisible(true)}
        className={`absolute z-0 w-full h-full object-cover transition-opacity duration-1000 ${videoVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/hero-720.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/hero-1080.mp4" type="video/mp4" />
      </video>
      <div className="absolute z-10 inset-0 bg-black/40"></div>
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl motion-safe:animate-enter-down [animation-duration:1s]">
          {t.title[lang]} <span className="text-white">{t.titleHighlight[lang]}</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/95 mb-10 font-light max-w-3xl mx-auto drop-shadow-md motion-safe:animate-fade-in [animation-delay:500ms]">
          {t.subtitle[lang]}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <a href="#contacto" className="px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-xl">{t.bookBtn[lang]}</a>
          <a href="#intervencoes" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#d76d2d] transition-colors py-2">{t.approachesBtn[lang]} <ChevronRight size={18} className="ml-2" /></a>
        </div>
      </div>
    </section>
  );
}
