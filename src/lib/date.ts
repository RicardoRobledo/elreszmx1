import type { WeeklyEvent } from "@/types";

export const CDMX_TIMEZONE = "America/Mexico_City";

/*
 * México eliminó el horario de verano en 2022.
 * La CDMX se mantiene en UTC-6 todo el año.
 */
const CDMX_UTC_OFFSET_MINUTES = -360;

interface CdmxParts {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  weekday: number;
}

function getCdmxParts(date: Date): CdmxParts {
  const shifted = new Date(
    date.getTime() + CDMX_UTC_OFFSET_MINUTES * 60 * 1000,
  );

  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth(),
    day: shifted.getUTCDate(),
    hours: shifted.getUTCHours(),
    minutes: shifted.getUTCMinutes(),
    seconds: shifted.getUTCSeconds(),
    weekday: shifted.getUTCDay(),
  };
}

export function getNextOccurrence(
  event: WeeklyEvent,
  from: Date = new Date(),
): Date {
  const now = getCdmxParts(from);
  const [hour = 0, minute = 0] = event.time.split(":").map(Number);

  let daysAhead = (event.dayOfWeek - now.weekday + 7) % 7;
  const nowInMinutes = now.hours * 60 + now.minutes + now.seconds / 60;
  const startInMinutes = hour * 60 + minute;

  if (daysAhead === 0 && nowInMinutes >= startInMinutes) {
    daysAhead = 7;
  }

  const targetWallClock = Date.UTC(
    now.year,
    now.month,
    now.day + daysAhead,
    hour,
    minute,
  );

  return new Date(
    targetWallClock - CDMX_UTC_OFFSET_MINUTES * 60 * 1000,
  );
}

export function findNextEvent(
  events: WeeklyEvent[],
  from: Date = new Date(),
): { event: WeeklyEvent; date: Date } | null {
  if (events.length === 0) return null;

  return events
    .map((event) => ({
      event,
      date: getNextOccurrence(event, from),
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
}

export function formatEventDate(date: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    timeZone: CDMX_TIMEZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function formatEventShortDate(date: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    timeZone: CDMX_TIMEZONE,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

export function getEventEnd(date: Date, durationHours = 2): Date {
  return new Date(date.getTime() + durationHours * 60 * 60 * 1000);
}
