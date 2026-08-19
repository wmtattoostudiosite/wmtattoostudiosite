export type FeedbackItem = {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
};

/** Depoimentos de exemplo — serão substituídos por avaliações reais. */
export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: "1",
    name: "João Carvalho",
    role: "Cliente · Realismo",
    text: "Ambiente impecável, muita atenção aos detalhes e um resultado que superou o que eu esperava. Me senti seguro do início ao fim.",
    avatar: "https://placehold.co/88x88/2c2e27/c6a15b?text=JC",
  },
  {
    id: "2",
    name: "Beatriz Lima",
    role: "Cliente · Piercing",
    text: "Fiz meu piercing com a Marúcia e o cuidado foi excelente — explicou cada etapa e todo o processo de cicatrização.",
    avatar: "https://placehold.co/88x88/2c2e27/c6a15b?text=BL",
  },
  {
    id: "3",
    name: "Rafael Souza",
    role: "Cliente · Fine Line",
    text: "O espaço é lindo e o atendimento do Wedson é muito profissional. Já é a terceira tatuagem que faço lá.",
    avatar: "https://placehold.co/88x88/2c2e27/c6a15b?text=RS",
  },
];
