import type { TeamMember } from "@/types";

/*
 * Las imágenes viven en /public/images/team.
 * Reemplaza resz.png, chavorruco.png o afa2b.png si cambian las fotos oficiales.
 */
export const team: TeamMember[] = [
  {
    id: "chavorruco",
    name: "Chavorruco",
    role: "Caster & comentarista",
    tags: ["Caster", "Comentarista", "FGC"],
    bio: "Chavorruco pone la voz y el análisis en cada set. Su experiencia en la mesa de comentarios ayuda a que la comunidad entienda y disfrute cada pelea.",
    image: "/images/team/chavorruco.png",
    imageAlt: "Chavorruco, caster y comentarista de El Resz MX",
    initials: "C",
  },
  {
    id: "resz",
    name: "Resz",
    role: "Fundador & Community Lead",
    tags: ["Caster", "YouTuber", "Streamer", "Gamer FGC"],
    bio: "Fundador y líder de El Resz MX, la comunidad de juegos de pelea que une a jugadores, casters y organizadores en México. Desde la mesa de comentarios hasta el stream, Resz vive cada set como si fuera la gran final.",
    image: "/images/team/resz.png",
    imageAlt:
      "Resz, fundador y líder de El Resz MX, en su carta de presentación como caster",
    initials: "R",
    featured: true,
  },
  {
    id: "afa2b",
    name: "Afa2b",
    role: "Caster & comentarista",
    tags: ["Caster", "Comentarista", "FGC"],
    bio: "Afa2b aporta su conocimiento de la escena y su energía al micrófono. Su estilo cercano hace que cada enfrentamiento se sienta como una final para la comunidad.",
    image: "/images/team/afa2b.png",
    imageAlt: "Afa2b, caster y comentarista de El Resz MX",
    initials: "AF",
  },
];

export const teamCopy = {
  eyebrow: "02 / Equipo",
  title: "Detrás del bracket, del audio y de la narración.",
  description:
    "No somos solo una cuenta. Somos personas que preparan cada torneo, cuidan cada detalle de la transmisión y construyen un espacio para la comunidad.",
  cta: "¿Quieres colaborar con el equipo?",
} as const;
