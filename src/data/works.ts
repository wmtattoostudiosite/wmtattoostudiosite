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
      style: "realismo-pb",
      title: "Leão",
      tag: "Realismo preto e cinza",
      img: "/images/tattoos/realismo-pb-3.webp",
    },
    {
      style: "realismo-pb",
      title: "Lobos",
      tag: "Realismo preto e cinza",
      img: "/images/tattoos/realismo-pb-4.webp",
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
      style: "realismo-cor",
      title: "Retrato geométrico",
      tag: "Realismo colorido",
      img: "/images/tattoos/realismo-col-3.webp",
    },
    {
      style: "realismo-cor",
      title: "Vampiro",
      tag: "Realismo colorido",
      img: "/images/tattoos/realismo-col-4.webp",
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
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-1.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-2.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-3.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-4.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-5.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-6.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-7.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-8.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-9.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-10.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-11.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-12.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-13.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-14.webp" },
    { style: "piercing", title: "Piercing", tag: "Piercing", img: "/images/servicos/piercing-15.webp" },
    {
      style: "sobrancelhas",
      title: "Design de sobrancelhas",
      tag: "Designer de sobrancelhas",
      img: "/images/servicos/sobrancelha-1.webp",
    },
    {
      style: "sobrancelhas",
      title: "Design de sobrancelhas",
      tag: "Designer de sobrancelhas",
      img: "/images/servicos/sobrancelha-2.webp",
    },
    { style: "depilacao", title: "Depilação", tag: "Depilação", img: "/images/servicos/depilacao-1.webp" },
    { style: "depilacao", title: "Depilação", tag: "Depilação", img: "/images/servicos/depilacao-2.webp" },
    { style: "depilacao", title: "Depilação", tag: "Depilação", img: "/images/servicos/depilacao-3.webp" },
    { style: "depilacao", title: "Depilação", tag: "Depilação", img: "/images/servicos/depilacao-4.webp" },
    { style: "depilacao", title: "Depilação", tag: "Depilação", img: "/images/servicos/depilacao-5.webp" },
  ],
};
