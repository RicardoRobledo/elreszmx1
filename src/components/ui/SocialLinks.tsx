import type { SocialLink } from "@/types";
import { cn } from "@/lib/cn";
import { SocialIcon } from "./SocialIcon";

interface SocialLinksProps {
  links: SocialLink[];
  tone?: "light" | "dark";
  showLabels?: boolean;
  className?: string;
}

export function SocialLinks({
  links,
  tone = "light",
  showLabels = false,
  className,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => {
        const external = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              aria-label={link.label}
              className={cn(
                "group flex items-center gap-2 border-2 transition-colors duration-200",
                showLabels
                  ? "px-3.5 py-2.5"
                  : "h-10 w-10 justify-center",
                tone === "dark"
                  ? "border-white/20 text-white hover:border-brand hover:bg-brand"
                  : "border-ink/15 text-ink hover:border-brand hover:bg-brand hover:text-white",
              )}
            >
              <SocialIcon icon={link.icon} className="h-4 w-4 shrink-0" />
              {showLabels ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {link.label}
                </span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
