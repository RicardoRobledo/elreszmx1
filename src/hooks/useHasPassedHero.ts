import { useEffect, useState, type RefObject } from "react";

export function useHasPassedHero(
  headerRef: RefObject<HTMLElement | null>,
): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const hero = document.getElementById("inicio");
      const header = headerRef.current;
      if (!hero || !header) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const headerBottom = header.getBoundingClientRect().bottom;
      setPassed(heroBottom <= headerBottom);
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
  }, [headerRef]);

  return passed;
}
