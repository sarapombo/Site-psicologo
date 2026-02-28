"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, Mail } from 'lucide-react';
import { Footer } from '../../Footer';

const contentMap: Record<string, { title: string; paragraphs: string[]; highlights: string[]; images?: string[] }> = {
  "psicoterapia": {
    title: "Psicoterapia",
    paragraphs: [
      "A psicoterapia é um processo de acompanhamento psicológico que tem como base a relação terapêutica entre o psicólogo e a pessoa que procura apoio. Este espaço relacional, seguro e confidencial, permite explorar dificuldades emocionais, relacionais ou existenciais, com o objetivo de promover maior compreensão de si próprio.",
      "Através de modelos teóricos e técnicas terapêuticas adequadas a cada pessoa, o processo psicoterapêutico facilita a redução do sofrimento psicológico, a reorganização de questões internas e a promoção de mudanças ao nível dos sentimentos, pensamentos e comportamentos. A psicoterapia contribui para o desenvolvimento do autoconhecimento, do bem-estar emocional e de novas formas de estar na vida."
    ],
    highlights: ["Individual", "Confidencial", "Autoconhecimento"]
  },
  "psicodrama": {
    title: "Psicodrama",
    paragraphs: [
      "O Psicodrama é um modelo psicoterapêutico criado pelo psiquiatra Jacob Levy Moreno, que alia a expressão emocional, a ação e a relação com os outros como ferramentas de mudança terapêutica. Trata-se de uma terapia individual que decorre em contexto de grupo.",
      "Através da representação de situações da vida quotidiana, memórias, sonhos ou fantasias, a pessoa é convidada a vivenciar externamente a sua experiência interna. Este processo favorece o desenvolvimento da espontaneidade, da criatividade e de novas respostas a situações vividas, permitindo uma compreensão mais profunda de si próprio e das suas relações."
    ],
    highlights: ["Contexto de Grupo", "Ação Terapêutica", "Creatividade"]
  },
  "psicodanca": {
    title: "Psicodança",
    paragraphs: [
      "A Psicodança é uma abordagem psicoterapêutica baseada nos princípios do psicodrama moreniano, realizada em contexto de grupo. Privilegia a comunicação corpo–mente, recorrendo ao movimento, à música e à expressão corporal como principais meios terapêuticos.",
      "Ao reduzir o foco exclusivo na palavra, a Psicodança permite que emoções, vivências e formas de relação emerjam através do corpo. Este processo facilita a identificação e elaboração de padrões emocionais e relacionais, promovendo novas formas de expressão, maior consciência corporal e integração emocional no dia-a-dia."
    ],
    highlights: ["Corpo-Mente", "Expressão Corporal", "Música"],
    images: ["/psicodanca.png"] 
  },
  "terapia-equinos": {
    title: "Terapia Assistida por Equinos",
    paragraphs: [
      "A Terapia Assistida por Equinos promove o desenvolvimento pessoal e emocional através da relação estabelecida com os cavalos e da realização de exercícios estruturados em contexto terapêutico. As sessões decorrem no solo, não havendo montaria.",
      "Os cavalos, pela sua elevada sensibilidade à linguagem não-verbal, funcionam como espelhos dos nossos estados emocionais e padrões de comportamento. A interação com estes animais permite aumentar a consciência emocional, identificar formas habituais de relação e explorar alternativas mais ajustadas. As experiências vividas podem ser metaforizadas com situações do quotidiano, facilitando a transferência das aprendizagens para a vida pessoal e relacional.",
      "As sessões podem ser individuais ou em grupo, de acordo com as necessidades apresentadas."
    ],
    highlights: ["Sessões no Solo", "Espelho Emocional", "Linguagem Não-Verbal"],
    images: ["/cavalo.png", "/cavalo2.png", "/cavalo3.png"] 
  },
  "psicadelicos": {
    title: "Intervenção Assistida por Psicadélicos",
    paragraphs: [
      "A Intervenção Assistida por Psicadélicos, neste contexto, centra-se exclusivamente no trabalho de integração psicológica de experiências vividas em estados ampliados de consciência. O objetivo é apoiar a pessoa na compreensão, elaboração e incorporação dessas experiências na sua vida emocional, relacional e existencial.",
      "O trabalho de integração permite transformar vivências intensas ou significativas em aprendizagens com sentido, promovendo maior clareza, autoconhecimento e mudanças sustentadas no quotidiano. Através de um acompanhamento terapêutico estruturado, procura-se ajudar a pessoa a dar significado ao que foi experienciado, a regular o impacto emocional e a traduzir os insights obtidos em ações concretas e alinhadas com os seus valores."
    ],
    highlights: ["Integração", "Estados Ampliados", "Insights"]
  },
  "respiracao-holotropica": {
    title: "Respiração Holotrópica",
    paragraphs: [
      "A Respiração Holotrópica é uma abordagem experiencial de autoconhecimento e desenvolvimento pessoal que utiliza padrões específicos de respiração, música evocativa e trabalho corporal para facilitar o acesso a estados ampliados de consciência, sem recurso a substâncias.",
      "Este processo possibilita o contacto com conteúdos emocionais, biográficos e simbólicos, favorecendo a expressão, a integração e a libertação de tensões físicas e emocionais. A Respiração Holotrópica promove o aprofundamento do autoconhecimento, a regulação emocional e a integração corpo–mente, respeitando o ritmo e a experiência subjetiva de cada pessoa."
    ],
    highlights: ["Experiencial", "Sem Substâncias", "Libertação"]
  }
};

export default function DetalheIntervencao() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const content = contentMap[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30">
      
      {/* --- NAVEGAÇÃO --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-[#4f5e38] font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#d76d2d] transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          
          {/* TÍTULO (ANIMAÇÃO DE QUEDA) */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[#4f5e38] mb-6">
              {content.title}
            </h1>
            <div className="w-16 h-1 bg-[#d76d2d] mx-auto"></div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {content.highlights.map((h, i) => (
              <span key={i} className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-[#4f5e38] border border-[#E5E2D9] shadow-sm">
                {h}
              </span>
            ))}
          </motion.div>

          {/* IMAGENS */}
          {content.images && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`grid gap-6 mb-16 ${content.images.length > 1 ? 'grid-cols-1 md:grid-cols-3' : 'max-w-2xl mx-auto'}`}
            >
              {content.images.map((src, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-xl border-b-4 border-[#d76d2d]">
                  <img 
                    src={src} 
                    alt={content.title} 
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* TEXTO (ALINHADO À ESQUERDA) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light text-left"
          >
            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>

          {/* CARD DE CONTACTO (ESTILO FOOTER) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-[#4f5e38] to-[#6a7a50] rounded-[2.5rem] text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl font-serif mb-8 text-white">Ficou com dúvidas?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/351912345678" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-lg">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="mailto:exemplo@nuno-pires.pt" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
                <Mail size={20} /> Email
              </a>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />

    </div>
  );
}