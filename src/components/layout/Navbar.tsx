import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site, socials } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useHasPassedHero } from "@/hooks/useHasPassedHero";
import { useRevealOnInteraction } from "@/hooks/useRevealOnInteraction";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

const sectionIds = ["inicio", ...navItems.map((item) => item.href.replace("#", ""))];

export function Navbar() {
  const revealed = useRevealOnInteraction();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const solid = useHasPassedHero(headerRef);
  const visible = revealed || solid;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (!visible || open) {
      header.setAttribute("inert", "");
    } else {
      header.removeAttribute("inert");
    }
  }, [visible, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      window.setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "site-header fixed inset-x-0 top-0 z-50",
          visible && "is-visible",
          solid
            ? "border-b border-ink/10 bg-paper/92 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-edge flex h-16 items-center justify-between gap-6 md:h-20">
          <Logo
            priority
            variant={solid ? "color" : "white"}
            className="h-11 md:h-12"
          />

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 hover:text-brand",
                    isActive
                      ? "text-brand"
                      : solid
                        ? "text-ink/65"
                        : "text-white/80",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand transition-transform duration-200",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="#contacto"
              size="sm"
              className="hidden md:inline-flex"
              showIcon
            >
              Hablemos
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center border-2 transition-colors hover:border-brand hover:bg-brand hover:text-white xl:hidden",
                solid ? "border-ink text-ink" : "border-white text-white",
              )}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink xl:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b-2 border-ink px-5 md:h-20 md:px-8">
            <Logo href={null} className="h-10 md:h-11" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex h-10 w-10 items-center justify-center border-2 border-ink text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8 pt-4 md:px-8">
            <nav className="flex flex-col" aria-label="Navegación móvil">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-ink/10 py-3.5"
                >
                  <span className="display text-[2rem] leading-none transition-colors group-hover:text-brand">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Button
                href="#contacto"
                onClick={() => setOpen(false)}
                className="w-full"
                showIcon
              >
                Hablemos de tu proyecto
              </Button>

              <SocialLinks links={socials} className="mt-5" />

              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block font-mono text-[10px] tracking-[0.16em] text-ink/50 transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
