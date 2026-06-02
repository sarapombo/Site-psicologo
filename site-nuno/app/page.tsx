"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Users, 
  Wind, 
  Waves, 
  Heart, 
  GraduationCap, 
  ShieldCheck, 
  Instagram 
} from 'lucide-react';

type Language = 'pt' | 'en';

// REMOVIDO o "export default" daqui para podermos aplicar o Suspense abaixo
function SitePsicologo() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [lang, setLang] = useState<Language>('pt');
  const [activeSection, setActiveSection] = useState('');

  // Sincroniza apenas se vier um parâmetro explícito na URL (ex: quando volta do detalhe)
  useEffect(() => {
    const urlLang = searchParams.get('lang') as Language;
    if (urlLang === 'pt' || urlLang === 'en') {
      setLang(urlLang);
    }
  }, [searchParams]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const interventions = [
    { 
      id: "psicoterapia", 
      title: { pt: "Psicoterapia", en: "Psychotherapy" }, 
      icon: <Heart className="w-6 h-6" />, 
      text: { 
        pt: "Espaço relacional, seguro e confidencial, que permite explorar dificuldades emocionais, relacionais ou existenciais.", 
        en: "A relational, safe, and confidential space to explore emotional, relational, or existential difficulties." 
      } 
    },
    { 
      id: "psicodrama", 
      title: { pt: "Psicodrama", en: "Psychodrama" }, 
      icon: <Users className="w-6 h-6" />, 
      text: { 
        pt: "Modelo que alia a expressão emocional, a ação e a relação através da representação de situações quotidianas.", 
        en: "A model that combines emotional expression, action, and relationships through the enactment of daily situations." 
      } 
    },
    { 
      id: "psicodanca", 
      title: { pt: "Psicodança", en: "Psychodance" }, 
      icon: <Waves className="w-6 h-6" />, 
      text: { 
        pt: "Abordagem baseada nos princípios morenianos que privilegia a comunicação corpo-mente através do movimento.", 
        en: "An approach based on Morenian principles that prioritizes body-mind communication through movement." 
      } 
    },
    { 
      id: "terapia-equinos", 
      title: { pt: "Terapia Assistida por Equinos", en: "Equine-Assisted Therapy" }, 
      icon: <Award className="w-6 h-6" />, 
      text: { 
        pt: "Desenvolvimento pessoal através da relação com cavalos (sessões no solo), funcionando como espelhos emocionais.", 
        en: "Personal development through the relationship with horses (groundwork sessions), which act as emotional mirrors." 
      } 
    },
    { 
      id: "psicadelicos", 
      title: { pt: "Preparação e Integração de Experiências Psicadélicas", en: "Preparation and Integration of Psychedelic Experiences" }, 
      icon: <BookOpen className="w-6 h-6" />, 
      text: { 
        pt: "Acompanhamento especializado antes e após vivências em estados ampliados de consciência. Focado na preparação emocional, redução de riscos e na integração segura de insights em mudanças positivas no quotidiano.", 
        en: "Specialized support before and after experiences in expanded states of consciousness. Focused on emotional preparation, risk reduction, and the safe integration of insights into positive changes in daily life." 
      } 
    },
    { 
      id: "respiracao-holotropica", 
      title: { pt: "Respiração Holotrópica", en: "Holotropic Breathwork" }, 
      icon: <Wind className="w-6 h-6" />, 
      text: { 
        pt: "Abordagem experiencial que utiliza respiração e música para aceder a states ampliados de consciência.", 
        en: "An experiential approach that uses breathing patterns and evocative music to access expanded states of consciousness." 
      } 
    },
    {  
      id: "supervisao", 
      title: { pt: "Supervisão em Psicoterapia e Psicodrama", en: "Psychotherapy and Psychodrama Supervision" }, 
      icon: <GraduationCap className="w-6 h-6" />, 
      text: { 
        pt: "Supervisão especializada em psicoterapia e psicodrama, individual ou em grupo. Um espaço seguro e colaborativo para reflexão clínica, aprofundamento técnico e desenvolvimento profissional (online e presencial).", 
        en: "Specialized supervision in psychotherapy and psychodrama, individual or in group. A safe and collaborative space for clinical reflection, technical deepening, and professional development (online and in-person)." 
      } 
    }
  ];

  const menuItems = [
    { name: { pt: 'Sobre', en: 'About' }, href: '#sobre' },
    { name: { pt: 'Intervenções', en: 'Approaches' }, href: '#intervencoes' },
    { name: { pt: 'Formação', en: 'Training' }, href: '#formacao' },
  ];

  const staticTexts = {
    contactsBtn: { pt: "Contactos", en: "Contacts" },
    heroTitle: { pt: <>Sentir, Agir e <span className="text-white">Transformar</span></>, en: <>To Feel, to Act and <span className="text-white">to Transform</span></> },
    heroSub: { pt: "Explore uma psicoterapia profunda que integra mente, corpo e ação para uma mudança autêntica.", en: "Explore a deep psychotherapy that integrates mind, body, and action for authentic change." },
    heroBtn1: { pt: "Agendar Consulta", en: "Book Consultation" },
    heroBtn2: { pt: "Ver Abordagens", en: "View Approaches" },
    aboutTitle: { pt: "A Minha Prática", en: "My Practice" },
    aboutP1: { pt: "A minha prática clínica integra abordagens relacionais, experienciais e corporais, com foco no autoconhecimento.", en: "My clinical practice integrates relational, experiential, and somatic approaches, with a core focus on self-knowledge." },
    aboutP2: { pt: "Sou Psicólogo Clínico, Psicoterapeuta individual e de grupo, Diretor de Psicodrama e Psicodança.", en: "I am a Clinical Psychologist, individual and group Psychotherapist, and a Director of Psychodrama and Psychodance." },
    opp: { pt: "Membro Efetivo da Ordem dos Psicólogos Portugueses", en: "Full Member of the Portuguese Order of Psychologists" },
    aipjgrb: { pt: "Sócio Fundador da AIPJGRB", en: "Founding Member of AIPJGRB" },
    spp: { pt: "Sócio Didata da SPP", en: "Teaching Member of SPP" },
    trainingTitle: { pt: "Formação e Especializações", en: "Training and Specializations" },
    phdTitle: { pt: "Doutoramento em Psicologia Aplicada", en: "PhD in Applied Psychology" },
    eft: { pt: "Terapia Focada nas Emoções", en: "Emotion-Focused Therapy" },
    pat: { pt: "Terapia Assistida por Psicadélicos", en: "Psychedelic-Assisted Therapy" },
    hb: { pt: "Respiração Holotrópica", en: "Holotropic Breathwork" },
    grief: { pt: "Online Grief Therapy", en: "Online Grief Therapy" },
    approachesTitle: { pt: "Abordagens Terapêuticas", en: "Therapeutic Approaches" },
    learnMore: { pt: "Saber mais", en: "Learn more" },
    footerTitle: { pt: "Contactos Profissionais", en: "Professional Contacts" },
    emailBtn: { pt: "Enviar Email", en: "Send Email" },
    devBy: { pt: "Desenvolvido por", en: "Developed by" },
    rights: { pt: "© 2026 Nuno Pires — Todos os direitos reservados", en: "© 2026 Nuno Pires — All rights reserved" }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30 overflow-x-hidden">
      
      {/* --- NAVEGAÇÃO --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20 md:h-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            onClick={scrollToTop}
            className="flex items-center group cursor-pointer"
          >
            <img src="/logo-horizontal.svg" alt="Logo Nuno Pires" className="h-10 md:h-20 w-auto transition-transform duration-500 group-hover:scale-90" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-10 text-[12px] font-medium uppercase tracking-[0.2em]">
            {menuItems.map((item) => (
              <a 
                key={item.name[lang]}
                href={item.href} 
                onClick={() => setActiveSection(item.href)}
                className={`transition-all duration-300 ${activeSection === item.href ? 'text-[#d76d2d]' : 'hover:text-[#d76d2d]'}`}
              >
                {item.name[lang]}
              </a>
            ))}
            <a href="#contacto" className="bg-[#4f5e38] text-white px-8 py-3 rounded-full hover:bg-[#d76d2d] transition-all shadow-md ml-4">
              {staticTexts.contactsBtn[lang]}
            </a>

            {/* BOTÃO SELETOR DE IDIOMA */}
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="ml-4 px-3 py-1 border border-[#E5E2D9] rounded-md text-[11px] font-bold text-[#4f5e38] hover:border-[#d76d2d] hover:text-[#d76d2d] transition-colors bg-white/50"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute z-0 w-full h-full object-cover">
          <source src="/video-grass-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute z-10 inset-0 bg-black/40"></div>
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {staticTexts.heroTitle[lang]}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-2xl text-white/95 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
            {staticTexts.heroSub[lang]}
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <a href="#contacto" className="px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-xl">{staticTexts.heroBtn1[lang]}</a>
            <a href="#intervencoes" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#d76d2d] transition-colors py-2">{staticTexts.heroBtn2[lang]} <ChevronRight size={18} className="ml-2" /></a>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="sobre" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl font-serif text-[#4f5e38]">{staticTexts.aboutTitle[lang]}</h2>
              <div className="w-16 h-1 bg-[#d76d2d]"></div>
              <div className="space-y-4 text-gray-600 font-light text-lg">
                <p>{staticTexts.aboutP1[lang]}</p>
                <p>{staticTexts.aboutP2[lang]}</p>
              </div>
              <div className="pt-6 border-t border-[#F0EFEB]">
                <ul className="space-y-3 text-sm text-[#4f5e38]">
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> {staticTexts.opp[lang]}</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> {staticTexts.aipjgrb[lang]}</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> {staticTexts.spp[lang]}</li>
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
              <motion.img src="/foto-profissional-1.png" alt="Dr. Nuno Pires" className="relative w-full max-w-sm rounded-2xl shadow-2xl border-b-4 border-[#d76d2d] z-10 transition-transform duration-500" whileHover={{ scale: 1.03, y: -5 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FORMAÇÃO --- */}
      <section id="formacao" className="py-20 bg-[#F0EFEB] px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-10 shadow-sm border border-[#E5E2D9]">
            <h3 className="text-2xl font-serif text-[#4f5e38] mb-8 flex items-center gap-3"><GraduationCap className="w-8 h-8 text-[#d76d2d]" /> {staticTexts.trainingTitle[lang]}</h3>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-[#4A4A4A] text-lg mb-1">{staticTexts.phdTitle[lang]}</p>
                <p className="text-[#8B8B7A] italic text-sm">Universidade do Minho — "Therapeutic Collaboration in the Early Phase of Psychotherapy"</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EFEB] text-sm text-gray-700">
                <div className="space-y-3">
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> {staticTexts.eft[lang]}</p>
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> {staticTexts.pat[lang]}</p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> {staticTexts.hb[lang]}</p>
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> {staticTexts.grief[lang]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABORDAGENS --- */}
      <section id="intervencoes" className="py-24 bg-[#F8F7F2] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif text-[#4f5e38]">{staticTexts.approachesTitle[lang]}</h2>
            <div className="w-16 h-1 bg-[#d76d2d] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interventions.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-10 rounded-2xl border border-[#E5E2D9] hover:border-[#d76d2d] hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="text-[#d76d2d] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-[#4f5e38]">{item.title[lang]}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow font-light leading-relaxed">{item.text[lang]}</p>
                
                <button 
                  onClick={() => router.push(`/intervencoes/${item.id}?lang=${lang}`)}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[#d76d2d] hover:text-[#4f5e38] transition-colors py-2 text-left"
                >
                  {staticTexts.learnMore[lang]} <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAVALO --- */}
      <div className="relative h-40 md:h-56 flex justify-center pointer-events-none overflow-visible">
        <img src="/cavalo_sem_fundo.png" alt="Cavalo" className="absolute bottom-[-180px] md:bottom-[-220px] z-20 h-[400px] md:h-[550px] w-auto drop-shadow-2xl" />
      </div>

      {/* --- FOOTER CUSTOMIZADO --- */}
      <footer id="contacto" className="bg-[#4f5e38] text-white pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-24 items-start">
            
            <div className="space-y-8 text-center md:text-left">
              <img src="/logo-horizontal.svg" alt="Nuno Pires" className="h-24 w-auto brightness-0 invert mx-auto md:mx-0 opacity-90" />
              <p className="text-white/70 text-base font-light leading-relaxed max-w-xs mx-auto md:mx-0 italic">
                {lang === 'pt' ? "Sentir, Agir e Transformar." : "To Feel, to Act and to Transform."}
              </p>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-[#d76d2d] uppercase tracking-[0.2em]">{staticTexts.footerTitle[lang]}</h2>
              <div className="w-16 h-1 bg-[#d76d2d] mx-auto mb-8"></div>
              <div className="space-y-5">
                <a href="https://wa.me/351962858716" className="flex items-center justify-center gap-4 p-5 bg-[#d76d2d] rounded-2xl hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-xl group text-lg">
                  <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" /> WhatsApp
                </a>
                <a href="mailto:nunopirespsic@hotmail.com" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-base tracking-wide">
                  {staticTexts.emailBtn[lang]}
                </a>
              </div>
            </div>

            <div className="text-center md:text-right space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#d76d2d]">
                {lang === 'pt' ? "Redes Sociais" : "Social Media"}
              </h4>
              <div className="flex justify-center md:justify-end gap-6">
                <a href="https://www.instagram.com/nunomcpires" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#d76d2d] transition-all border border-white/10 shadow-lg"> <Instagram size={20} /></a>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
            <div className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-medium text-white/50 text-center md:text-left leading-relaxed">
              {staticTexts.rights[lang]}
            </div>

            <div className="hidden md:block"></div>
            
            <div className="flex items-center justify-center md:justify-end gap-5 group">
              <div className="text-right">
                <span className="block text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">{staticTexts.devBy[lang]}</span>
              </div>
              
              <a 
                href="https://linktr.ee/sarapombo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden p-1 transition-all duration-500 hover:scale-110 hover:rotate-6"
              >
                <img 
                  src="/sarapombo.png" 
                  alt="Sara Pombo Logo" 
                  className="h-14 w-auto drop-shadow-[0_0_15px_rgba(215,109,45,0.3)]" 
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// NOVO EXPORT DEFAULT COM SUSPENSE (Protege o build contra o useSearchParams)
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F7F2]" />}>
      <SitePsicologo />
    </Suspense>
  );
}