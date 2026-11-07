import { useMemo } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Gamepad2,
  Radio,
} from "lucide-react";
import { socials } from "@/content/site";
import { eventsCopy, weeklyEvents } from "@/content/events";
import { formatEventDate, findNextEvent } from "@/lib/date";
import { requestContact } from "@/lib/contact";
import { useCountdown } from "@/hooks/useCountdown";
import { useMounted } from "@/hooks/useMounted";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

function pad(value: number | null): string {
  if (value === null) return "--";
  return String(value).padStart(2, "0");
}

export function Events() {
  const mounted = useMounted();

  const next = useMemo(
    () => (mounted ? findNextEvent(weeklyEvents) : null),
    [mounted],
  );

  const countdown = useCountdown(next?.date ?? null);

  return (
    <section id="eventos" className="relative overflow-hidden bg-smoke py-20 md:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading
            eyebrow={eventsCopy.eyebrow}
            title={eventsCopy.title}
            description={eventsCopy.description}
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="noise relative overflow-hidden border-2 border-ink bg-ink p-6 text-white shadow-hard md:p-9">
            <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag tone="brand" dot>
                    Próximo evento
                  </Tag>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {next ? formatEventDate(next.date) : "Sincronizando calendario"}
                  </span>
                </div>

                <h3 className="display mt-6 text-[clamp(3rem,7vw,6.5rem)] leading-[0.92]">
                  {next?.event.title ?? "Cada semana hay sala."}
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    <Gamepad2 className="h-4 w-4 text-brand" aria-hidden="true" />
                    {next?.event.game ?? "Fighting games"}
                  </p>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                    {next ? `${next.event.time} CDMX` : "20:00 CDMX"}
                  </p>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    <Radio className="h-4 w-4 text-brand" aria-hidden="true" />
                    {next?.event.platform ?? "YouTube / Twitch"}
                  </p>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55">
                  {next?.event.description ?? eventsCopy.calendarNote}
                </p>

                <a
                  href="#contacto"
                  onClick={(event) => {
                    event.preventDefault();
                    requestContact("torneo", next?.event.title ?? "Evento online");
                  }}
                  className="mt-7 inline-flex items-center gap-2 border-2 border-white bg-white px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  Pedir informes
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div>
                <p className="eyebrow mb-4 text-white/35">Empieza en</p>
                <div
                  className="grid grid-cols-4 gap-2"
                  aria-label={
                    next
                      ? `Cuenta regresiva para ${next.event.title}`
                      : "Cuenta regresiva"
                  }
                >
                  {[
                    { label: "Días", value: countdown?.days ?? null },
                    { label: "Horas", value: countdown?.hours ?? null },
                    { label: "Min", value: countdown?.minutes ?? null },
                    { label: "Seg", value: countdown?.seconds ?? null },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="border border-white/15 bg-white/[0.04] px-2 py-3 text-center"
                    >
                      <p className="display text-3xl leading-none md:text-4xl">
                        {pad(unit.value)}
                      </p>
                      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                        {unit.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-white/30">
                  Horarios en CDMX · UTC-6
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {weeklyEvents.map((event, index) => (
            <Reveal key={event.id} delay={index * 70}>
              <article className="group flex h-full flex-col border-2 border-ink bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-hard md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-ink px-3 py-2 text-white">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                      {event.dayLabel}
                    </p>
                    <p className="display mt-1 text-xl leading-none">
                      {event.time}
                    </p>
                  </div>
                  <CalendarDays className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>

                <h3 className="display mt-6 text-3xl">{event.title}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
                  {event.game}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {event.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
                    {event.format}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
                    {event.platform}
                  </p>
                </div>

                <a
                  href={event.registrationUrl || "#contacto"}
                  target={event.registrationUrl ? "_blank" : undefined}
                  rel={
                    event.registrationUrl ? "noreferrer noopener" : undefined
                  }
                  onClick={
                    event.registrationUrl
                      ? undefined
                      : (clickEvent) => {
                          clickEvent.preventDefault();
                          requestContact("torneo", event.title);
                        }
                  }
                  className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-brand"
                >
                  {event.registrationUrl ? "Inscripciones" : "Pedir informes"}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-5 border-2 border-ink bg-paper p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <p className="max-w-2xl text-sm leading-relaxed text-ink/60">
              {eventsCopy.calendarNote}
            </p>
            <SocialLinks links={socials.slice(0, 3)} showLabels className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
