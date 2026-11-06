"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { textos } from '../content/site';
import { type Language, localePath } from '../lib/i18n';

type HeaderProps = {
  lang: Language;
  // Endereço da mesma página no outro idioma (botão PT/EN)
  switchHref: string;
  // Na página principal os links do menu fazem scroll; nas outras páginas voltam à principal
  isHome?: boolean;
};

// Menu de navegação, igual em todas as páginas
export function Header({ lang, switchHref, isHome = false }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('');
  const otherLang: Language = lang === 'pt' ? 'en' : 'pt';
  const homeHref = localePath(lang);
  const sectionHref = (section: string) => (isHome ? `#${section}` : `${homeHref}#${section}`);

  // Na página principal, o logo faz scroll até ao topo em vez de recarregar a página
  const handleLogoClick = (event: React.MouseEvent) => {
    if (!isHome) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E2D9]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20 md:h-24">
        <div className="shrink-0 motion-safe:animate-enter-down-sm">
          <Link href={homeHref} onClick={handleLogoClick} className="flex items-center group">
            <Image src="/logo-nuno-pires.svg" alt={textos.meta.logoAlt[lang]} width={1665} height={306} unoptimized loading="eager" className="h-10 md:h-12 lg:h-16 w-auto transition-transform duration-500 group-hover:scale-90" />
          </Link>
        </div>

        {/* Grupo da Direita: menu (só em PC) e botão de idioma */}
        <div className="flex items-center gap-4">
          {/* Menu de Links - Visível apenas em PC (lg) */}
          <div className="hidden lg:flex items-center space-x-10 text-[12px] font-medium uppercase tracking-[0.2em]">
            {textos.menu.items.map((item) => (
              <a
                key={item.section}
                href={sectionHref(item.section)}
                onClick={() => setActiveSection(item.section)}
                className={`transition-all duration-300 ${activeSection === item.section ? 'text-[#d76d2d]' : 'hover:text-[#d76d2d]'}`}
              >
                {item.label[lang]}
              </a>
            ))}
            <a href="#contacto" className="bg-[#4f5e38] text-white px-8 py-3 rounded-full hover:bg-[#d76d2d] transition-all shadow-md ml-4">
              {textos.menu.contactsBtn[lang]}
            </a>
          </div>

          {/* Seletor de idioma: link para a mesma página no outro idioma, visível em mobile e PC */}
          <Link
            href={switchHref}
            hrefLang={otherLang === 'pt' ? 'pt-PT' : 'en'}
            className="px-3 py-1.5 border border-[#E5E2D9] rounded-md text-[11px] font-bold text-[#4f5e38] hover:border-[#d76d2d] hover:text-[#d76d2d] transition-colors bg-white/50"
          >
            {otherLang.toUpperCase()}
            <span className="sr-only"> — {textos.menu.switchLang[lang]}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
