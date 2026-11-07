import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  subtitle,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      window.setTimeout(() => closeRef.current?.focus(), 40);
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      if (open) onClose();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose, open]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="work-dialog"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
    >
      <div className="relative max-h-[90vh] overflow-y-auto border-2 border-ink bg-white text-ink shadow-[8px_8px_0_0_#c52125]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b-2 border-ink bg-white px-5 py-4 md:px-7">
          <div>
            <p id={titleId} className="display text-2xl md:text-3xl">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                {subtitle}
              </p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            aria-label="Cerrar ventana"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 md:p-7">{children}</div>
      </div>
    </dialog>
  );
}
