import {
  ArrowUpRight,
  Eye,
  FileText,
  Handshake,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import {
  snkTournaments,
  sponsorCopy,
  sponsorPhases,
  sponsorValues,
} from "@/content/sponsors";
import type { SponsorValue } from "@/types";
import { cn } from "@/lib/cn";
import { requestContact } from "@/lib/contact";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const valueIcons: Record<SponsorValue["icon"], LucideIcon> = {
  eye: Eye,
  handshake: Handshake,
  file: FileText,
  shield: ShieldCheck,
};

export function Sponsors() {
  return (
    <section id="sponsors" className="noise relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="container-edge relative">
        <Reveal>
          <SectionHeading
            eyebrow={sponsorCopy.eyebrow}
            title={sponsorCopy.title}
            description={sponsorCopy.description}
            tone="dark"
          />
        </Reveal>

        <Reveal className="mt-12">
          <article className="grid overflow-hidden border-2 border-white/15 bg-white/[0.035] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border-b-2 border-white/15 bg-brand p-7 md:p-9 lg:border-b-0 lg:border-r-2">
              <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
              <div className="relative">
                <Tag tone="dark" className="border-black bg-black">
                  {sponsorCopy.snkLabel}
                </Tag>
                <p className="display mt-6 text-[clamp(5rem,12vw,9rem)] leading-[0.75] text-white">
                  {sponsorCopy.snkName}
                </p>
              </div>
              <p className="relative mt-8 max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-white/70">
                Con el apoyo de SNK · Fighting games · LATAM
              </p>
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <p className="eyebrow text-white/40">Alianza</p>
                <h3 className="display mt-4 text-4xl md:text-5xl">
                  Una marca que cree en la escena.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                  {sponsorCopy.snkDescription}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contacto"
                  onClick={(event) => {
                    event.preventDefault();
                    requestContact("patrocinio", "SNK");
                  }}
                  className="inline-flex items-center gap-2 border-2 border-white bg-white px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {sponsorCopy.snkCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                  Sponsor principal
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sponsorValues.map((value, index) => {
            const Icon = valueIcons[value.icon];

            return (
              <Reveal key={value.title} delay={index * 60}>
                <article className="group h-full border border-white/15 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-brand hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/15 text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="display mt-7 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="eyebrow text-white/40">Cómo trabajamos</p>
              <h3 className="display mt-4 text-4xl md:text-5xl">
                Transparentes en cada fase.
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
                No vendemos humo. Definimos el alcance, documentamos el trabajo
                y entregamos un reporte al cerrar. Así sabes exactamente qué
                pasó con tu inversión.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol className="grid gap-0 border-l-2 border-brand/40 pl-6 sm:grid-cols-2 sm:gap-x-8 sm:border-l-0 sm:pl-0">
              {sponsorPhases.map((phase) => (
                <li
                  key={phase.number}
                  className="relative border-b border-white/10 py-5 sm:border-t sm:border-white/15 sm:py-6"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                    {phase.number}
                  </span>
                  <h4 className="display mt-2 text-2xl">{phase.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {phase.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="border border-white/15 bg-white/[0.025]">
            <div className="flex flex-col gap-3 border-b border-white/15 p-5 sm:flex-row sm:items-end sm:justify-between md:p-6">
              <div>
                <p className="eyebrow text-white/35">Historial SNK</p>
                <h3 className="display mt-2 text-3xl md:text-4xl">
                  Torneos que ya jugamos.
                </h3>
              </div>
              <Trophy className="h-7 w-7 text-brand" aria-hidden="true" />
            </div>

            <div className="divide-y divide-white/10">
              {snkTournaments.map((tournament, index) => (
                <div
                  key={tournament.name}
                  className="group grid gap-3 p-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[1.3fr_1fr_0.8fr_auto] md:items-center md:gap-6 md:p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/85">
                      {tournament.name}
                    </p>
                  </div>
                  <p className="pl-8 text-sm text-white/55 md:pl-0">
                    {tournament.game}
                  </p>
                  <p className="pl-8 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 md:pl-0">
                    {tournament.format}
                  </p>
                  <div className="flex items-center gap-3 pl-8 md:justify-end md:pl-0">
                    <Tag tone="outline-dark">{tournament.status}</Tag>
                    {tournament.vodUrl ? (
                      <a
                        href={tournament.vodUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.14em] text-brand hover:text-white"
                      >
                        VOD
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="noise relative overflow-hidden bg-brand p-7 text-white md:p-10">
            <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-white/60">Tu marca puede jugar aquí</p>
                <h3 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
                  Construyamos una alianza que se note.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                  {sponsorCopy.ctaNote}
                </p>
              </div>
              <a
                href="#contacto"
                onClick={(event) => {
                  event.preventDefault();
                  requestContact("patrocinio", "Media kit");
                }}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 border-2 border-white bg-white px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors",
                  "hover:border-ink hover:bg-ink hover:text-white",
                )}
              >
                {sponsorCopy.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
