import { useRef } from "react";
import {
  aboutChapters,
  aboutFrames,
  type AboutChapter,
  type AboutChapterPosition,
} from "@/content/aboutCinematic";
import { cn } from "@/lib/cn";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const positions: Record<AboutChapterPosition, string> = {
  left: "items-center justify-start text-left",
  right: "items-center justify-end text-left",
  center: "items-center justify-center text-center",
  "bottom-left": "items-end justify-start text-left",
  "top-left": "items-start justify-start text-left",
  "top-right": "items-start justify-end text-left",
  "bottom-right": "items-end justify-end text-left",
};

const CHAPTER_SPAN = 0.86;

function chapterOpacity(progress: number, index: number): number {
  const total = aboutChapters.length;
  const mappedProgress = Math.min(1, progress / CHAPTER_SPAN);
  const slot = 1 / total;
  const local = Math.min(
    1,
    Math.max(0, (mappedProgress - index * slot) / slot),
  );
  const fade = 0.18;

  return Math.max(0, Math.min(1, local / fade, (1 - local) / fade));
}

function ChapterContent({
  chapter,
  centered = false,
}: {
  chapter: AboutChapter;
  centered?: boolean;
}) {
  return (
    <div className={cn("relative", centered && "text-center")}>
      <div
        className="pointer-events-none absolute -inset-x-16 -inset-y-12 rounded-[50%] bg-ink/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <h3 className="display text-[clamp(2.75rem,5vw,5rem)] text-white [text-shadow:0_6px_36px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.9)]">
          {chapter.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 [text-shadow:0_4px_24px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          {chapter.text}
        </p>
      </div>
    </div>
  );
}

export function AboutCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const framePosition = progress * (aboutFrames.length - 1);
  const frameIndex = Math.min(
    Math.floor(framePosition),
    aboutFrames.length - 1,
  );
  const frameMix = framePosition - frameIndex;
  const whiteMix = Math.min(1, Math.max(0, (progress - 0.9) / 0.08));

  if (reducedMotion) {
    return (
      <div className="relative mt-16 overflow-hidden bg-ink md:mt-24">
        <img
          src={aboutFrames[11]}
          alt=""
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
          decoding="async"
        />
        <div className="container-edge relative grid gap-10 py-16 md:grid-cols-2 md:py-20">
          {aboutChapters.map((chapter) => (
            <ChapterContent key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mt-16 h-[900svh] bg-ink md:mt-24 md:h-[1000svh]"
      role="region"
      aria-label="Filosofía y misión de El Resz MX"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          {aboutFrames.map((frame, index) => {
            let opacity = 0;

            if (index === frameIndex) {
              opacity = 1;
            } else if (index === frameIndex + 1) {
              opacity = frameMix;
            }

            return (
              <img
                key={frame}
                src={frame}
                alt=""
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity }}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
              />
            );
          })}

          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(197,33,37,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85),transparent_28%,transparent_68%,rgba(0,0,0,0.92))]" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="relative h-full">
          {aboutChapters.map((chapter, index) => {
            const opacity = chapterOpacity(progress, index);
            const blur = (1 - opacity) * 8;
            const shift = (1 - opacity) * 18;

            return (
              <div
                key={chapter.id}
                data-chapter={chapter.id}
                className={cn(
                  "pointer-events-none absolute inset-0 mx-auto flex max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 md:pt-28 lg:px-12",
                  positions[chapter.position],
                )}
                style={{
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translate3d(0, ${shift}px, 0)`,
                  willChange: "opacity, filter, transform",
                }}
              >
                <div className="w-full max-w-xl">
                  <ChapterContent
                    chapter={chapter}
                    centered={chapter.position === "center"}
                  />
                </div>
              </div>
            );
          })}

        </div>

        <div
          className="pointer-events-none absolute inset-0 z-30 bg-paper"
          style={{ opacity: whiteMix }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
