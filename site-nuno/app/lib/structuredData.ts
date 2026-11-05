import { textos, contactos } from "../content/site";
import { type Language, SITE_URL, localePath } from "./i18n";

// Dados estruturados (schema.org) para o Google: ajudam a mostrar nome, morada,
// telefone e redes sociais diretamente nos resultados de pesquisa.
export function businessJsonLd(lang: Language) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#consultorio`,
    name: textos.meta.title[lang],
    description: textos.meta.description[lang],
    url: SITE_URL + localePath(lang),
    logo: `${SITE_URL}/logo-nuno-pires.svg`,
    image: `${SITE_URL}/foto-profissional-1.png`,
    telephone: "+351962858716",
    email: contactos.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Filipa de Lencastre, nº 22, 6º andar, sala 101",
      postalCode: "4050-259",
      addressLocality: "Porto",
      addressCountry: "PT",
    },
    availableLanguage: ["Portuguese", "English"],
    sameAs: [contactos.instagramUrl],
    founder: {
      "@type": "Person",
      name: "Nuno Pires",
      jobTitle: lang === "pt" ? "Psicólogo Clínico e Psicoterapeuta" : "Clinical Psychologist and Psychotherapist",
    },
  };
}
