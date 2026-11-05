import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { textos, contactos } from '../content/site';
import type { Language } from '../lib/i18n';

const texts = textos.contact;
const [emailUser, emailDomain] = contactos.email.split('@');

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

// Morada, telemóvel e email por escrito, em 3 colunas (usado no footer)
export function ContactInfo({ lang }: { lang: Language }) {
  return (
    <address className="not-italic grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      <a href={contactos.mapsUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
        <span className={iconClass}><MapPin size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.address[lang]}</span>
        <span className={valueClass}>
          {contactos.addressLines.map((line, i) => (
            <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>
          ))}
        </span>
        <span className={actionClass}>{texts.addressAction[lang]}</span>
      </a>

      <a href={contactos.phoneHref} className={cardClass}>
        <span className={iconClass}><Phone size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.phone[lang]}</span>
        <span className={`${valueClass} text-lg tracking-wide`}>{contactos.phoneDisplay}</span>
        <span className={actionClass}>{texts.phoneAction[lang]}</span>
      </a>

      <a href={`mailto:${contactos.email}`} className={cardClass}>
        <span className={iconClass}><Mail size={20} aria-hidden="true" /></span>
        <span className={labelClass}>{texts.email[lang]}</span>
        <span className={`${valueClass} break-words`}>{emailUser}<wbr />@{emailDomain}</span>
        <span className={actionClass}>{texts.emailAction[lang]}</span>
      </a>
    </address>
  );
}
