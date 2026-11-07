import { useCallback, useMemo, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { socials } from "@/content/site";
import { workCopy, workItems } from "@/content/work";
import type { WorkCategory, WorkFilter, WorkItem } from "@/types";
import { cn } from "@/lib/cn";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const categoryLabels: Record<WorkCategory, string> = {
  torneos: "Torneos",
  costreams: "Co-streams",
  comunidad: "Comunidad",
};

const filters: Array<{ value: WorkFilter; label: string }> = [
  { value: "todos", label: "Todos" },
  { value: "torneos", label: "Torneos" },
  { value: "costreams", label: "Co-streams" },
  { value: "comunidad", label: "Comunidad" },
];

export function Work() {
  const [filter, setFilter] = useState<WorkFilter>("todos");
  const [selected, setSelected] = useState<WorkItem | null>(null);

  const filtered = useMemo(
    () =>
      filter === "todos"
        ? workItems
        : workItems.filter((item) => item.category === filter),
    [filter],
  );

  const closeModal = useCallback(() => setSelected(null), []);
  const youtube = socials.find((social) => social.icon === "youtube");
  const playlistUrl = selected?.youtubePlaylistId
    ? `https://www.youtube.com/playlist?list=${selected.youtubePlaylistId}`
    : "";
  const embedUrl = selected?.youtubePlaylistId
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${selected.youtubePlaylistId}&autoplay=1&rel=0`
    : "";

  return (
    <section id="trabajo" className="noise relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="container-edge relative">
        <Reveal>
          <SectionHeading
            eyebrow={workCopy.eyebrow}
            title={workCopy.title}
            description={workCopy.description}
            tone="dark"
          />
        </Reveal>

        <Reveal className="mt-9" delay={80}>
          <div
            className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filtrar nuestro trabajo"
          >
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                aria-pressed={filter === item.value}
                className={cn(
                  "shrink-0 border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200",
                  filter === item.value
                    ? "border-brand bg-brand text-white"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filtered.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="group h-full border border-white/15 bg-white/[0.035] transition-colors duration-300 hover:border-brand">
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="block h-full w-full text-left"
                  aria-label={`Abrir ${item.title}`}
                >
                  <div className="relative aspect-video overflow-hidden border-b border-white/15">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/5" aria-hidden="true" />
                    <div className="absolute left-4 top-4">
                      <Tag tone="brand">{categoryLabels[item.category]}</Tag>
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 bg-ink/45 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand">
                        <Play className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                      {item.youtubePlaylistId ? "Playlist" : "Próximamente"}
                    </span>
                  </div>

                  <div className="flex flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="display text-3xl md:text-4xl">{item.title}</h3>
                      <ArrowUpRight
                        className="mt-1 h-5 w-5 shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag} tone="outline-dark">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            Archivo vivo · actualizado después de cada evento
          </p>
          {youtube ? (
            <a
              href={youtube.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-brand"
            >
              Ver canal de YouTube
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          ) : null}
        </Reveal>
      </div>

      <Modal
        open={selected !== null}
        onClose={closeModal}
        title={selected?.title ?? "Nuestro trabajo"}
        subtitle={
          selected ? `${categoryLabels[selected.category]} · El Resz MX` : undefined
        }
      >
        {selected ? (
          <div>
            {embedUrl ? (
              <div className="aspect-video w-full border-2 border-ink bg-ink">
                <iframe
                  src={embedUrl}
                  title={`Playlist: ${selected.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="relative aspect-video overflow-hidden border-2 border-ink bg-ink text-white">
                <img
                  src={selected.image}
                  alt=""
                  className="h-full w-full object-cover opacity-35"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white/70">
                    <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="display mt-5 text-3xl md:text-4xl">
                    Playlist próximamente
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                    Estamos conectando el archivo de este proyecto. Mientras
                    tanto, puedes seguir la transmisión y escribirnos si quieres
                    ver algo en específico.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-ink/60">
                {selected.description}
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                {playlistUrl ? (
                  <a
                    href={playlistUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-brand px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink"
                  >
                    Abrir en YouTube
                    <ExternalArrow />
                  </a>
                ) : youtube ? (
                  <a
                    href={youtube.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-brand px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink"
                  >
                    Ir a YouTube
                    <ExternalArrow />
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={closeModal}
                  className="border-2 border-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

function ExternalArrow() {
  return <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />;
}
