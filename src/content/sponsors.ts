import type {
  SponsorPhase,
  SponsorTournament,
  SponsorValue,
} from "@/types";

export const sponsorCopy = {
  eyebrow: "05 / Sponsors",
  title: "Marcas que empujan la escena.",
  description:
    "El Resz MX no solo aparece en stream. Construimos una relación de trabajo clara, medible y con respeto por la comunidad.",
  snkLabel: "Sponsor principal",
  snkName: "SNK",
  snkDescription:
    "Con el apoyo de SNK, la escena de fighting games en México tiene más espacio para competir, narrar y crecer. Nuestro compromiso es devolver ese apoyo con trabajo serio, transparente y disciplina en cada evento.",
  snkCta: "Hablemos de la siguiente edición",
  cta: "Hablemos de patrocinio",
  ctaNote:
    "También puedes solicitar el media kit y una propuesta a la medida desde el formulario.",
} as const;

export const sponsorValues: SponsorValue[] = [
  {
    title: "Presencia con contexto",
    description:
      "Menciones, overlays y contenido dedicado dentro de transmisiones con audiencia real de la escena FGC.",
    icon: "eye",
  },
  {
    title: "Activaciones que se juegan",
    description:
      "Retas, torneos y dinámicas que conectan a la marca con la comunidad, no solo con el chat.",
    icon: "handshake",
  },
  {
    title: "Trabajo transparente",
    description:
      "Objetivos, entregables y reportes por fase. Sabes qué se planeó, qué se ejecutó y qué resultó.",
    icon: "file",
  },
  {
    title: "Disciplina de equipo",
    description:
      "Puntualidad, comunicación y respeto por los tiempos del evento y de la marca.",
    icon: "shield",
  },
];

export const sponsorPhases: SponsorPhase[] = [
  {
    number: "01",
    title: "Brief y objetivos",
    description:
      "Escuchamos qué necesita la marca y definimos juntos el alcance del proyecto.",
  },
  {
    number: "02",
    title: "Planeación",
    description:
      "Propuesta, calendario, entregables y responsables por escrito antes de encender el stream.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Transmisión, narración y operación en vivo con seguimiento y comunicación constante.",
  },
  {
    number: "04",
    title: "Reporte",
    description:
      "Resultados, aprendizajes y evidencia del trabajo realizado para cerrar el ciclo.",
  },
];

/*
 * Historial editable. Agrega o quita torneos de SNK aquí.
 * Si tienes el VOD, pega la URL en `vodUrl`.
 */
export const snkTournaments: SponsorTournament[] = [
  {
    name: "Torneo SNK #01",
    game: "The King of Fighters XV",
    format: "Online",
    status: "Realizado",
    vodUrl: "",
  },
  {
    name: "Torneo SNK #02",
    game: "The King of Fighters XV",
    format: "Online",
    status: "Realizado",
    vodUrl: "",
  },
  {
    name: "Torneo SNK #03",
    game: "Fatal Fury: City of the Wolves",
    format: "Online",
    status: "Realizado",
    vodUrl: "",
  },
];
