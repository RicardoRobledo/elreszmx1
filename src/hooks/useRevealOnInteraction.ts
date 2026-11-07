import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

const WHEEL_HOLD_MS = 400;
const TAP_THRESHOLD = 8;

export function useRevealOnInteraction(): boolean {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);
  const hasScrolledAway = useRef(false);
  const wheelHolding = useRef(false);
  const wheelHoldTimer = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);
  const touchHolding = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateRevealed = (value: boolean) => {
      if (revealedRef.current === value) return;
      revealedRef.current = value;
      setRevealed(value);
    };

    const reveal = () => updateRevealed(true);

    const holdWheel = () => {
      wheelHolding.current = true;

      if (wheelHoldTimer.current !== null) {
        window.clearTimeout(wheelHoldTimer.current);
      }

      wheelHoldTimer.current = window.setTimeout(() => {
        wheelHolding.current = false;
        wheelHoldTimer.current = null;
      }, WHEEL_HOLD_MS);
    };

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current) {
        hasScrolledAway.current = true;
        reveal();
      } else if (current === 0 && hasScrolledAway.current) {
        hasScrolledAway.current = false;
        wheelHolding.current = false;
        if (wheelHoldTimer.current !== null) {
          window.clearTimeout(wheelHoldTimer.current);
          wheelHoldTimer.current = null;
        }
        touchHolding.current = false;
        updateRevealed(false);
      }

      lastScrollY.current = current;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!revealedRef.current) {
        if (event.deltaY <= 0) return;
        event.preventDefault();
        reveal();
        holdWheel();
        return;
      }

      if (wheelHolding.current) {
        event.preventDefault();
        holdWheel();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStartY.current = null;
        return;
      }

      touchStartY.current = event.touches[0].clientY;
      touchMoved.current = false;
      touchHolding.current = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null || event.touches.length !== 1) return;

      const delta = event.touches[0].clientY - touchStartY.current;

      if (touchHolding.current) {
        event.preventDefault();
        return;
      }

      if (Math.abs(delta) > TAP_THRESHOLD) {
        touchMoved.current = true;
      }

      if (!revealedRef.current) {
        if (delta >= 0) return;
        event.preventDefault();
        reveal();
        touchHolding.current = true;
      }
    };

    const handleTouchEnd = () => {
      if (!touchMoved.current && !revealedRef.current) {
        reveal();
      }

      touchStartY.current = null;
      touchHolding.current = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      reveal();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "PageUp") return;
      reveal();
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (wheelHoldTimer.current !== null) {
        window.clearTimeout(wheelHoldTimer.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return revealed || reducedMotion;
}
