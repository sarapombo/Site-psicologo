// Textos e imagens das páginas de cada intervenção (PT/EN)

export interface ContentItem {
  title: { pt: string; en: string };
  paragraphs: { pt: string[]; en: string[] };
  highlights: { pt: string[]; en: string[] };
  images?: string[];
}

export const contentMap: Record<string, ContentItem> = {
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
        "Através da representação de situações da vida quotidiana, memórias, sonhos ou fantasias, a pessoa é convidada a vivenciar externamente a sua experiência interna. Este processo favorece o desenvolvimento da espontaneidade, da criatividade e de novas respostas a situações vividas, permitindo uma compreensão mais profunda de si próprio e das suas relações."
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
    images: ["/psicodrama-1.jpeg", "/psicodrama-2.jpeg", "/psicodrama-3.jpeg"]
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
        "Supervisão especializada em psicoterapia individual e psicoterapia de grupo, incluindo psicodrama. Um espaço de reflexão clínica, aprendizagem e desenvolvimento profissional, orientado para o aprofundamento técnico, a qualidade da intervenção e o crescimento contínuo do terapeuta.",
        "Modalidades disponíveis: individual e grupo, online e presencial",
      ],
      en: [
        "Specialized supervision in individual and group psychotherapy, including psychodrama. A space for clinical reflection, learning, and professional development, aimed at technical deepening, intervention quality, and the continuous growth of the therapist.",
        "Available modules: individual and group, online and in-person",
      ]
    },
    highlights: {
      pt: ["Reflexão Clínica", "Individual ou Grupo", "Presencial e Online"],
      en: ["Clinical Reflection", "Individual or Group", "In-person & Online"]
    }
  }
};

export const interventionIds = Object.keys(contentMap);

// Descrição curta para o Google: primeiro parágrafo, cortado a ~155 caracteres
export function interventionDescription(item: ContentItem, lang: 'pt' | 'en'): string {
  const text = item.paragraphs[lang][0];
  if (text.length <= 155) return text;
  return text.slice(0, 155).replace(/\s+\S*$/, '') + '…';
}
