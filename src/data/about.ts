export type AboutProfessionalId = "wedson" | "marucia";

export type AboutProfessional = {
  id: AboutProfessionalId;
  initial: string;
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  headline: string;
  headlineEmphasis: string;
  leadName?: string;
  paragraphs: string[];
  badges: { num: string; label: string }[];
};

export const ABOUT_PROFESSIONALS: AboutProfessional[] = [
  {
    id: "wedson",
    initial: "W",
    name: "Wedson Rodrigues",
    role: "Tatuador · realismo preto e cinza, realismo colorido, neotradicional e fine line.",
    photo: "/images/sala-wm-01.webp",
    photoAlt: "Sala de atendimento do Wedson no WM Tattoo Studio",
    headline: "Uma trajetória que começou aos",
    headlineEmphasis: "17 anos",
    paragraphs: [
      "Olá, sou Wedson Rodrigues, tatuador profissional há mais de 10 anos.",
      "Minha trajetória começou muito antes disso. Desde sempre o desenho fez parte da minha vida, mas com a tatuagem tenho contato desde os meus 17 anos. Nessa época não imaginava que a tatuagem seria minha profissão — levava como um hobby.",
      "Mas comecei a me aperfeiçoar através de workshops, cursos e observando meus trabalhos, buscando sempre evoluir — e assim abri meu primeiro espaço.",
      "Hoje, após uma trajetória de evolução, estou preparado para oferecer um atendimento diferenciado e um trabalho com excelência em realismo preto e cinza, realismo colorido, neotradicional e fine line.",
      "Ofereço aos meus clientes um estúdio preparado para atender todos os públicos, seguindo um padrão de biossegurança, qualidade e conforto, com um atendimento personalizado que visa atender a necessidade de cada um antes, durante e após o procedimento realizado.",
    ],
    badges: [
      { num: "17", label: "Anos, início na tatuagem" },
      { num: "10+", label: "Anos de profissão" },
      { num: "100%", label: "Biossegurança" },
    ],
  },
  {
    id: "marucia",
    initial: "M",
    name: "Marúcia",
    role: "Piercing, designer de sobrancelhas e depilação · biossegurança e atendimento acolhedor.",
    photo: "/images/sobre-marucia.webp",
    photoAlt: "Atendimento de piercing da Marúcia no WM Tattoo Studio",
    headline: "Atendimento seguro, acolhedor e cheio de",
    headlineEmphasis: "significado",
    paragraphs: [
      "Sou Marúcia, profissional apaixonada pelo que faz e dedicada a oferecer um atendimento seguro, acolhedor e cheio de significado.",
      "Atuo há mais de 7 anos com piercing, comprometida com a biossegurança, estudo contínuo e aperfeiçoamento do meu trabalho. Acredito que cada pessoa que confia em mim merece uma experiência positiva da conversa inicial ao resultado final.",
      "O designer de sobrancelhas e depilação surgiu como uma extensão do meu trabalho, que através deles encontrei uma forma de valorizar a beleza e autoestima de cada cliente.",
      "Ao longo da minha caminhada, aprendi que cada atendimento é único e que por trás de cada furo, depilação ou sobrancelha há uma história, uma motivação. Por isso, levo o respeito como princípio que guia cada etapa do meu trabalho.",
      "Sendo mulher, mãe e alguém que entende que cada pessoa que me procura quer valorizar o seu EU. Tudo o que faço é com dedicação, amor e o desejo de que cada pessoa saia daqui se sentindo mais confiante, bonita e leve.",
    ],
    badges: [
      { num: "7+", label: "Anos com piercing" },
      { num: "100%", label: "Biossegurança" },
      { num: "+", label: "Sobrancelhas e depilação" },
    ],
  },
];
