import { ArrowUpRight, Rocket } from "lucide-react";
import { upcomingCopy, upcomingProjects } from "@/content/upcoming";
import { requestContact } from "@/lib/contact";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Upcoming() {
  return (
    <section id="proximos" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={upcomingCopy.eyebrow}
              title={upcomingCopy.title}
              description={upcomingCopy.description}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-4 border-2 border-ink bg-ink px-5 py-4 text-white">
              <Rocket className="h-6 w-6 text-brand" aria-hidden="true" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                  Estado del proyecto
                </p>
                <p className="display mt-1 text-xl">Roadmap abierto</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <ol className="border-t-2 border-ink">
            {upcomingProjects.map((project, index) => (
              <li
                key={project.id}
                className="group relative border-b-2 border-ink/10 py-7 md:pl-14"
              >
                <span
                  className="absolute left-0 top-9 hidden h-3 w-3 bg-brand transition-transform duration-300 group-hover:scale-150 md:block"
                  aria-hidden="true"
                />
                <div className="grid gap-5 md:grid-cols-[1fr_220px] md:items-start md:gap-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Tag tone="brand">{project.status}</Tag>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                        {project.period}
                      </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display text-3xl transition-colors group-hover:text-brand md:text-5xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="md:pt-1">
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
                      <span>Avance</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-ink/10">
                      <div
                        className="h-full bg-brand transition-[width] duration-700"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-10">
          <a
            href="#contacto"
            onClick={(event) => {
              event.preventDefault();
              requestContact("colaboracion", "Próximos proyectos");
            }}
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-brand"
          >
            {upcomingCopy.cta}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
