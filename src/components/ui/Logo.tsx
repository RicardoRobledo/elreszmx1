import { cn } from "@/lib/cn";

type LogoVariant = "color" | "white" | "allwhite";

const sources: Record<LogoVariant, string> = {
  color: "/brand/logo-trimmed.png",
  white: "/brand/logo-white-trimmed.png",
  allwhite: "/brand/logo-allwhite-trimmed.png",
};

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string | null;
  priority?: boolean;
  decorative?: boolean;
}

export function Logo({
  variant = "color",
  className,
  href = "#inicio",
  priority = false,
  decorative = false,
}: LogoProps) {
  const image = (
    <img
      src={sources[variant]}
      alt={decorative ? "" : "El Resz MX"}
      width={358}
      height={181}
      className={cn("h-10 w-auto md:h-11", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      aria-hidden={decorative || undefined}
    />
  );

  if (!href) return image;

  return (
    <a
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label="El Resz MX — ir al inicio"
    >
      {image}
    </a>
  );
}
