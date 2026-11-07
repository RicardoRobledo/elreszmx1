import { useEffect, useState, type RefObject } from "react";

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const total = element.offsetHeight - window.innerHeight;

      if (total <= 0) {
        setProgress(1);
        return;
      }

      const scrolled = Math.min(
        Math.max(-element.getBoundingClientRect().top, 0),
        total,
      );

      setProgress(scrolled / total);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}
