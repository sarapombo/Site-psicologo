"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, Mail } from 'lucide-react';
import { Footer } from './Footer';
import { contentMap } from '../content/intervencoes';
import { type Language, localePath } from '../lib/i18n';

// Página de detalhe de uma intervenção. O idioma vem do endereço (/ ou /en).
export function InterventionPage({ id, lang }: { id: string; lang: Language }) {
  const content = contentMap[id];
  const otherLang: Language = lang === 'pt' ? 'en' : 'pt';

  const staticTexts = {
    backBtn: { pt: "Voltar", en: "Back" },
    ctaTitle: { pt: "Ficou com dúvidas?", en: "Have any questions?" },
    whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
    email: { pt: "Email", en: "Email" },
    switchLang: { pt: "Ver esta página em inglês", en: "View this page in Portuguese" }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30">
      
      {/* --- NAVEGAÇÃO --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* Volta à secção de intervenções da página principal, no mesmo idioma */}
          <Link
            href={`${localePath(lang)}#intervencoes`}
            className="group flex items-center gap-2 text-[#4f5e38] font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#d76d2d] transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {staticTexts.backBtn[lang]}
          </Link>

          {/* Seletor de idioma: link para a mesma página no outro idioma */}
          <Link
            href={localePath(otherLang, `/intervencoes/${id}`)}
            hrefLang={otherLang === 'pt' ? 'pt-PT' : 'en'}
            aria-label={staticTexts.switchLang[lang]}
            className="px-3 py-1 border border-[#E5E2D9] rounded-md text-[11px] font-bold text-[#4f5e38] hover:border-[#d76d2d] hover:text-[#d76d2d] transition-colors bg-white/50"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </Link>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          
          {/* TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[#4f5e38] mb-6">
              {content.title[lang]}
            </h1>
            <div className="w-16 h-1 bg-[#d76d2d] mx-auto"></div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {content.highlights[lang].map((h, i) => (
              <span key={i} className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-[#4f5e38] border border-[#E5E2D9] shadow-sm">
                {h}
              </span>
            ))}
          </motion.div>

          {/* IMAGENS */}
          {content.images && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`grid gap-6 mb-16 ${content.images.length > 1 ? 'grid-cols-1 md:grid-cols-3' : 'max-w-2xl mx-auto'}`}
            >
              {content.images.map((src, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-xl border-b-4 border-[#d76d2d]">
                  <img 
                    src={src} 
                    alt={content.title[lang]} 
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* TEXTO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light text-left"
          >
            {content.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>

          {/* CARD DE CONTACTO */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-[#4f5e38] to-[#6a7a50] rounded-[2.5rem] text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl font-serif mb-8 text-white">{staticTexts.ctaTitle[lang]}</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/351962858716" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-lg">
                <MessageCircle size={20} /> {staticTexts.whatsapp[lang]}
              </a>
              <a href="mailto:nunopirespsic@gmail.com" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
                <Mail size={20} /> {staticTexts.email[lang]}
              </a>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer lang={lang} />

    </div>
  );
}