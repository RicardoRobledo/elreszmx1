import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { team, teamCopy } from "@/content/team";
import type { TeamMember } from "@/types";
import { cn } from "@/lib/cn";
import { requestContact } from "@/lib/contact";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section id="equipo" className="relative overflow-hidden bg-smoke py-20 md:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeading
            eyebrow={teamCopy.eyebrow}
            title={teamCopy.title}
            description={teamCopy.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 80}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden border-2 border-ink",
                  member.featured
                    ? "bg-ink text-white shadow-hard"
                    : "bg-paper text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-hard",
                )}
              >
                <div className="relative aspect-video overflow-hidden border-b-2 border-ink">
                  <button
                    type="button"
                    onClick={() => setSelected(member)}
                    className="block h-full w-full cursor-zoom-in focus-visible:outline-offset-[-4px]"
                    aria-label={`Ampliar foto de ${member.name}`}
                  >
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={cn(
                          "eyebrow",
                          member.featured ? "text-white/45" : "text-brand",
                        )}
                      >
                        {member.role}
                      </p>
                      <h3 className="display mt-3 text-3xl md:text-4xl">
                        {member.name}
                      </h3>
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[10px]",
                        member.featured ? "text-white/25" : "text-ink/25",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className={cn(
                      "mt-4 max-w-xl text-sm leading-relaxed md:text-base",
                      member.featured ? "text-white/65" : "text-ink/60",
                    )}
                  >
                    {member.bio}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {member.tags.map((tag) => (
                      <Tag
                        key={tag}
                        tone={member.featured ? "outline-dark" : "light"}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <div className="flex flex-col gap-5 border-2 border-ink bg-paper p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div>
              <p className="eyebrow text-brand">Detrás del stream</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                Producción, brackets y moderación también son parte del equipo.
                Si quieres sumar tu talento a El Resz MX, escríbenos.
              </p>
            </div>
            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                requestContact("colaboracion", "Equipo");
              }}
              className="group inline-flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-brand"
            >
              {teamCopy.cta}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>

      <ImageLightbox
        open={selected !== null}
        onClose={closeModal}
        src={selected?.image ?? ""}
        alt={selected?.imageAlt ?? ""}
        width={1672}
        height={941}
      />
    </section>
  );
}
