import type {
  ContactMotiveOption,
  HeroCopy,
  NavItem,
  SocialLink,
  Stat,
} from "@/types";

export const site = {
  name: "El Resz MX",
  alternateName: "EL RESZ MX",
  tagline: "FGC community",
  url: "https://elreszmx.com",
  email: "reszmx1@gmail.com",
  location: "México",
  areaServed: "México y Latinoamérica",
  language: "es-MX",
  description:
    "El Resz MX es una comunidad y proyecto de contenido de fighting games en México. Organizamos torneos, transmitimos eventos y ofrecemos servicios de bracket runner, narración y producción de stream para la escena FGC de México y Latinoamérica.",
  shortDescription:
    "Comunidad de fighting games en México. Torneos, transmisiones y narración para la escena FGC de Latinoamérica.",
  responseTime: "24–48 horas",
  availability: "Proyectos online en México y LATAM",
  copyrightYear: 2026,
} as const;

export const navItems: NavItem[] = [
  { label: "Acerca de", href: "#acerca" },
  { label: "Equipo", href: "#equipo" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Eventos", href: "#eventos" },
  { label: "Próximos", href: "#proximos" },
  { label: "Merch", href: "#merch" },
  { label: "Contacto", href: "#contacto" },
];

/*
 * Reemplaza estos enlaces por los perfiles reales de El Resz MX.
 * También actualiza `sameAs` en el JSON-LD automáticamente.
 */
export const socials: SocialLink[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ElReszMX",
    icon: "youtube",
    handle: "@ElReszMX",
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/elreszmx",
    icon: "twitch",
    handle: "elreszmx",
  },
  {
    label: "X",
    href: "https://x.com/elreszmx",
    icon: "x",
    handle: "@elreszmx",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/elreszmx",
    icon: "instagram",
    handle: "@elreszmx",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@elreszmx",
    icon: "tiktok",
    handle: "@elreszmx",
  },
  {
    label: "Discord",
    href: "https://discord.gg/elreszmx",
    icon: "discord",
    handle: "Comunidad",
  },
];

export const stats: Stat[] = [
  { value: "6+", label: "años creando contenido" },
  { value: "1+", label: "año dentro de la escena FGC" },
  { value: "MX", label: "base con alcance LATAM" },
  { value: "SNK", label: "sponsor principal" },
];

export const hero: HeroCopy = {
  eyebrow: "El Resz MX · FGC community",
  titleTop: "Cada set",
  titleMiddle: "se vive como",
  titleAccent: "una final",
  description:
    "Somos una comunidad de fighting games con base en México. Organizamos torneos, transmitimos eventos y narramos la escena para que cada pelea tenga el lugar que merece.",
  primaryCta: "Ver nuestro trabajo",
  secondaryCta: "Hablemos de tu evento",
};

export const contactMotives: ContactMotiveOption[] = [
  { value: "patrocinio", label: "Patrocinio / marca" },
  { value: "torneo", label: "Organización de torneo" },
  { value: "servicios", label: "Servicios de producción" },
  { value: "colaboracion", label: "Colaboración / equipo" },
  { value: "merch", label: "Merch / Drop 001" },
  { value: "otro", label: "Otro motivo" },
];

export const marqueeItems = [
  "El Resz MX",
  "FGC community",
  "Torneos",
  "Streams",
  "Narración",
  "México · LATAM",
];
