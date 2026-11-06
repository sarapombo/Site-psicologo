"use client";

import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { Award, BookOpen, ChevronRight, GraduationCap, Heart, Users, Waves, Wind } from 'lucide-react';
import { textos } from '../../content/site';
import { contentMap, interventionIds, type InterventionIcon } from '../../content/intervencoes';
import { type Language, localePath } from '../../lib/i18n';

// Ícone de cada cartão (o nome do ícone está em intervencoes.ts)
const icons: Record<InterventionIcon, React.ElementType> = {
  heart: Heart,
  users: Users,
  waves: Waves,
  award: Award,
  book: BookOpen,
  wind: Wind,
  graduation: GraduationCap,
};

// Secção "Abordagens Terapêuticas": um cartão por intervenção
export function Approaches({ lang }: { lang: Language }) {
  const t = textos.approaches;

  return (
    <section id="intervencoes" className="py-24 bg-[#F8F7F2] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-serif text-[#4f5e38]">{t.title[lang]}</h2>
          <div className="w-16 h-1 bg-[#d76d2d] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interventionIds.map((id, index) => {
            const item = contentMap[id];
            const Icon = icons[item.icon];
            return (
              <m.div key={id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-10 rounded-2xl border border-[#E5E2D9] hover:border-[#d76d2d] hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="text-[#d76d2d] mb-6 group-hover:scale-110 transition-transform"><Icon className="w-6 h-6" /></div>
                <h3 className="text-lg font-bold mb-3 text-[#4f5e38]">{item.title[lang]}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow font-light leading-relaxed">{item.summary[lang]}</p>

                <Link
                  href={localePath(lang, `/intervencoes/${id}`)}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[#d76d2d] hover:text-[#4f5e38] transition-colors py-2 text-left"
                >
                  {t.learnMore[lang]} <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
