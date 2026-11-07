import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";
import { contactMotives, site } from "@/content/site";
import type { ContactMotive } from "@/types";
import {
  CONTACT_INTENT_EVENT,
  type ContactIntentDetail,
} from "@/lib/contact";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  motive: ContactMotive;
  message: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  motive: "patrocinio",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [context, setContext] = useState("");
  const [honey, setHoney] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const motiveLabel =
    contactMotives.find((motive) => motive.value === form.motive)?.label ??
    "Contacto";

  useEffect(() => {
    const onIntent = (event: Event) => {
      const detail = (event as CustomEvent<ContactIntentDetail>).detail;
      if (!detail) return;

      setForm((previous) => ({ ...previous, motive: detail.motive }));
      setContext(detail.context ?? "");
      setStatus("idle");
      setErrorMessage("");

      window.setTimeout(() => {
        nameRef.current?.focus({ preventScroll: true });
      }, 450);
    };

    window.addEventListener(CONTACT_INTENT_EVENT, onIntent);
    return () => window.removeEventListener(CONTACT_INTENT_EVENT, onIntent);
  }, []);

  const update =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const target = event.target;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setForm((previous) => ({ ...previous, [field]: value }));
    };

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Contacto desde el sitio — ${motiveLabel}`,
  )}&body=${encodeURIComponent(
    `Nombre: ${form.name}\nCorreo: ${form.email}\nMotivo: ${motiveLabel}\n\n${form.message}`,
  )}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honey) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            _replyto: form.email,
            motivo: motiveLabel,
            contexto: context || "Sin contexto adicional",
            mensaje: form.message,
            _subject: `Nuevo contacto desde el sitio — ${motiveLabel}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = (await response.json().catch(() => null)) as
        | { success?: string | boolean }
        | null;

      if (
        !response.ok ||
        (data?.success !== undefined && String(data.success) !== "true")
      ) {
        throw new Error("FormSubmit no confirmó el envío");
      }

      setStatus("success");
      setForm(initialState);
      setContext("");
    } catch {
      setStatus("error");
      setErrorMessage(
        "No pudimos enviar el mensaje. Puedes intentarlo de nuevo o escribir directo por correo.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[480px] flex-col items-center justify-center border-2 border-ink bg-paper p-8 text-center shadow-hard-red"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="display mt-6 text-4xl">Mensaje enviado.</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
          Gracias por escribir. Te responderé a la brevedad desde{" "}
          <span className="text-ink">{site.email}</span>.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="border-2 border-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            Enviar otro mensaje
          </button>
          <a
            href={`mailto:${site.email}`}
            className="bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand"
          >
            Escribir por correo
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      onSubmit={handleSubmit}
      className="relative border-2 border-ink bg-paper p-5 shadow-hard-red md:p-7"
      aria-busy={status === "submitting"}
    >
      <input
        type="hidden"
        name="_subject"
        value="Nuevo contacto desde el sitio — El Resz MX"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="flex items-start justify-between gap-5 border-b-2 border-ink/10 pb-5">
        <div>
          <p className="eyebrow text-brand">Cuéntame del proyecto</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
            Respuesta en {site.responseTime}
          </p>
        </div>
        <span className="h-2 w-2 shrink-0 bg-brand" aria-hidden="true" />
      </div>

      {context ? (
        <div className="mt-5 border-l-4 border-brand bg-smoke px-4 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
            Motivo preseleccionado
          </p>
          <p className="mt-1 text-sm font-medium text-ink">
            {motiveLabel} · {context}
          </p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55"
          >
            Nombre *
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className="input-field"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55"
          >
            Correo *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            className="input-field"
            placeholder="tu@correo.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-motive"
          className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55"
        >
          Motivo *
        </label>
        <div className="relative">
          <select
            id="contact-motive"
            name="motive"
            required
            value={form.motive}
            onChange={update("motive")}
            className="input-field appearance-none pr-10"
          >
            {contactMotives.map((motive) => (
              <option key={motive.value} value={motive.value}>
                {motive.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55"
        >
          Mensaje *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="input-field resize-y"
          placeholder="Cuéntame qué tienes en mente: torneo, patrocinio, colaboración..."
        />
      </div>

      <div className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-honey">No llenar</label>
        <input
          id="contact-honey"
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-ink/60">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={update("consent")}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#c52125]"
        />
        <span>
          Acepto que mis datos se usen únicamente para responder a este mensaje.
        </span>
      </label>

      {status === "error" ? (
        <div
          className="mt-5 flex items-start gap-3 border-2 border-brand bg-brand/5 p-4 text-sm text-ink"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p>{errorMessage}</p>
            <a
              href={mailtoHref}
              className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-brand underline underline-offset-4"
            >
              Abrir correo con este mensaje
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-3 border-2 border-brand bg-brand px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors",
          status === "submitting"
            ? "cursor-wait opacity-70"
            : "hover:border-ink hover:bg-ink",
        )}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink/35">
        También puedes escribir a{" "}
        <a
          href={`mailto:${site.email}`}
          className="normal-case text-ink/60 underline underline-offset-4 hover:text-brand"
        >
          {site.email}
        </a>
      </p>
    </form>
  );
}
