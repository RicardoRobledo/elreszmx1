import {
  useEffect,
  useRef,
  type MouseEvent,
} from "react";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  width,
  height,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
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
      className="image-dialog"
      aria-label={alt}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onClick={onClose}
          className="max-h-[88vh] w-auto max-w-full cursor-zoom-out border-2 border-white/20 bg-ink object-contain"
        />
      ) : null}
    </dialog>
  );
}
