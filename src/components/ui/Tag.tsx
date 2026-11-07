import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagTone = "brand" | "dark" | "light" | "outline" | "outline-dark";

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  className?: string;
  dot?: boolean;
}

const tones: Record<TagTone, string> = {
  brand: "border-brand bg-brand text-white",
  dark: "border-ink bg-ink text-white",
  light: "border-ink/15 bg-white text-ink",
  outline: "border-current bg-transparent text-current",
  "outline-dark": "border-white/25 bg-transparent text-white",
};

export function Tag({
  children,
  tone = "brand",
  className,
  dot = false,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.16em]",
        tones[tone],
        className,
      )}
    >
      {dot ? (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      ) : null}
      {children}
    </span>
  );
}
