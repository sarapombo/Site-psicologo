// Todos os textos do site (exceto as intervenções, que estão em intervencoes.ts).
// Cada texto tem a versão portuguesa (pt) e inglesa (en) lado a lado.
// Se faltar uma das versões, o TypeScript dá erro no build.

export const textos = {
  // Título e descrição que aparecem no Google e ao partilhar o link
  meta: {
    title: {
      pt: "Nuno Pires - Psicólogo Clínico & Psicoterapeuta",
      en: "Nuno Pires - Clinical Psychologist & Psychotherapist",
    },
    description: {
      pt: "Psicólogo Clínico & Psicoterapeuta — Integração Emocional e Desenvolvimento Pessoal",
      en: "Clinical Psychologist & Psychotherapist — Emotional Integration and Personal Development",
    },
    logoAlt: {
      pt: "Nuno Pires — Psicólogo Clínico & Psicoterapeuta",
      en: "Nuno Pires — Clinical Psychologist & Psychotherapist",
    },
  },

  // Menu de navegação
  menu: {
    items: [
      { section: "sobre", label: { pt: "Sobre", en: "About" } },
      { section: "intervencoes", label: { pt: "Intervenções", en: "Approaches" } },
      { section: "formacao", label: { pt: "Formação", en: "Training" } },
    ],
    contactsBtn: { pt: "Contactos", en: "Contacts" },
    switchLang: { pt: "Ver o site em inglês", en: "View the site in Portuguese" },
    back: { pt: "Voltar", en: "Back" },
  },

  // Topo da página principal (vídeo)
  hero: {
    title: { pt: "Sentir, Agir e", en: "To Feel, to Act and" },
    titleHighlight: { pt: "Transformar", en: "to Transform" },
    subtitle: {
      pt: "Explore uma psicoterapia profunda que integra mente, corpo e ação para uma mudança autêntica.",
      en: "Explore a deep psychotherapy that integrates mind, body, and action for authentic change.",
    },
    bookBtn: { pt: "Agendar Consulta", en: "Book Consultation" },
    approachesBtn: { pt: "Ver Abordagens", en: "View Approaches" },
  },

  // Secção "A Minha Prática"
  about: {
    title: { pt: "A Minha Prática", en: "My Practice" },
    paragraphs: [
      {
        pt: "A minha prática clínica integra abordagens relacionais, experienciais e corporais, com foco no autoconhecimento.",
        en: "My clinical practice integrates relational, experiential, and somatic approaches, with a core focus on self-knowledge.",
      },
      {
        pt: "Sou Psicólogo Clínico, Psicoterapeuta individual e de grupo, Diretor de Psicodrama e Psicodança.",
        en: "I am a Clinical Psychologist, individual and group Psychotherapist, and a Director of Psychodrama and Psychodance.",
      },
      {
        pt: "As consultas podem decorrer em formato presencial ou online, em português ou inglês, de acordo com a preferência e necessidades de cada pessoa.",
        en: "Appointments can take place either in person or online, in Portuguese or English, according to each person's preference and needs.",
      },
    ],
    memberships: [
      { pt: "Membro Efetivo da Ordem dos Psicólogos Portugueses", en: "Full Member of the Portuguese Order of Psychologists" },
      { pt: "Sócio Fundador da AIPJGRB", en: "Founding Member of AIPJGRB" },
      { pt: "Sócio Didata da SPP", en: "Teaching Member of SPP" },
    ],
    photoAlt: { pt: "Dr. Nuno Pires", en: "Dr. Nuno Pires" },
  },

  // Secção "Formação e Especializações"
  training: {
    title: { pt: "Formação e Especializações", en: "Training and Specializations" },
    phd: { pt: "Doutoramento em Psicologia Aplicada", en: "PhD in Applied Psychology" },
    phdDetail: {
      pt: 'Universidade do Minho — "Therapeutic Collaboration in the Early Phase of Psychotherapy"',
      en: 'Universidade do Minho — "Therapeutic Collaboration in the Early Phase of Psychotherapy"',
    },
    specializations: [
      { pt: "Terapia Focada nas Emoções", en: "Emotion-Focused Therapy" },
      { pt: "Terapia Assistida por Psicadélicos", en: "Psychedelic-Assisted Therapy" },
      { pt: "Respiração Holotrópica", en: "Holotropic Breathwork" },
      { pt: "Online Grief Therapy", en: "Online Grief Therapy" },
    ],
  },

  // Secção "Abordagens Terapêuticas" (os cartões vêm de intervencoes.ts)
  approaches: {
    title: { pt: "Abordagens Terapêuticas", en: "Therapeutic Approaches" },
    learnMore: { pt: "Saber mais", en: "Learn more" },
  },

  // Cartão no fim de cada página de intervenção
  interventionCta: {
    title: { pt: "Ficou com dúvidas?", en: "Have any questions?" },
    whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
    email: { pt: "Email", en: "Email" },
  },

  // Footer (igual em todas as páginas)
  footer: {
    slogan: { pt: "Sentir, Agir e Transformar.", en: "To Feel, to Act and to Transform." },
    contactsTitle: { pt: "Contactos Profissionais", en: "Professional Contacts" },
    emailBtn: { pt: "Enviar Email", en: "Send Email" },
    socials: { pt: "Redes Sociais", en: "Social Media" },
    rights: {
      pt: "© 2026 Nuno Pires — Todos os direitos reservados",
      en: "© 2026 Nuno Pires — All rights reserved",
    },
    devBy: { pt: "Desenvolvido por", en: "Developed by" },
  },

  // Cartões de morada, telemóvel e email (a morada em si não se traduz)
  contact: {
    address: { pt: "Morada", en: "Address" },
    phone: { pt: "Telemóvel", en: "Mobile" },
    email: { pt: "Email", en: "Email" },
    addressAction: { pt: "Ver no mapa", en: "View on map" },
    phoneAction: { pt: "Ligar", en: "Call" },
    emailAction: { pt: "Enviar email", en: "Send email" },
  },
};

// Dados de contacto (iguais nas duas línguas)
export const contactos = {
  addressLines: ["Praça Filipa de Lencastre", "nº 22, 6º andar, sala 101", "4050-259 Porto"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Praça Filipa de Lencastre 22, 4050-259 Porto"),
  phoneDisplay: "962 858 716",
  phoneHref: "tel:+351962858716",
  whatsappUrl: "https://wa.me/351962858716",
  email: "nunopirespsic@gmail.com",
  instagramUrl: "https://www.instagram.com/nunomcpires",
};
