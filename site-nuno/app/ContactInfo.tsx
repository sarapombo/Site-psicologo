import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

type Language = 'pt' | 'en';

// Morada (não se traduz) — usada no link do Google Maps
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Praça Filipa de Lencastre 22, 4050-259 Porto');

const labels = {
  address: { pt: 'Morada', en: 'Address' },
  phone: { pt: 'Telemóvel', en: 'Mobile' },
  email: { pt: 'Email', en: 'Email' },
};

const labelClass =
  'flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#d76d2d] mb-2';
const valueClass =
  'text-white/80 hover:text-white font-light leading-relaxed transition-colors';

// Morada, telemóvel e email por escrito — partilhado pelos dois footers do site
export function ContactInfo({ lang }: { lang: Language }) {
  return (
    <address className="not-italic grid gap-6 text-center text-base">
      <div>
        <span className={labelClass}>
          <MapPin size={14} aria-hidden="true" /> {labels.address[lang]}
        </span>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={valueClass}>
          Praça Filipa de Lencastre
          <br />
          nº 22, 6º andar, sala 101
          <br />
          4050-259 Porto
        </a>
      </div>

      <div>
        <span className={labelClass}>
          <Phone size={14} aria-hidden="true" /> {labels.phone[lang]}
        </span>
        <a href="tel:+351962858716" className={`${valueClass} tracking-wide`}>
          962 858 716
        </a>
      </div>

      <div>
        <span className={labelClass}>
          <Mail size={14} aria-hidden="true" /> {labels.email[lang]}
        </span>
        <a href="mailto:nunopirespsic@gmail.com" className={`${valueClass} break-all`}>
          nunopirespsic@gmail.com
        </a>
      </div>
    </address>
  );
}
