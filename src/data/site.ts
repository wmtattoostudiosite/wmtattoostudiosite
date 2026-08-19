import {
  InstagramIcon,
  LocationIcon,
  WhatsAppIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

const WHATSAPP_NUMBER = "5517992176906";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de mais informações.";

/** Informações de contato do estúdio. */
export const CONTACT = {
  name: "WM Tattoo Studio",
  city: "Barretos · SP",
  tagline: "Mais que tinta é vida na pele",
  whatsappDisplay: "(17) 99217-6906",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  address: "Rua NBT16 Mario Caiel, 365 - Nova Barretos 3, Barretos/SP",
  hours: "A confirmar com o estúdio",
  instagramWedson: "@wedson_wmtattoostudio",
  instagramWedsonUrl: "https://www.instagram.com/wedson_wmtattoostudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagramMarucia: "@marucia.piercer",
  instagramMaruciaUrl: "https://www.instagram.com/marucia.piercer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  mapsQuery: "Rua NBT16 Mario Caiel 365 Nova Barretos 3 Barretos SP",
  mapsUrl:
    "https://maps.app.goo.gl/YVWFL2BXeBZFh8cr8",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2143800024996!2d-48.53715570000001!3d-20.579300999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb91c1f7942abf%3A0x3144662f16a06b92!2sWM%20St%C3%BAdio%20Tattoo%20e%20Piercing!5e0!3m2!1spt-BR!2sbr!4v1787092161353!5m2!1spt-BR!2sbr",
} as const;

/** Itens de navegação e suas respectivas seções. */
export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
};

/** Redes sociais e localização. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "WhatsApp", href: CONTACT.whatsappUrl, icon: WhatsAppIcon },
  { label: "Instagram", href: CONTACT.instagramWedsonUrl, icon: InstagramIcon },
  { label: "Localização", href: CONTACT.mapsUrl, icon: LocationIcon },
];

export const HERO_SERVICES = [
  "Realismo preto e cinza",
  "Realismo colorido",
  "Neotradicional",
  "Fine line",
] as const;

export const HERO_SERVICES_MARUCIA = [
  "Piercing",
  "Designer de sobrancelhas",
  "Depilação",
] as const;
