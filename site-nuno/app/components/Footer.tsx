import React from 'react';
import { Instagram } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import type { Language } from '../lib/i18n';

// Footer das páginas de intervenções. O idioma vem do endereço (/ ou /en).
export function Footer({ lang }: { lang: Language }) {
  // Dicionário de textos para o Footer
  const staticTexts = {
    slogan: { 
      pt: "Sentir, Agir e Transformar.", 
      en: "To Feel, to Act and to Transform." 
    },
    contacts: {
      pt: "Contactos",
      en: "Contacts"
    },
    socials: {
      pt: "Redes Sociais", 
      en: "Social Media" 
    },
    rights: { 
      pt: "© 2026 Nuno Pires — Todos os direitos reservados", 
      en: "© 2026 Nuno Pires — All rights reserved" 
    },
    devBy: { 
      pt: "Desenvolvido por", 
      en: "Developed by" 
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#4f5e38] to-[#6b7d52] text-white pt-12 pb-8 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Em mobile: contactos antes das redes sociais */}
        <div className="flex flex-col gap-10 mb-12">
          <div className="contents md:grid md:grid-cols-2 md:gap-10 md:items-center">

            {/* Coluna 1: Logo Dr. Nuno */}
            <div className="space-y-4 text-center md:text-left">
              <img src="/logo-nuno-pires-branco.svg" alt="Nuno Pires — Psicólogo Clínico & Psicoterapeuta" className="w-full max-w-[280px] h-auto mx-auto md:mx-0" />
              <p className="text-white/60 text-base font-serif italic max-w-xs mx-auto md:mx-0">
                {staticTexts.slogan[lang]}
              </p>
            </div>

            {/* Coluna 2: Redes Sociais */}
            <div className="order-last md:order-none text-center md:text-right space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d76d2d]">
                {staticTexts.socials[lang]}
              </h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a 
                  href="https://www.instagram.com/nunomcpires" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-full hover:bg-[#d76d2d] transition-all border border-white/10 shadow-lg"
                > 
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contactos: morada, telemóvel e email em 3 colunas */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d76d2d] text-center">
              {staticTexts.contacts[lang]}
            </h4>
            <ContactInfo lang={lang} />
          </div>
        </div>

        {/* Barra Final: Copyright e Teu Logo */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/40 text-center md:text-left">
            {staticTexts.rights[lang]}
          </div>
          
          {/* Teu Logo Clicável */}
          <div className="flex items-center gap-3 group">
            <span className="text-[8px] tracking-[0.3em] uppercase text-white/30">
              {staticTexts.devBy[lang]}
            </span>
            <a 
              href="https://linktr.ee/sarapombo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              <img 
                src="/sarapombo.png" 
                alt="Sara Pombo Logo" 
                className="h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
