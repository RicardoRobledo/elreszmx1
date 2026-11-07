import type { UpcomingProject } from "@/types";

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "temporada-2027",
    title: "Temporada 2027",
    status: "En planeación",
    period: "Q1 2027",
    description:
      "Un nuevo ciclo de torneos, contenido y espacios para que más jugadores entren a la escena.",
    progress: 30,
  },
  {
    id: "snk-especial",
    title: "SNK Fight Night — Especial",
    status: "En producción",
    period: "Próximamente",
    description:
      "Una edición especial con más jugadores, invitados y cobertura desde la mesa de comentarios.",
    progress: 65,
  },
  {
    id: "merch-drop-001",
    title: "Merch Drop 001",
    status: "En diseño",
    period: "Próximamente",
    description:
      "Conceptos de ropa y accesorios para la comunidad. Sin venta todavía, pero con muchas ganas.",
    progress: 45,
  },
  {
    id: "nuevo-set",
    title: "Nuevo set de stream",
    status: "En preparación",
    period: "2027",
    description:
      "Mejoras de audio, cámara y overlays para que cada transmisión se sienta más cerca de una final.",
    progress: 55,
  },
];

export const upcomingCopy = {
  eyebrow: "07 / Lo que viene",
  title: "El siguiente round ya está en camino.",
  description:
    "Proyectos, torneos y experimentos que estamos preparando. Esto es lo que sigue para El Resz MX.",
  cta: "Construyamos lo que sigue",
} as const;
