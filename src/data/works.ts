export type WorkStyle =
  | "todos"
  | "realismo-pb"
  | "realismo-cor"
  | "neotradicional"
  | "fine-line"
  | "piercing"
  | "sobrancelhas"
  | "depilacao";

export type ProfessionalId = "wedson" | "marucia";

export type WorkItem = {
  style: WorkStyle;
  title: string;
  tag: string;
  img: string;
};

export const PROFESSIONALS: {
  id: ProfessionalId;
  initial: string;
  name: string;
  role: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
}[] = [
  {
    id: "wedson",
    initial: "W",
    name: "Wedson Rodrigues",
    role: "Realismo preto e cinza · Colorido · Neotradicional · Fine line",
    headline: "Cada traço,",
    headlineEmphasis: "uma assinatura",
    description:
      "O foco é realismo preto e cinza, realismo colorido,\nneotradicional e fine line.",
  },
  {
    id: "marucia",
    initial: "M",
    name: "Marúcia",
    role: "Piercing · Designer de sobrancelhas · Depilação",
    headline: "Cada detalhe,",
    headlineEmphasis: "um significado",
    description: "Piercing, designer de\nsobrancelhas e depilação.",
  },
];

export const STYLE_FILTERS: { id: WorkStyle; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "realismo-pb", label: "Realismo preto e cinza" },
  { id: "realismo-cor", label: "Realismo colorido" },
  { id: "neotradicional", label: "Neotradicional" },
  { id: "fine-line", label: "Fine line" },
];

export const MARUCIA_FILTERS: { id: WorkStyle; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "piercing", label: "Piercing" },
  { id: "sobrancelhas", label: "Designer de sobrancelhas" },
  { id: "depilacao", label: "Depilação" },
];

/** Portfólio de trabalhos. */
export const WORKS: Record<ProfessionalId, WorkItem[]> = {
  wedson: [
    {
      style: "realismo-pb",
      title: "Retrato religioso",
      tag: "Realismo preto e cinza",
      img: "/images/tattoos/realismo-pb-1.webp",
    },
    {
      style: "realismo-pb",
      title: "Lobo",
      tag: "Realismo preto e cinza",
      img: "/images/tattoos/realismo-pb-2.webp",
    },
    {
      style: "realismo-cor",
      title: "Retrato colorido",
      tag: "Realismo colorido",
      img: "/images/tattoos/realismo-col-1.webp",
    },
    {
      style: "realismo-cor",
      title: "Tigre",
      tag: "Realismo colorido",
      img: "/images/tattoos/realismo-col-2.webp",
    },
    {
      style: "neotradicional",
      title: "Retrato neotradicional",
      tag: "Neotradicional",
      img: "/images/tattoos/neotrad-1.webp",
    },
    {
      style: "neotradicional",
      title: "Caveira e serpente",
      tag: "Neotradicional",
      img: "/images/tattoos/neotrad-2.webp",
    },
    {
      style: "fine-line",
      title: "Floral",
      tag: "Fine line",
      img: "/images/tattoos/fineline-1.webp",
    },
    {
      style: "fine-line",
      title: "Serpente e peônias",
      tag: "Fine line",
      img: "/images/tattoos/fineline-2.webp",
    },
  ],
  marucia: [
    {
      style: "piercing",
      title: "Piercing de orelha",
      tag: "Piercing",
      img: "https://placehold.co/600x750/1c1b18/c6a15b?text=Piercing",
    },
    {
      style: "piercing",
      title: "Piercing nasal",
      tag: "Piercing",
      img: "https://placehold.co/600x750/24211a/c6a15b?text=Piercing",
    },
    {
      style: "piercing",
      title: "Curadoria de orelha",
      tag: "Piercing",
      img: "https://placehold.co/600x750/2c2e27/c6a15b?text=Piercing",
    },
    {
      style: "sobrancelhas",
      title: "Design de sobrancelhas",
      tag: "Designer de sobrancelhas",
      img: "https://placehold.co/600x750/1c1b18/c6a15b?text=Sobrancelhas",
    },
    {
      style: "sobrancelhas",
      title: "Sobrancelha alinhada",
      tag: "Designer de sobrancelhas",
      img: "https://placehold.co/600x750/24211a/c6a15b?text=Sobrancelhas",
    },
    {
      style: "depilacao",
      title: "Depilação",
      tag: "Depilação",
      img: "https://placehold.co/600x750/2c2e27/c6a15b?text=Depilacao",
    },
  ],
};
