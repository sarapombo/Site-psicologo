import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import type { Language } from '../lib/i18n';

// Morada (não se traduz) — usada no link do Google Maps
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Praça Filipa de Lencastre 22, 4050-259 Porto');

const texts = {
  address: { pt: 'Morada', en: 'Address' },
  phone: { pt: 'Telemóvel', en: 'Mobile' },
  email: { pt: 'Email', en: 'Email' },
  addressAction: { pt: 'Ver no mapa', en: 'View on map' },
  phoneAction: { pt: 'Ligar', en: 'Call' },
  emailAction: { pt: 'Enviar email', en: 'Send email' },
};

// Cada contacto é um cartão clicável por inteiro (área de toque grande)
const cardClass =
  'group flex flex-col items-center text-center gap-3 h-full p-6 md:p-5 lg:p-8 rounded-2xl bg-white/5 border border-white/10 ' +
  'hover:bg-white/10 hover:border-[#d76d2d]/60 transition-all duration-300 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d76d2d]';
const iconClass =
  'flex items-center justify-center w-12 h-12 rounded-full bg-[#d76d2d]/15 text-[#d76d2d] ' +
  'group-hover:bg-[#d76d2d] group-hover:text-white transition-colors duration-300';
const labelClass = 'text-[10px] uppercase tracking-[0.3em] font-bold text-[#d76d2d]';
const valueClass = 'text-white/90 text-base font-light leading-relaxed';
const actionClass =
  'mt-auto pt-1 text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors';

// Morada, telemóvel e email por escrito, em 3 colunas — partilhado pelos dois footers do site
export function ContactInfo({ lang }: { lang: Language }) {
  return (
    <address className="not-italic grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
        <span className={iconClass}><MapPin size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.address[lang]}</span>
        <span className={valueClass}>
          Praça Filipa de Lencastre
          <br />
          nº 22, 6º andar, sala 101
          <br />
          4050-259 Porto
        </span>
        <span className={actionClass}>{texts.addressAction[lang]}</span>
      </a>

      <a href="tel:+351962858716" className={cardClass}>
        <span className={iconClass}><Phone size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.phone[lang]}</span>
        <span className={`${valueClass} text-lg tracking-wide`}>962 858 716</span>
        <span className={actionClass}>{texts.phoneAction[lang]}</span>
      </a>

      <a href="mailto:nunopirespsic@gmail.com" className={cardClass}>
        <span className={iconClass}><Mail size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.email[lang]}</span>
        <span className={`${valueClass} break-words`}>nunopirespsic<wbr />@gmail.com</span>
        <span className={actionClass}>{texts.emailAction[lang]}</span>
      </a>
    </address>
  );
}
