export type StudioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const HERO_IMAGE = {
  src: "/images/studio/1.webp",
  alt: "Sala de atendimento do WM Tattoo Studio, com cadeira profissional, logo dourado WM e iluminação em trilho",
  width: 1600,
  height: 2133,
} as const;

/** Fotos do espaço em proporção nativa — sem crop. */
export const STUDIO_IMAGES: StudioImage[] = [
  {
    src: "/images/studio/1.webp",
    alt: "Sala de atendimento com cadeira preta, logo WM dourado e piso em mármore",
    width: 1600,
    height: 2133,
  },
  {
    src: "/images/studio/2.webp",
    alt: "Pé-direito duplo com sofá chesterfield, escadaria e lustre de cristal",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/3.webp",
    alt: "Vitrine iluminada com joias para piercing",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/4.webp",
    alt: "Vista do mezanino para a recepção, com escada de mármore, sofás chesterfield e máscaras na parede",
    width: 1200,
    height: 2133,
  },
  {
    src: "/images/studio/5.webp",
    alt: "Sala de atendimento com maca preta, ring light e bancada de biossegurança",
    width: 1200,
    height: 2133,
  },
  {
    src: "/images/studio/6.webp",
    alt: "Espelho dourado refletindo a sala de atendimento, a maca e o logo MS na parede",
    width: 1200,
    height: 2133,
  },
  {
    src: "/images/studio/7.webp",
    alt: "Vitrine com máquinas de tatuagem e bustos clássicos",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/8.webp",
    alt: "Máscaras e esculturas decorativas na parede branca",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/9.webp",
    alt: "Bustos Tattoo Rock com detalhes em dourado sobre mesa de vidro",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/10.webp",
    alt: "Recepção com sofá de couro, vitrine iluminada e máscaras de samurai",
    width: 853,
    height: 1280,
  },
  {
    src: "/images/studio/11.webp",
    alt: "Logo MS em dourado na parede roxa, com a frase Estilo com segurança",
    width: 1200,
    height: 2133,
  },
  {
    src: "/images/studio/12.webp",
    alt: "Corredor com iluminação rosa, esculturas na parede e aparador de vidro",
    width: 1200,
    height: 2133,
  },
];
