import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "dark" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  showIcon?: boolean;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-brand bg-brand text-white hover:border-ink hover:bg-ink hover:text-white",
  outline:
    "border-current bg-transparent text-current hover:border-brand hover:bg-brand hover:text-white",
  dark: "border-ink bg-ink text-white hover:border-brand hover:bg-brand",
  light:
    "border-white bg-white text-ink hover:border-ink hover:bg-ink hover:text-white",
  ghost:
    "border-transparent bg-transparent text-current hover:text-brand",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[10px]",
  md: "px-5 py-3.5 text-[11px]",
  lg: "px-6 py-4 text-[11px] md:px-7",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  showIcon = false,
  className,
  ...props
}: ButtonProps) {
  const Icon = icon ?? ArrowUpRight;

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 border-2 font-mono uppercase tracking-[0.18em] transition-all duration-300",
        "hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? (
        <Icon
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}
