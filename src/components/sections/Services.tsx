import {
  ArrowUpRight,
  Check,
  Layers,
  ListOrdered,
  Mic,
  MonitorPlay,
  type LucideIcon,
} from "lucide-react";
import { services, servicesCopy } from "@/content/services";
import type { ServiceIcon } from "@/types";
import { cn } from "@/lib/cn";
import { requestContact } from "@/lib/contact";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<ServiceIcon, LucideIcon> = {
  bracket: ListOrdered,
  mic: Mic,
  stream: MonitorPlay,
  package: Layers,
};

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-10 top-24 hidden select-none lg:block"
        aria-hidden="true"
      >
        <span
          className="display text-[12rem] leading-none text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.12)" }}
        >
          GG
        </span>
      </div>

      <div className="container-edge relative">
        <Reveal>
          <SectionHeading
            eyebrow={servicesCopy.eyebrow}
            title={servicesCopy.title}
            description={servicesCopy.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Reveal key={service.id} delay={index * 70}>
                <article
                  className={cn(
                    "group flex h-full flex-col border-2 p-6 transition-all duration-300 hover:-translate-y-1 md:p-8",
                    service.featured
                      ? "border-brand bg-ink text-white shadow-hard-red"
                      : "border-ink bg-paper hover:shadow-hard",
                  )}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-12 w-12 items-center justify-center border-2",
                          service.featured
                            ? "border-white/20 bg-white/5 text-brand"
                            : "border-ink/15 bg-smoke text-brand",
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-[0.2em]",
                          service.featured ? "text-white/45" : "text-ink/40",
                        )}
                      >
                        {service.number} / {service.kicker}
                      </span>
                    </div>
                    {service.featured ? (
                      <span className="bg-brand px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
                        Paquete
                      </span>
                    ) : (
                      <span className="h-2 w-2 bg-brand" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="display mt-8 text-4xl md:text-5xl">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-4 max-w-xl text-sm leading-relaxed md:text-base",
                      service.featured ? "text-white/65" : "text-ink/62",
                    )}
                  >
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={cn(
                          "flex items-start gap-2.5 text-sm leading-snug",
                          service.featured ? "text-white/75" : "text-ink/70",
                        )}
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={cn(
                      "mt-6 border-t pt-4 text-xs leading-relaxed",
                      service.featured
                        ? "border-white/10 text-white/50"
                        : "border-ink/10 text-ink/50",
                    )}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
                      Ideal para:
                    </span>{" "}
                    {service.idealFor}
                  </div>

                  <a
                    href="#contacto"
                    onClick={(event) => {
                      event.preventDefault();
                      requestContact("servicios", service.title);
                    }}
                    className={cn(
                      "mt-7 inline-flex items-center gap-2 self-start border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                      service.featured
                        ? "border-white/30 text-white hover:border-brand hover:text-brand"
                        : "border-ink/20 text-ink hover:border-brand hover:text-brand",
                    )}
                  >
                    Cotizar este servicio
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 border-2 border-ink bg-smoke p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <p className="max-w-2xl text-sm leading-relaxed text-ink/65">
              {servicesCopy.note}
            </p>
            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                requestContact("servicios", "Asesoría");
              }}
              className="inline-flex shrink-0 items-center gap-2 bg-brand px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink"
            >
              Armar una propuesta
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
