"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m } from 'framer-motion';
import { ChevronLeft, MessageCircle, Mail } from 'lucide-react';
import { MotionProvider } from './MotionProvider';
import { Header } from './Header';
import { Footer } from './Footer';
import { contentMap } from '../content/intervencoes';
import { textos, contactos } from '../content/site';
import { type Language, localePath } from '../lib/i18n';

// Página de detalhe de uma intervenção. O idioma vem do endereço (/ ou /en).
export function InterventionPage({ id, lang }: { id: string; lang: Language }) {
  const content = contentMap[id];
  const otherLang: Language = lang === 'pt' ? 'en' : 'pt';
  const cta = textos.interventionCta;

  return (
    <MotionProvider>
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30 overflow-x-hidden">
      <Header lang={lang} switchHref={localePath(otherLang, `/intervencoes/${id}`)} />

      <main className="pt-32 md:pt-36 pb-24 px-6">
        <article className="max-w-4xl mx-auto">

          {/* Volta à secção de intervenções da página principal, no mesmo idioma */}
          <Link
            href={`${localePath(lang)}#intervencoes`}
            className="group inline-flex items-center gap-2 mb-10 text-[#4f5e38] font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#d76d2d] transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {textos.menu.back[lang]}
          </Link>

          {/* TÍTULO */}
          <div className="text-center mb-10 motion-safe:animate-enter-down">
            <h1 className="text-4xl md:text-6xl font-serif text-[#4f5e38] mb-6">
              {content.title[lang]}
            </h1>
            <div className="w-16 h-1 bg-[#d76d2d] mx-auto"></div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 motion-safe:animate-fade-in [animation-delay:300ms]">
            {content.highlights[lang].map((h, i) => (
              <span key={i} className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-[#4f5e38] border border-[#E5E2D9] shadow-sm">
                {h}
              </span>
            ))}
          </div>

          {/* IMAGENS */}
          {content.images && (
            <div className={`grid gap-6 mb-16 motion-safe:animate-enter-up [animation-delay:500ms] ${content.images.length > 1 ? 'grid-cols-1 md:grid-cols-3' : 'max-w-2xl mx-auto'}`}>
              {content.images.map((src, idx) => (
                <div key={idx} className="relative h-72 overflow-hidden rounded-2xl shadow-xl border-b-4 border-[#d76d2d]">
                  <Image
                    src={src}
                    alt={content.title[lang]}
                    fill
                    sizes={content.images!.length > 1 ? '(min-width: 768px) 290px, calc(100vw - 48px)' : '(min-width: 720px) 672px, calc(100vw - 48px)'}
                    // A primeira foto é a mais importante (no telemóvel é a única visível ao abrir):
                    // carrega logo e com prioridade; as outras só quando se aproximam do ecrã
                    preload={idx === 0}
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                    loading={idx === 0 ? undefined : 'lazy'}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TEXTO */}
          <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light text-left motion-safe:animate-enter-up [animation-delay:700ms]">
            {content.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* CARD DE CONTACTO */}
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-[#4f5e38] to-[#6a7a50] rounded-[2.5rem] text-center text-white shadow-2xl"
          >
            <h2 className="text-2xl font-serif mb-8 text-white">{cta.title[lang]}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={contactos.whatsappUrl} className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-lg">
                <MessageCircle size={20} /> {cta.whatsapp[lang]}
              </a>
              <a href={`mailto:${contactos.email}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
                <Mail size={20} /> {cta.email[lang]}
              </a>
            </div>
          </m.div>
        </article>
      </main>

      <Footer lang={lang} />
    </div>
    </MotionProvider>
  );
}