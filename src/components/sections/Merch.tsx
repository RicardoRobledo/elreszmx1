import { ArrowUpRight, Sparkles } from "lucide-react";
import { merchCopy, merchItems } from "@/content/merch";
import { requestContact } from "@/lib/contact";
import { MerchMockup } from "@/components/ui/MerchMockup";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Merch() {
  return (
    <section id="merch" className="noise relative overflow-hidden bg-brand py-20 text-white md:py-28">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="container-edge relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-white/70">
                <span className="h-px w-8 bg-white" aria-hidden="true" />
                <p className="eyebrow">{merchCopy.eyebrow}</p>
              </div>
              <h2 className="display mt-5 text-[clamp(3.5rem,8vw,8rem)] leading-[0.92]">
                {merchCopy.title}
              </h2>
              <div className="mt-5">
                <Tag tone="dark" dot>
                  {merchCopy.kicker}
                </Tag>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                {merchCopy.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3 border-2 border-white/40 bg-ink px-4 py-3">
              <Sparkles className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-white/65">
                Drop 001
                <br />
                <span className="text-white">En diseño</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {merchItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="group flex h-full flex-col border-2 border-ink bg-paper text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-hard">
                <div className="relative overflow-hidden border-b-2 border-ink bg-[#ecece6] p-3">
                  <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  <div className="relative aspect-[4/5] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.03]">
                    <MerchMockup type={item.type} />
                  </div>
                  <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
                    {item.tag}
                  </span>
                  <span className="absolute right-3 top-3 border border-ink/20 bg-paper px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]">
                    Próximamente
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-5 border-2 border-white/30 bg-ink p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <p className="max-w-xl text-sm leading-relaxed text-white/55">
              {merchCopy.note}
            </p>
            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                requestContact("merch", "Drop 001");
              }}
              className="inline-flex shrink-0 items-center gap-2 border-2 border-white bg-white px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {merchCopy.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
