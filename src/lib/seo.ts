import { faqs } from "@/content/faq";
import { services } from "@/content/services";
import { site, socials } from "@/content/site";
import { snkTournaments } from "@/content/sponsors";
import { weeklyEvents } from "@/content/events";

type JsonLd = Record<string, unknown>;

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

const sameAs = socials
  .filter((social) => social.href.startsWith("http"))
  .map((social) => social.href);

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const organization: JsonLd = {
  "@type": "Organization",
  "@id": organizationId,
  name: site.name,
  alternateName: site.alternateName,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/brand/logo.png`,
  },
  image: `${site.url}/og-image.jpg`,
  description: site.description,
  email: site.email,
  slogan: "Cada set se vive como una final.",
  knowsAbout: [
    "Fighting games",
    "FGC",
    "Torneos competitivos",
    "Transmisiones de esports",
    "Narración y casting",
    "Producción de stream",
    "Bracket runner",
  ],
  founder: {
    "@type": "Person",
    name: "Resz",
    jobTitle: "Fundador y Community Lead",
    description:
      "Caster, YouTuber, streamer y líder de El Resz MX, comunidad de fighting games en México.",
  },
  member: [
    {
      "@type": "Person",
      name: "Chavorruco",
      jobTitle: "Caster y comentarista",
    },
    {
      "@type": "Person",
      name: "Afa2b",
      jobTitle: "Caster y comentarista",
    },
  ],
  areaServed: {
    "@type": "Place",
    name: site.areaServed,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer support",
    availableLanguage: ["Spanish"],
  },
  sponsor: {
    "@type": "Organization",
    name: "SNK",
  },
  sameAs,
};

const website: JsonLd = {
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  alternateName: site.alternateName,
  description: site.description,
  inLanguage: site.language,
  publisher: {
    "@id": organizationId,
  },
};

const serviceCatalog: JsonLd = {
  "@type": "Service",
  "@id": `${site.url}/#services`,
  name: "Servicios de operación y producción para torneos de fighting games",
  description:
    "Bracket runner, narración y casting, stream master y paquete completo para eventos de la escena FGC en México y Latinoamérica.",
  provider: {
    "@id": organizationId,
  },
  areaServed: {
    "@type": "Place",
    name: site.areaServed,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios El Resz MX",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.kicker,
      },
    })),
  },
};

const faqSchema: JsonLd = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const eventSeries: JsonLd[] = weeklyEvents.map((event) => ({
  "@type": "EventSeries",
  "@id": `${site.url}/#event-${event.id}`,
  name: `${event.title} — ${event.game}`,
  description: event.description,
  url: `${site.url}/#eventos`,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  inLanguage: site.language,
  location: {
    "@type": "VirtualLocation",
    url: site.url,
  },
  organizer: {
    "@id": organizationId,
  },
  about: {
    "@type": "VideoGame",
    name: event.game,
  },
  eventSchedule: {
    "@type": "Schedule",
    byDay: dayNames[event.dayOfWeek],
    startTime: event.time,
    repeatFrequency: "P1W",
    scheduleTimezone: event.timezone,
  },
}));

const sponsorHistory: JsonLd = {
  "@type": "ItemList",
  "@id": `${site.url}/#snk-tournaments`,
  name: "Torneos SNK realizados por El Resz MX",
  itemListElement: snkTournaments.map((tournament, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SportsEvent",
      name: tournament.name,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      about: {
        "@type": "VideoGame",
        name: tournament.game,
      },
      organizer: {
        "@id": organizationId,
      },
      sponsor: {
        "@type": "Organization",
        name: "SNK",
      },
    },
  })),
};

export const structuredData: JsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    serviceCatalog,
    faqSchema,
    sponsorHistory,
    ...eventSeries,
  ],
};
