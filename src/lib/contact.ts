import type { ContactMotive } from "@/types";

export const CONTACT_INTENT_EVENT = "elresz:contact-intent";

export interface ContactIntentDetail {
  motive: ContactMotive;
  context?: string;
}

export function requestContact(
  motive: ContactMotive,
  context?: string,
): void {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<ContactIntentDetail>(CONTACT_INTENT_EVENT, {
      detail: { motive, context },
    }),
  );

  document
    .getElementById("contacto")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
