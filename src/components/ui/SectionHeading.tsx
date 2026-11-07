import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-5xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3",
          align === "center" && "justify-center",
          tone === "dark" ? "text-white/65" : "text-ink/60",
        )}
      >
        <span className="h-px w-8 bg-brand" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2
        className={cn(
          "display text-[clamp(2.75rem,5.3vw,5.4rem)]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-white/65" : "text-ink/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
