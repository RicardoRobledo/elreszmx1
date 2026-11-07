import type { SocialIcon as SocialIconName } from "@/types";

interface SocialIconProps {
  icon: SocialIconName;
  className?: string;
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    className,
  } as const;

  switch (icon) {
    case "youtube":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2.5" y="5" width="19" height="14" rx="4" />
          <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "twitch":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 3h16v11l-5 5h-4l-3 3v-3H4V3Z" />
          <path d="M10 7v5M16 7v5" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.5 3c.4 2.1 1.7 3.4 3.8 3.7v3c-1.4 0-2.7-.4-3.8-1.2v6.2c0 3.3-2.2 5.3-5.2 5.3-2.8 0-5-2-5-4.8 0-3 2.2-5 5.2-4.8v3c-1.3-.2-2.3.6-2.3 1.8 0 1.1.9 1.9 2.1 1.9 1.3 0 2.2-.9 2.2-2.4V3h3Z" />
        </svg>
      );
    case "discord":
      return (
        <svg {...common} fill="currentColor">
          <path d="M19.3 5.3A16.4 16.4 0 0 0 15.4 4l-.5 1a15 15 0 0 0-5.8 0L8.6 4a16.4 16.4 0 0 0-3.9 1.3C2.2 9.2 1.5 13 1.8 16.8a16.7 16.7 0 0 0 5 2.5l1.2-1.9a10 10 0 0 1-1.6-.8l.4-.3a11.8 11.8 0 0 0 10.4 0l.4.3c-.5.3-1 .6-1.6.8l1.2 1.9a16.7 16.7 0 0 0 5-2.5c.4-4.4-.7-8.1-2.9-11.5ZM8.7 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
