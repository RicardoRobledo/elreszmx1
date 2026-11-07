import type { WorkItem } from "@/types";

/*
 * Pega el ID de la playlist de YouTube en `youtubePlaylistId`.
 * Ejemplo: si la URL es https://www.youtube.com/playlist?list=PL123,
 * el ID es PL123.
 *
 * Si se deja vacío, la tarjeta muestra un estado "próximamente"
 * y no carga ningún iframe.
 */
export const workItems: WorkItem[] = [
  {
    id: "snk-fight-night",
    title: "SNK Fight Night",
    category: "torneos",
    description:
      "Torneos online de SNK con operación de bracket, narración y transmisión completa.",
    image: "/images/work/torneos.webp",
    imageAlt: "Torneo de fighting games con público de la comunidad FGC",
    tags: ["SNK", "Brackets", "Narración"],
    youtubePlaylistId: "",
  },
  {
    id: "fgc-weekly",
    title: "FGC Weekly",
    category: "comunidad",
    description:
      "Noches semanales para jugar, aprender y conectar con la escena desde cualquier región.",
    image: "/images/work/comunidad.webp",
    imageAlt: "Comunidad FGC reunida en un evento de fighting games",
    tags: ["Comunidad", "Online", "LATAM"],
    youtubePlaylistId: "",
  },
  {
    id: "co-streams",
    title: "Co-streams & eventos",
    category: "costreams",
    description:
      "Cobertura de eventos de la escena con nuestra mirada, contexto y narración en español.",
    image: "/images/work/costreams.webp",
    imageAlt: "Crowd de un evento competitivo de fighting games",
    tags: ["Co-stream", "Eventos", "Análisis"],
    youtubePlaylistId: "",
  },
  {
    id: "el-resz-en-vivo",
    title: "El Resz en vivo",
    category: "comunidad",
    description:
      "Transmisiones especiales, retas y contenido de comunidad fuera del bracket.",
    image: "/images/work/envivo.webp",
    imageAlt: "Transmisión de la comunidad El Resz MX",
    tags: ["Stream", "Retas", "Comunidad"],
    youtubePlaylistId: "",
  },
];

export const workCopy = {
  eyebrow: "03 / Nuestro trabajo",
  title: "Lo que hemos construido set por set.",
  description:
    "Torneos, co-streams y noches de comunidad. Aquí vive el archivo de El Resz MX; actualizamos la selección después de cada evento.",
  note: "Las playlists se conectan manualmente desde src/content/work.ts.",
} as const;
