import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: readonly string[];
  tone?: "brand" | "dark" | "light";
  className?: string;
}

const tones = {
  brand: "border-y border-black/10 bg-brand text-white",
  dark: "border-y border-white/10 bg-ink text-white",
  light: "border-y border-ink/10 bg-smoke text-ink",
};

function Group({ items }: { items: readonly string[] }): ReactNode {
  return (
    <div className="marquee-group">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="display px-5 py-3 text-xl md:px-8 md:py-4 md:text-2xl">
            {item}
          </span>
          <span className="text-current opacity-40" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee({ items, tone = "brand", className }: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", tones[tone], className)}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <Group items={items} />
        <Group items={items} />
      </div>
    </div>
  );
}
