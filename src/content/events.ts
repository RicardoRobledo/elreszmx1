import type { WeeklyEvent } from "@/types";

/*
 * Horarios de ejemplo en CDMX (UTC-6).
 * dayOfWeek: 0 = domingo, 1 = lunes, ... 6 = sábado.
 * Cambia los eventos, juegos y horarios reales aquí.
 */
export const weeklyEvents: WeeklyEvent[] = [
  {
    id: "fgc-weekly",
    title: "FGC Weekly",
    game: "Street Fighter 6",
    dayOfWeek: 3,
    dayLabel: "Miércoles",
    time: "20:00",
    timezone: "America/Mexico_City",
    format: "Online · Doble eliminación",
    platform: "YouTube / Twitch",
    description:
      "Ranked abierto para la comunidad. Puntos, retas y buen rollo para cerrar el día.",
    registrationUrl: "",
  },
  {
    id: "snk-fight-night",
    title: "SNK Fight Night",
    game: "The King of Fighters XV",
    dayOfWeek: 5,
    dayLabel: "Viernes",
    time: "21:00",
    timezone: "America/Mexico_City",
    format: "Online · SNK",
    platform: "YouTube / Twitch",
    description:
      "La noche de SNK: KOF XV, bracket abierto y narración en vivo desde la mesa de comentarios.",
    registrationUrl: "",
  },
  {
    id: "domingo-de-retas",
    title: "Domingo de Retas",
    game: "Tekken 8",
    dayOfWeek: 0,
    dayLabel: "Domingo",
    time: "18:00",
    timezone: "America/Mexico_City",
    format: "Online · Casual",
    platform: "YouTube / Twitch",
    description:
      "Retas, coaching y comunidad. El espacio para aprender sin presión y conocer a otros jugadores.",
    registrationUrl: "",
  },
];

export const eventsCopy = {
  eyebrow: "06 / Eventos online",
  title: "Cada semana abrimos la sala.",
  description:
    "Estos son nuestros espacios para competir desde cualquier lugar. Todos los horarios están en CDMX (UTC-6).",
  note: "Los enlaces de inscripción y los horarios se actualizan desde src/content/events.ts.",
  calendarNote: "No necesitas estar en México para jugar. La escena es online y abierta a LATAM.",
} as const;
