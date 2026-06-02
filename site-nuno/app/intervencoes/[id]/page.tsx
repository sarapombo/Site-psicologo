"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, Mail } from 'lucide-react';
import { Footer } from '../../Footer';

type Language = 'pt' | 'en';

interface ContentItem {
  title: { pt: string; en: string };
  paragraphs: { pt: string[]; en: string[] };
  highlights: { pt: string[]; en: string[] };
  images?: string[];
}

const contentMap: Record<string, ContentItem> = {
  "psicoterapia": {
    title: { pt: "Psicoterapia", en: "Psychotherapy" },
    paragraphs: {
      pt: [
        "A psicoterapia é um processo de acompanhamento psicológico que tem como base a relação terapêutica entre o psicólogo e a pessoa que procura apoio. Este espaço relacional, seguro e confidencial, permite explorar dificuldades emocionais, relacionais ou existenciais, com o objetivo de promover maior compreensão de si próprio.",
        "Através de modelos teóricos e técnicas terapêuticas adequadas a cada pessoa, o processo psicoterapêutico facilita a redução do sofrimento psicológico, a reorganização de questões internas e a promoção de mudanças ao nível dos sentimentos, pensamentos e comportamentos. A psicoterapia contribui para o desenvolvimento do autoconhecimento, do bem-estar emocional e de novas formas de estar na vida."
      ],
      en: [
        "Psychotherapy is a process of psychological support based on the therapeutic relationship between the psychologist and the person seeking help. This relational, safe, and confidential space allows for the exploration of emotional, relational, or existential difficulties, aiming to promote a deeper understanding of oneself.",
        "Through theoretical models and therapeutic techniques tailored to each individual, the psychotherapeutic process facilitates the reduction of psychological distress, the reorganization of internal issues, and the promotion of changes in feelings, thoughts, and behaviors. Psychotherapy contributes to the development of self-knowledge, emotional well-being, and new ways of being in life."
      ]
    },
    highlights: {
      pt: ["Individual", "Confidencial", "Autoconhecimento"],
      en: ["Individual", "Confidential", "Self-Knowledge"]
    }
  },
  "psicodrama": {
    title: { pt: "Psicodrama", en: "Psychodrama" },
    paragraphs: {
      pt: [
        "O Psicodrama é um modelo psicoterapêutico criado pelo psiquiatra Jacob Levy Moreno, que alia a expressão emocional, a ação e a relação com os outros como ferramentas de mudança terapêutica. Trata-se de uma terapia individual que decorre em contexto de grupo.",
        "Através da representação de situações da vida quotidiana, memórias, sonhos ou fantasias, a pessoa é convidada a vivenciar externamente a sua experiência interna. Este processo favorece o desenvolvimento da spontaneity, da criatividade e de novas respostas a situações vividas, permitindo uma compreensão mais profunda de si próprio e das suas relações."
      ],
      en: [
        "Psychodrama is a psychotherapeutic model created by psychiatrist Jacob Levy Moreno, combining emotional expression, action, and relationships with others as tools for therapeutic change. It is an individual therapy that takes place within a group context.",
        "Through the enactment of daily life situations, memories, dreams, or fantasies, the individual is invited to externally experience their internal reality. This process fosters the development of spontaneity, creativity, and new responses to life situations, allowing for a deeper understanding of oneself and one's relationships."
      ]
    },
    highlights: {
      pt: ["Contexto de Grupo", "Ação Terapêutica", "Criatividade"],
      en: ["Group Context", "Therapeutic Action", "Creativity"]
    },
    images: ["/psicodrama-1.jpeg", "/psicodrama-2.jpeg"]
  },
  "psicodanca": {
    title: { pt: "Psicodança", en: "Psychodance" },
    paragraphs: {
      pt: [
        "A Psicodança é uma abordagem psicoterapêutica baseada nos princípios do psicodrama moreniano, realizada em contexto de grupo. Privilegia a comunicação corpo–mente, recorrendo ao movimento, à música e à expressão corporal como principais meios terapêuticos.",
        "Ao reduzir o foco exclusivo na palavra, a Psicodança permite que emoções, vivências e formas de relação emerjam através do corpo. Este processo facilita a identificação e elaboração de padrões emocionais e relacionais, promovendo novas formas de expressão, maior consciência corporal e integração emocional no dia-a-dia."
      ],
      en: [
        "Psychodance is a psychotherapeutic approach based on the principles of Morenian psychodrama, conducted within a group context. It privileges body-mind communication, utilizing movement, music, and bodily expression as the primary therapeutic mediums.",
        "By reducing the exclusive focus on the spoken word, Psychodance allows emotions, life experiences, and relational patterns to emerge through the body. This process facilitates the identification and processing of emotional and behavioral patterns, promoting new forms of expression, greater body awareness, and daily emotional integration."
      ]
    },
    highlights: {
      pt: ["Corpo-Mente", "Expressão Corporal", "Música"],
      en: ["Body-Mind", "Somatic Expression", "Music"]
    },
    images: ["/psicodanca-5.jpeg", "/psicodanca-1.jpeg" ,"/psicodanca-2.jpeg" , "/psicodanca-3.jpeg" ,"/psicodanca-4.jpeg" ,"/psicodanca.png"] 
  },
  "terapia-equinos": {
    title: { pt: "Terapia Assistida por Equinos", en: "Equine-Assisted Therapy" },
    paragraphs: {
      pt: [
        "A Terapia Assistida por Equinos promove o desenvolvimento pessoal e emocional através da relação estabelecida com os cavalos e da realização de exercícios estruturados em contexto terapêutico. As sessões decorrem no solo, não havendo montaria.",
        "Os cavalos, pela sua elevada sensibilidade à linguagem não-verbal, funcionam como espelhos dos nossos estados emocionais e padrões de comportamento. A interação com estes animais permite aumentar a consciência emocional, identificar formas habituais de relação e explorar alternativas mais ajustadas. As experiências vividas podem ser metaforizadas com situações do quotidiano, facilitando a transferência das aprendizagens para a vida pessoal e relacional.",
        "As sessões podem ser individuais ou em grupo, de acordo com as necessidades apresentadas."
      ],
      en: [
        "Equine-Assisted Therapy promotes personal and emotional development through the relationship established with horses and structured exercises within a therapeutic context. The sessions take place on the ground, with no riding involved.",
        "Horses, due to their high sensitivity to non-verbal language, act as mirrors for our emotional states and behavioral patterns. Interacting with these animals enhances emotional awareness, helps identify habitual relationship patterns, and allows for the exploration of healthier alternatives. These live experiences can be metaphorized into daily situations, facilitating the transfer of insights into personal and relational life.",
        "Sessions can be individual or group-based, depending on the client's needs."
      ]
    },
    highlights: {
      pt: ["Sessões no Solo", "Espelho Emocional", "Linguagem Não-Verbal"],
      en: ["Groundwork Sessions", "Emotional Mirror", "Non-Verbal Language"]
    },
    images: ["/cavalo.png", "/cavalo2.png", "/cavalo3.png"] 
  },
  "psicadelicos": {
    title: { pt: "Preparação e Integração de Experiências Psicadélicas", en: "Preparation and Integration of Psychedelic Experiences" },
    paragraphs: {
      pt: [
        "A intervenção de preparação e integração psicológica de experiências psicadélicas centra-se no acompanhamento da pessoa antes e após vivências em estados ampliados de consciência. O objetivo é apoiar a pessoa na compreensão, elaboração e incorporação dessas experiências na sua vida emocional, relacional e existencial.", 
        "A preparação psicológica procura ajudar a pessoa a clarificar intenções, expectativas, receios e recursos internos, promovendo maior segurança emocional e capacidade de integração da experiência. O processo de integração permite transformar vivências intensas ou significativas em aprendizagens com sentido, promovendo maior clareza, autoconhecimento e mudanças sustentadas no quotidiano. Através de um acompanhamento terapêutico estruturado, procura-se ajudar a pessoa a dar significado ao que foi experienciado, a regular o impacto emocional e a traduzir os insights obtidos em ações concretas e alinhadas com os seus valores.",
        "Esta abordagem enquadra-se numa perspetiva de redução de riscos e minimização de danos, sem promover ou incentivar o uso de substâncias psicadélicas."
      ],
      en: [
        "Psychological preparation and integration for psychedelic experiences focuses on supporting the individual before and after journeys in expanded states of consciousness. The objective is to assist the person in understanding, processing, and incorporating these experiences into their emotional, relational, and existential life.",
        "Psychological preparation aims to help the individual clarify intentions, expectations, fears, and internal resources, fostering greater emotional safety and capacity to integrate the upcoming experience. The integration process helps transform intense or meaningful experiences into purposeful insights, fostering clarity, self-knowledge, and sustained daily changes. Through a structured therapeutic setting, the process helps make sense of what was experienced, regulate emotional impact, and translate insights into concrete actions aligned with core values.",
        "This approach is framed strictly within a risk reduction and harm minimization perspective, neither promoting nor encouraging the use of psychedelic substances."
      ]
    },
    highlights: {
      pt: ["Integração", "Estados Ampliados", "Insights"],
      en: ["Integration", "Expanded States", "Insights"]
    }
  },
  "respiracao-holotropica": {
    title: { pt: "Respiração Holotrópica", en: "Holotropic Breathwork" },
    paragraphs: {
      pt: [
        "A Respiração Holotrópica é uma abordagem experiencial de autoconhecimento e desenvolvimento pessoal que utiliza padrões específicos de respiração, música evocativa e trabalho corporal para facilitar o acesso a estados ampliados de consciência, sem recurso a substâncias.",
        "Este processo possibilita o contacto com conteúdos emocionais, biográficos e simbólicos, favorecendo a expressão, a integração e a libertação de tensões físicas e emocionais. A Respiração Holotrópica promove o aprofundamento do autoconhecimento, a regulação emocional e a integração corpo–mente, respeitando o ritmo e a experiência subjetiva de cada pessoa."
      ],
      en: [
        "Holotropic Breathwork is an experiential approach to self-knowledge and personal development that utilizes specific breathing patterns, evocative music, and somatic work to facilitate access to expanded states of consciousness without the use of substances.",
        "This process allows for contact with emotional, biographical, and symbolic content, favoring expression, integration, and the release of physical and emotional tension. Holotropic Breathwork promotes deep self-exploration, emotional regulation, and mind-body integration, while honoring the unique rhythm and subjective experience of each individual."
      ]
    },
    highlights: {
      pt: ["Experiencial", "Sem Substâncias", "Libertação"],
      en: ["Experiential", "Substance-Free", "Release"]
    }
  },
  "supervisao": {
    title: { pt: "Supervisão em Psicoterapia e Psicodrama", en: "Psychotherapy and Psychodrama Supervision" },
    paragraphs: {
      pt: [
        "Desenvolva a sua prática clínica com supervisão especializada em psicoterapia e psicodrama, em formato individual ou de grupo. Um espaço seguro e colaborativo para reflexão clínica, aprofundamento técnico e crescimento profissional, com foco na qualidade da intervenção e no desenvolvimento do terapeuta.",
        "Modalidades disponíveis: individual e grupo, online e presencial",
        "Peça mais informações ou agende a sua sessão."
      ],
      en: [
        "Develop your clinical practice with specialized supervision in psychotherapy and psychodrama, available in individual or group formats. A safe and collaborative environment for clinical reflection, technical refinement, and professional growth, centering on intervention quality and therapist development.",
        "Available modules: individual and group, online and in-person",
        "Request more information or schedule your session."
      ]
    },
    highlights: {
      pt: ["Reflexão Clínica", "Individual ou Grupo", "Presencial e Online"],
      en: ["Clinical Reflection", "Individual or Group", "In-person & Online"]
    }
  }
};

export default function DetalheIntervencao() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const content = contentMap[id];
  
  // Deteta imediatamente o idioma que veio da URL
  const currentLang = searchParams.get('lang') as Language;
  const [lang, setLang] = useState<Language>(currentLang === 'en' ? 'en' : 'pt');

  useEffect(() => {
    window.scrollTo(0, 0);
    const urlLang = searchParams.get('lang') as Language;
    if (urlLang === 'pt' || urlLang === 'en') {
      setLang(urlLang);
    }
  }, [searchParams]);

  const handleLanguageChange = () => {
    const nextLang = lang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
    router.replace(`/intervencoes/${id}?lang=${nextLang}`, { scroll: false });
  };

  if (!content) return null;

  const staticTexts = {
    backBtn: { pt: "Voltar", en: "Back" },
    ctaTitle: { pt: "Ficou com dúvidas?", en: "Have any questions?" },
    whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
    email: { pt: "Email", en: "Email" }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#4A4A4A] font-sans selection:bg-[#d76d2d]/30">
      
      {/* --- NAVEGAÇÃO --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* ALTERADO: Força o redirecionamento com a query string certa apontando para a secção */}
          <button 
            onClick={() => router.push(`/?lang=${lang}#intervencoes`)} 
            className="group flex items-center gap-2 text-[#4f5e38] font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#d76d2d] transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {staticTexts.backBtn[lang]}
          </button>

          <button 
            onClick={handleLanguageChange}
            className="px-3 py-1 border border-[#E5E2D9] rounded-md text-[11px] font-bold text-[#4f5e38] hover:border-[#d76d2d] hover:text-[#d76d2d] transition-colors bg-white/50"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          
          {/* TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[#4f5e38] mb-6">
              {content.title[lang]}
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
            {content.highlights[lang].map((h, i) => (
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
                    alt={content.title[lang]} 
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* TEXTO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light text-left"
          >
            {content.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>

          {/* CARD DE CONTACTO */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-gradient-to-br from-[#4f5e38] to-[#6a7a50] rounded-[2.5rem] text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl font-serif mb-8 text-white">{staticTexts.ctaTitle[lang]}</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/351962858716" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#d76d2d] text-white rounded-full hover:bg-white hover:text-[#4f5e38] transition-all font-bold shadow-lg">
                <MessageCircle size={20} /> {staticTexts.whatsapp[lang]}
              </a>
              <a href="mailto:nunopirespsic@hotmail.com" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
                <Mail size={20} /> {staticTexts.email[lang]}
              </a>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />

    </div>
  );
}