export type FeedbackItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Prints reais de depoimentos de clientes. */
export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: "1",
    src: "/images/depoimentos/depoimento-1.webp",
    alt: "Depoimento de cliente agradecendo o atendimento e o piercing",
    width: 865,
    height: 1371,
  },
  {
    id: "2",
    src: "/images/depoimentos/depoimento-2.webp",
    alt: "Continuação do depoimento, elogiando o carinho e o trabalho da profissional",
    width: 865,
    height: 1371,
  },
];
