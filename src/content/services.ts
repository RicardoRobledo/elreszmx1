import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "bracket-runner",
    number: "01",
    title: "Bracket runner",
    kicker: "Operación de torneos",
    description:
      "Llevamos el bracket, el check-in y la comunicación con jugadores para que el evento avance sin fricción.",
    bullets: [
      "Brackets en start.gg",
      "Check-in y validación de reglas",
      "Coordinación de jugadores y horarios",
      "Reporte de resultados",
    ],
    idealFor:
      "Organizadores y marcas que ya tienen el torneo y necesitan una operación confiable.",
    icon: "bracket",
  },
  {
    id: "narracion",
    number: "02",
    title: "Narración & casting",
    kicker: "La voz del set",
    description:
      "Narración en español con contexto, energía y análisis para que cada pelea se entienda y se disfrute.",
    bullets: [
      "Narración en vivo",
      "Análisis y contexto de la escena",
      "Conducción de segmentos",
      "Co-streams y contenido con invitados",
    ],
    idealFor:
      "Eventos que quieren una transmisión con identidad y una historia que seguir.",
    icon: "mic",
  },
  {
    id: "stream-master",
    number: "03",
    title: "Stream master",
    kicker: "Producción audiovisual",
    description:
      "Escenas, audio, overlays y transmisión estable. Nos encargamos de que el show se vea y suene profesional.",
    bullets: [
      "Configuración de OBS y escenas",
      "Overlays y branding del evento",
      "Audio y monitoreo en vivo",
      "Clips y VOD para después del stream",
    ],
    idealFor:
      "Ligas y eventos que necesitan producción completa sin sumar diez proveedores.",
    icon: "stream",
  },
  {
    id: "paquete-completo",
    number: "04",
    title: "Paquete completo",
    kicker: "Todo el equipo, una sola mesa",
    description:
      "Bracket, narración y stream trabajando juntos. Una experiencia de principio a fin, con un solo equipo.",
    bullets: [
      "Operación + narración + producción",
      "Coordinación previa con organizadores",
      "Cobertura completa del evento",
      "Reporte y aprendizajes post-evento",
    ],
    idealFor:
      "Torneos que quieren delegar todo y enfocarse en jugar y en su comunidad.",
    icon: "package",
    featured: true,
  },
];

export const servicesCopy = {
  eyebrow: "04 / Servicios",
  title: "Lo que hacemos por tu torneo.",
  description:
    "Puedes contratar una pieza o el paquete completo. Nos adaptamos al tamaño de tu evento y al nivel de producción que necesitas.",
  note: "Todos los servicios se pueden combinar. Si no sabes por dónde empezar, escríbenos y armamos una propuesta.",
} as const;
