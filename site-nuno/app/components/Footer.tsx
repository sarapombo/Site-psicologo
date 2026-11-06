import React from 'react';
import Image from 'next/image';
import { MessageCircle, Instagram } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { textos, contactos } from '../content/site';
import type { Language } from '../lib/i18n';

// Footer, igual em todas as páginas (id="contacto" é o destino do botão "Contactos")
export function Footer({ lang }: { lang: Language }) {
  const t = textos.footer;

  return (
    <footer id="contacto" className="bg-[#4f5e38] text-white pt-24 pb-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Em mobile: contactos logo a seguir aos botões e redes sociais no fim */}
        <div className="flex flex-col gap-16 mb-24">
          <div className="contents md:grid md:grid-cols-3 md:gap-16 md:items-start">

            {/* Logo e slogan */}
            <div className="space-y-8 text-center md:text-left">
              <Image src="/logo-nuno-pires-branco.svg" alt={textos.meta.logoAlt[lang]} width={1665} height={306} unoptimized className="w-full max-w-[300px] h-auto mx-auto md:mx-0" />
              <p className="text-white/80 text-base font-light leading-relaxed max-w-xs mx-auto md:mx-0 italic">
                {t.slogan[lang]}
              </p>
            </div>

            {/* Contactos Profissionais: WhatsApp e Email */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-[#d76d2d] uppercase tracking-[0.2em]">{t.contactsTitle[lang]}</h2>
              <div className="w-16 h-1 bg-[#d76d2d] mx-auto mb-8"></div>
              <div className="space-y-5">
                <a href={contactos.whatsappUrl} className="flex items-center justify-center gap-4 p-5 bg-[#d76d2d] rounded-2xl hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-xl group text-lg">
                  <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" /> WhatsApp
                </a>
                <a href={`mailto:${contactos.email}`} className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-base tracking-wide">
                  {t.emailBtn[lang]}
                </a>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="order-last md:order-none text-center md:text-right space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-[#d76d2d]">
                {t.socials[lang]}
              </h3>
              <div className="flex justify-center md:justify-end gap-6">
                <a href={contactos.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-white/5 rounded-full hover:bg-[#d76d2d] transition-all border border-white/10 shadow-lg"> <Instagram size={20} /></a>
              </div>
            </div>
          </div>

          {/* Morada, telemóvel e email em 3 colunas */}
          <ContactInfo lang={lang} />
        </div>

        {/* Barra final: direitos e créditos */}
        <div className="pt-16 border-t border-white/10 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
          <div className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-medium text-white/75 text-center md:text-left leading-relaxed">
            {t.rights[lang]}
          </div>

          <div className="hidden md:block"></div>

          <div className="flex items-center justify-center md:justify-end gap-5 group">
            <div className="text-right">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-white/75 mb-1">{t.devBy[lang]}</span>
            </div>

            <a
              href="https://linktr.ee/sarapombo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-1 transition-all duration-500 hover:scale-110 hover:rotate-6"
            >
              <Image
                src="/sarapombo.png"
                alt="Sara Pombo Logo"
                width={823}
                height={312}
                sizes="148px"
                className="h-14 w-auto drop-shadow-[0_0_15px_rgba(215,109,45,0.3)]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
