import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Globe2,
  Mail,
  MapPin,
} from "lucide-react";
import { faqCopy, faqs } from "@/content/faq";
import { site, socials } from "@/content/site";
import { copyToClipboard } from "@/lib/contact";
import { ContactForm } from "./ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";

const reasons = [
  "Patrocinio y activaciones de marca",
  "Organización y operación de torneos",
  "Narración, casting y stream master",
  "Colaboraciones con la comunidad",
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const success = await copyToClipboard(site.email);
    if (!success) return;

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="container-edge relative">
        <Reveal>
          <SectionHeading
            eyebrow="09 / Contacto"
            title="Hablemos de tu próximo torneo."
            description="Patrocinio, organización, narración, producción o una idea que todavía no tiene forma. Escríbeme y le damos estructura."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div>
              <div className="border-2 border-ink bg-smoke p-6 shadow-hard md:p-8">
                <p className="eyebrow text-ink/45">Correo directo</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all font-mono text-xl font-bold normal-case transition-colors hover:text-brand md:text-2xl"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? "Correo copiado" : "Copiar correo"}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p
                  className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-brand"
                  role="status"
                  aria-live="polite"
                >
                  {copied ? "Correo copiado" : "\u00A0"}
                </p>

                <div className="mt-5 grid gap-4 border-t border-ink/10 pt-5">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      {site.location} · {site.availability}
                    </span>
                  </p>
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>Tiempo de respuesta: {site.responseTime}</span>
                  </p>
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                    <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>Eventos online para México y Latinoamérica.</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 border-2 border-ink bg-ink p-6 text-white">
                <p className="eyebrow text-white/35">Para qué escribirme</p>
                <ul className="mt-4 space-y-3">
                  {reasons.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
                    >
                      <ArrowUpRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                  Redes
                </p>
                <SocialLinks links={socials} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-20 max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow={faqCopy.eyebrow}
              title={faqCopy.title}
              description="Respuestas rápidas para que no tengas que preguntar dos veces."
            />
          </Reveal>

          <Reveal className="mt-8" delay={80}>
            <div className="border-t-2 border-ink">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border-b-2 border-ink/10">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 pr-1 [&::-webkit-details-marker]:hidden">
                    <span className="display text-xl md:text-2xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="mt-1 h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-8 text-sm leading-relaxed text-ink/60 md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col gap-4 border-t-2 border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {site.email}
            </p>
            <a
              href="#inicio"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50 transition-colors hover:text-brand"
            >
              Volver al inicio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
