import { ArrowUp, Mail, MapPin } from "lucide-react";
import { navItems, site, socials } from "@/content/site";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="container-edge relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo href={null} variant="white" className="h-14 md:h-16" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Comunidad, torneos y transmisiones de fighting games desde México
              para Latinoamérica.
            </p>
            <Button
              href="#contacto"
              size="sm"
              variant="outline"
              className="mt-6"
              showIcon
            >
              Hablemos
            </Button>
          </div>

          <div>
            <p className="eyebrow text-white/40">Navegación</p>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-mono text-[11px] uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Servicios</p>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="link-underline text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Contacto</p>
            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{site.location} · proyectos online en LATAM</span>
              </p>
            </div>
            <SocialLinks links={socials} tone="dark" className="mt-6" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
            © {site.copyrightYear} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              Hecho en México para LATAM
            </p>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Volver arriba
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
