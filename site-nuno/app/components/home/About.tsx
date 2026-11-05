"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { textos } from '../../content/site';
import type { Language } from '../../lib/i18n';

// Secção "A Minha Prática"
export function About({ lang }: { lang: Language }) {
  const t = textos.about;

  return (
    <section id="sobre" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl font-serif text-[#4f5e38]">{t.title[lang]}</h2>
            <div className="w-16 h-1 bg-[#d76d2d]"></div>
            <div className="space-y-4 text-gray-600 font-light text-lg">
              {t.paragraphs.map((p) => <p key={p.pt}>{p[lang]}</p>)}
            </div>
            <div className="pt-6 border-t border-[#F0EFEB]">
              <ul className="space-y-3 text-sm text-[#4f5e38]">
                {t.memberships.map((m) => (
                  <li key={m.pt} className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> {m[lang]}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
            <motion.img src="/foto-profissional-1.png" alt={t.photoAlt[lang]} className="relative w-full max-w-sm rounded-2xl shadow-2xl border-b-4 border-[#d76d2d] z-10 transition-transform duration-500" whileHover={{ scale: 1.03, y: -5 }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
