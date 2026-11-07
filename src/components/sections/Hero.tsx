import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { hero, stats } from "@/content/site";
import { cn } from "@/lib/cn";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useRevealOnInteraction } from "@/hooks/useRevealOnInteraction";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const revealed = useRevealOnInteraction();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (reducedMotion) {
      video.pause();
    } else {
      void video.play().catch(() => {
        /* Autoplay puede fallar en algunos navegadores. El poster queda visible. */
      });
    }
  }, [reducedMotion]);

  const reveal = (
    delay: number,
    distance = "translate-y-8",
    blur = "blur-[5px]",
  ) => ({
    className: cn(
      "transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
      revealed
        ? "translate-y-0 opacity-100 blur-[0px]"
        : cn(distance, "opacity-0", blur),
    ),
    style: { transitionDelay: `${delay}ms` },
  });

  const eyebrowReveal = reveal(0, "translate-y-4", "blur-[3px]");
  const titleTopReveal = reveal(90, "translate-y-12", "blur-[8px]");
  const titleMiddleReveal = reveal(190, "translate-y-12", "blur-[8px]");
  const titleAccentReveal = reveal(290, "translate-y-12", "blur-[8px]");
  const descriptionReveal = reveal(420, "translate-y-8", "blur-[5px]");
  const buttonsReveal = reveal(520, "translate-y-6", "blur-[4px]");
  const statsReveal = reveal(620, "translate-y-6", "blur-[4px]");

  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-ink/35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(197,33,37,0.32),transparent_46%)] mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.55),transparent_34%,rgba(5,5,5,0.86))]"
        aria-hidden="true"
      />
      <div className="noise absolute inset-0" aria-hidden="true" />

      <div className="container-edge relative z-10 flex flex-1 flex-col justify-end pb-14 pt-28 md:pb-16 md:pt-32">
        <div className={cn("max-w-6xl", !revealed && "pointer-events-none")}>
          <div
            className={cn(
              "mb-4 flex flex-wrap items-center gap-3",
              eyebrowReveal.className,
            )}
            style={eyebrowReveal.style}
          >
            <span
              className={cn(
                "h-px w-10 origin-left bg-brand transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                revealed ? "scale-x-100" : "scale-x-0",
              )}
              aria-hidden="true"
            />
            <p className="eyebrow text-white/70">{hero.eyebrow}</p>
          </div>

          <h1 className="display text-[clamp(2.75rem,min(8.5vw,12.6vh),8.5rem)] text-white">
            <span
              className={cn("block", titleTopReveal.className)}
              style={titleTopReveal.style}
            >
              {hero.titleTop}
            </span>
            <span
              className={cn("block", titleMiddleReveal.className)}
              style={titleMiddleReveal.style}
            >
              {hero.titleMiddle}
            </span>
            <span
              className={cn("block text-brand", titleAccentReveal.className)}
              style={titleAccentReveal.style}
            >
              {hero.titleAccent}.
            </span>
          </h1>

          <div className="mt-6 flex max-w-6xl flex-col gap-8 md:mt-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className={cn(
                  "max-w-xl text-sm leading-relaxed text-white/70 md:text-base",
                  descriptionReveal.className,
                )}
                style={descriptionReveal.style}
              >
                {hero.description}
              </p>
              <div
                className={cn(
                  "mt-6 flex flex-col gap-3 sm:flex-row",
                  buttonsReveal.className,
                )}
                style={buttonsReveal.style}
              >
                <Button href="#trabajo" showIcon>
                  {hero.primaryCta}
                </Button>
                <Button
                  href="#contacto"
                  variant="outline"
                  className="text-white"
                  showIcon
                >
                  {hero.secondaryCta}
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "hidden shrink-0 flex-col items-end gap-2 border-l-2 border-white/15 pb-1 pl-8 xl:flex",
                statsReveal.className,
              )}
              style={statsReveal.style}
            >
              {stats.slice(0, 3).map((stat) => (
                <p
                  key={stat.label}
                  className="text-right font-mono text-[10px] uppercase tracking-[0.16em] text-white/45"
                >
                  <span className="text-white">{stat.value}</span>{" "}
                  {stat.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#acerca"
        aria-label="Bajar a Acerca de"
        className={cn(
          "absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/60 transition-opacity duration-200 hover:text-white",
          revealed ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span
          className="scroll-line block h-10 w-px bg-brand"
          aria-hidden="true"
        />
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>

      <div
        className={cn(
          "absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex",
          revealed ? "opacity-60" : "opacity-0",
        )}
        aria-hidden="true"
        style={{ transitionDelay: revealed ? "720ms" : "0ms" }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/60 [writing-mode:vertical-rl]">
          FGC Community · México · LATAM
        </span>
        <span className="h-16 w-px bg-brand" />
      </div>
    </section>
  );
}
