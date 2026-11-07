import { Check } from "lucide-react";
import { about } from "@/content/about";
import { stats } from "@/content/site";
import { AboutCinematic } from "@/components/sections/AboutCinematic";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="acerca" className="relative bg-paper py-20 md:py-28">
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div className="container-edge relative">
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description="Seis años creando contenido, más de uno dentro de la escena FGC y una idea clara: crecer con la comunidad."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="border-2 border-ink bg-smoke p-6 shadow-hard md:p-8">
              <p className="eyebrow text-ink/55">Desde México para LATAM</p>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="display text-4xl text-brand md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t-2 border-ink/10 pt-6">
                <p className="display text-2xl">La escena se construye en equipo.</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Jugadores, casters, organizadores y marcas. Si sumas, aquí hay
                  lugar.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={140}>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink/72 md:text-lg">
              {about.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {index === 0 ? (
                    <span className="float-left mr-2 mt-1 font-display text-5xl leading-[0.8] text-brand">
                      {paragraph.charAt(0)}
                    </span>
                  ) : null}
                  {index === 0 ? paragraph.slice(1) : paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden border-2 border-ink bg-brand p-7 text-white md:p-10">
            <Logo
              href={null}
              variant="allwhite"
              decorative
              className="absolute -right-6 -top-6 h-28 rotate-6 opacity-20 md:h-36"
            />
            <p className="eyebrow text-white/65">En pocas palabras</p>
            <p className="relative mt-4 max-w-4xl text-lg leading-relaxed md:text-2xl">
              {about.summary}
            </p>
          </div>
        </Reveal>
      </div>

      <AboutCinematic />

      <div className="container-edge relative">
        <Reveal className="mt-16 md:mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className="eyebrow text-ink/50">Nuestra forma de trabajar</p>
              <h3 className="display mt-4 text-4xl md:text-5xl">
                Cuatro cosas que no negociamos.
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60 md:text-base">
                Cada torneo, transmisión y colaboración se sostiene en estos
                principios.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {about.values.map((value, index) => (
                <li key={value.title}>
                  <Reveal className="h-full" delay={index * 60}>
                    <article className="h-full border-2 border-ink bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-hard">
                      <span className="flex h-8 w-8 items-center justify-center bg-brand text-white">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <p className="display mt-6 text-2xl">{value.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/60">
                        {value.text}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="noise relative overflow-hidden bg-ink p-8 text-white md:p-12">
            <div
              className="bg-grid-dark pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
            />
            <div className="relative max-w-5xl">
              <p className="eyebrow text-white/45">La razón de todo esto</p>
              <blockquote className="display mt-5 text-4xl leading-[0.95] md:text-6xl">
                “{about.quote}”
              </blockquote>
            </div>
            <Logo
              href={null}
              variant="white"
              decorative
              className="absolute -bottom-3 right-6 h-16 opacity-30 md:h-24"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
