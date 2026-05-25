"use client";

import React, { useState } from 'react';
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
  Instagram, 
  Linkedin 
} from 'lucide-react';

export default function SitePsicologo() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const interventions = [
    { id: "psicoterapia", title: "Psicoterapia", icon: <Heart className="w-6 h-6" />, text: "Espaço relacional, seguro e confidencial, que permite explorar dificuldades emocionais, relacionais ou existenciais." },
    { id: "psicodrama", title: "Psicodrama", icon: <Users className="w-6 h-6" />, text: "Modelo que alia a expressão emocional, a ação e a relação através da representação de situações quotidianas." },
    { id: "psicodanca", title: "Psicodança", icon: <Waves className="w-6 h-6" />, text: "Abordagem baseada nos princípios morenianos que privilegia a comunicação corpo-mente através do movimento." },
    { id: "terapia-equinos", title: "Terapia Assistida por Equinos", icon: <Award className="w-6 h-6" />, text: "Desenvolvimento pessoal através da relação com cavalos (sessões no solo), funcionando como espelhos emocionais." },
    { id: "psicadelicos", title: "Intervenção Assistida por Psicadélicos", icon: <BookOpen className="w-6 h-6" />, text: "Focada exclusivamente na integração psicológica de experiências em estados ampliados de consciência." },
    { id: "respiracao-holotropica", title: "Respiração Holotrópica", icon: <Wind className="w-6 h-6" />, text: "Abordagem experiencial que utiliza respiração e música para aceder a estados ampliados de consciência." },
    {  id: "supervisao", title: "Supervisão em Psicoterapia e Psicodrama",  icon: <GraduationCap className="w-6 h-6" />, text: "Supervisão especializada em psicoterapia e psicodrama, individual ou em grupo. Um espaço seguro e colaborativo para reflexão clínica, aprofundamento técnico e desenvolvimento profissional (online e presencial)." 
    }
  ];

  const menuItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Intervenções', href: '#intervencoes' },
    { name: 'Formação', href: '#formacao' },
  ];

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
                key={item.name}
                href={item.href} 
                onClick={() => setActiveSection(item.href)}
                className={`transition-all duration-300 ${activeSection === item.href ? 'text-[#d76d2d]' : 'hover:text-[#d76d2d]'}`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contacto" className="bg-[#4f5e38] text-white px-8 py-3 rounded-full hover:bg-[#d76d2d] transition-all shadow-md ml-4">
              Contactos
            </a>
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
            Sentir, Agir e <span className="text-white">Transformar</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-2xl text-white/95 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
            Explore uma psicoterapia profunda que integra mente, corpo e ação para uma mudança autêntica.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a href="#contacto" className="px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-xl">Agendar Consulta</a>
            <a href="#intervencoes" className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all font-bold uppercase tracking-widest text-sm">Ver Abordagens</a>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="sobre" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl font-serif text-[#4f5e38]">A Minha Prática</h2>
              <div className="w-16 h-1 bg-[#d76d2d]"></div>
              <div className="space-y-4 text-gray-600 font-light text-lg">
                <p>A minha prática clínica integra abordagens relacionais, experienciais e corporais, com foco no autoconhecimento.</p>
                <p>Sou Psicólogo Clínico, Psicoterapeuta individual e de grupo, Diretor de Psicodrama e Psicodança.</p>
              </div>
              <div className="pt-6 border-t border-[#F0EFEB]">
                <ul className="space-y-3 text-sm text-[#4f5e38]">
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> Membro Efetivo da Ordem dos Psicólogos Portugueses</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> Sócio Fundador da AIPJGRB</li>
                  <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#d76d2d]"/> Sócio Didata da SPP</li>
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
            <h3 className="text-2xl font-serif text-[#4f5e38] mb-8 flex items-center gap-3"><GraduationCap className="w-8 h-8 text-[#d76d2d]" /> Formação e Especializações</h3>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-[#4A4A4A] text-lg mb-1">Doutoramento em Psicologia Aplicada</p>
                <p className="text-[#8B8B7A] italic text-sm">Universidade do Minho — "Therapeutic Collaboration in the Early Phase of Psychotherapy"</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EFEB] text-sm text-gray-700">
                <div className="space-y-3">
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> Terapia Focada nas Emoções</p>
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> Terapia Assistida por Psicadélicos</p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> Respiração Holotrópica</p>
                  <p className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-[#d76d2d]"></span> Online Grief Therapy</p>
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
            <h2 className="text-3xl font-serif text-[#4f5e38]">Abordagens Terapêuticas</h2>
            <div className="w-16 h-1 bg-[#d76d2d] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interventions.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-10 rounded-2xl border border-[#E5E2D9] hover:border-[#d76d2d] hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="text-[#d76d2d] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-[#4f5e38]">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow font-light leading-relaxed">{item.text}</p>
                <a href={`/intervencoes/${item.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-[#d76d2d] hover:text-[#4f5e38] transition-colors py-2">
                  Saber mais <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAVALO --- */}
      <div className="relative h-40 md:h-56 flex justify-center pointer-events-none overflow-visible">
        <img src="/cavalo_sem_fundo.png" alt="Cavalo" className="absolute bottom-[-180px] md:bottom-[-220px] z-20 h-[400px] md:h-[550px] w-auto drop-shadow-2xl" />
      </div>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-[#4f5e38] text-white pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-24 items-start">
            
            <div className="space-y-8 text-center md:text-left">
              <img src="/logo-horizontal.svg" alt="Nuno Pires" className="h-24 w-auto brightness-0 invert mx-auto md:mx-0 opacity-90" />
              <p className="text-white/70 text-base font-light leading-relaxed max-w-xs mx-auto md:mx-0 italic">
                Sentir, Agir e Transformar.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-[#d76d2d] uppercase tracking-[0.2em]">Contactos Profissionais</h2>
              <div className="w-16 h-1 bg-[#d76d2d] mx-auto mb-8"></div>
              <div className="space-y-5">
                <a href="https://wa.me/351962858716" className="flex items-center justify-center gap-4 p-5 bg-[#d76d2d] rounded-2xl hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-xl group text-lg">
                  <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" /> WhatsApp
                </a>
                <a href="mailto:nunopirespsic@hotmail.com" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-base tracking-wide">
                  Enviar Email
                </a>
              </div>
            </div>

            <div className="text-center md:text-right space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#d76d2d]">Redes Sociais</h4>
              <div className="flex justify-center md:justify-end gap-6">
              <a href="https://www.instagram.com/nunomcpires" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#d76d2d] transition-all border border-white/10 shadow-lg"> <Instagram size={20} /></a>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
            <div className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-medium text-white/50 text-center md:text-left leading-relaxed">
              © 2026 Nuno Pires — Todos os direitos reservados
            </div>

            <div className="hidden md:block"></div>
            
            <div className="flex items-center justify-center md:justify-end gap-5 group">
              <div className="text-right">
                <span className="block text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">Desenvolvido por</span>
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