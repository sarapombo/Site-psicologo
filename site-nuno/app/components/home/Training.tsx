"use client";

import React from 'react';
import { m } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { textos } from '../../content/site';
import type { Language } from '../../lib/i18n';

// Secção "Formação e Especializações"
export function Training({ lang }: { lang: Language }) {
  const t = textos.training;
  // As especializações aparecem em duas colunas
  const half = Math.ceil(t.specializations.length / 2);
  const columns = [t.specializations.slice(0, half), t.specializations.slice(half)];

  return (
    <section id="formacao" className="py-20 bg-[#F0EFEB] px-6">
      <div className="max-w-4xl mx-auto">
        <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-10 shadow-sm border border-[#E5E2D9]">
          <h3 className="text-2xl font-serif text-[#4f5e38] mb-8 flex items-center gap-3"><GraduationCap className="w-8 h-8 text-[#d76d2d]" /> {t.title[lang]}</h3>
          <div className="space-y-8">
            <div>
              <p className="font-bold text-[#4A4A4A] text-lg mb-1">{t.phd[lang]}</p>
              <p className="text-[#8B8B7A] italic text-sm">{t.phdDetail[lang]}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EFEB] text-sm text-gray-700">
              {columns.map((column, i) => (
                <div key={i} className="space-y-3">
                  {column.map((s) => (
                    <p key={s.pt} className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> {s[lang]}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
