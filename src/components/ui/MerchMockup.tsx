import { useId } from "react";
import type { MerchType } from "@/types";

interface MerchMockupProps {
  type: MerchType;
}

export function MerchMockup({ type }: MerchMockupProps) {
  const uid = useId().replace(/:/g, "");
  const softId = `soft-${uid}`;
  const darkId = `dark-${uid}`;
  const shadowId = `shadow-${uid}`;

  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={softId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbfbf8" />
          <stop offset="100%" stopColor="#deded6" />
        </linearGradient>
        <linearGradient id={darkId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#242424" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#000000" floodOpacity="0.18" />
        </filter>
      </defs>

      {type === "tee" ? (
        <g filter={`url(#${shadowId})`}>
          <path
            d="M120 112 L160 92 Q200 118 240 92 L280 112 L338 178 L296 224 L270 196 L270 420 Q200 438 130 420 L130 196 L104 224 L62 178 Z"
            fill={`url(#${softId})`}
            stroke="#0a0a0a"
            strokeWidth="2"
          />
          <path d="M160 92 Q200 140 240 92" fill="none" stroke="#0a0a0a" strokeWidth="2" />
          <path d="M130 196 L104 224 M270 196 L296 224" fill="none" stroke="#0a0a0a" strokeOpacity="0.2" />
          <path d="M150 395 Q200 410 250 395" fill="none" stroke="#0a0a0a" strokeOpacity="0.1" />
          <image
            href="/brand/logo-trimmed.png"
            x="136"
            y="200"
            width="128"
            height="65"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x="200"
            y="300"
            textAnchor="middle"
            fontFamily="Anton, sans-serif"
            fontSize="15"
            letterSpacing="5"
            fill="#c52125"
          >
            FGC CLUB
          </text>
          <text
            x="200"
            y="322"
            textAnchor="middle"
            fontFamily="Space Mono, monospace"
            fontSize="8"
            letterSpacing="3"
            fill="#0a0a0a"
            opacity="0.45"
          >
            MÉXICO / LATAM
          </text>
        </g>
      ) : null}

      {type === "hoodie" ? (
        <g filter={`url(#${shadowId})`}>
          <path
            d="M138 130 Q132 96 166 86 Q200 78 234 86 Q268 96 262 130 L302 152 L346 230 L300 266 L278 236 L282 430 Q200 450 118 430 L122 236 L100 266 L54 230 L98 152 Z"
            fill={`url(#${darkId})`}
            stroke="#0a0a0a"
            strokeWidth="2"
          />
          <path d="M166 86 Q200 132 234 86" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="2" />
          <path d="M170 96 Q200 144 230 96" fill="none" stroke="#3a3a3a" strokeWidth="2" />
          <path d="M174 124 L170 192 M226 124 L230 192" stroke="#c52125" strokeWidth="3" />
          <rect x="158" y="250" width="84" height="64" fill="#0a0a0a" opacity="0.8" />
          <path d="M158 250 L242 314 M242 250 L158 314" stroke="#1f1f1f" strokeWidth="2" />
          <image
            href="/brand/logo-allwhite-trimmed.png"
            x="142"
            y="192"
            width="116"
            height="59"
            preserveAspectRatio="xMidYMid meet"
          />
          <path d="M150 414 Q200 430 250 414" fill="none" stroke="#2c2c2c" strokeWidth="2" />
        </g>
      ) : null}

      {type === "mousepad" ? (
        <g filter={`url(#${shadowId})`} transform="rotate(-5 200 250)">
          <rect x="40" y="135" width="320" height="235" rx="14" fill="#0b0b0b" stroke="#c52125" strokeWidth="4" />
          <rect
            x="54"
            y="149"
            width="292"
            height="207"
            rx="8"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.15"
            strokeDasharray="4 7"
          />
          <image
            href="/brand/logo-allwhite-trimmed.png"
            x="96"
            y="198"
            width="208"
            height="105"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x="200"
            y="330"
            textAnchor="middle"
            fontFamily="Space Mono, monospace"
            fontSize="10"
            letterSpacing="5"
            fill="#c52125"
          >
            COMBO XL
          </text>
          <path d="M70 170 h24 M82 158 v24" stroke="#c52125" strokeWidth="2" />
          <path d="M306 355 h24 M318 343 v24" stroke="#c52125" strokeWidth="2" />
        </g>
      ) : null}

      {type === "stickers" ? (
        <g filter={`url(#${shadowId})`}>
          <g transform="rotate(-4 200 250)">
            <rect x="62" y="92" width="276" height="316" rx="18" fill="#f9f9f5" stroke="#0a0a0a" strokeWidth="3" />
            <rect x="78" y="108" width="244" height="284" rx="10" fill="none" stroke="#0a0a0a" strokeOpacity="0.12" strokeDasharray="5 7" />
          </g>

          <g transform="rotate(-8 140 178)">
            <circle cx="140" cy="178" r="64" fill="#c52125" />
            <image
              href="/brand/logo-allwhite-trimmed.png"
              x="92"
              y="155"
              width="96"
              height="48"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>

          <g transform="rotate(8 268 190)">
            <rect x="218" y="140" width="100" height="100" rx="50" fill="#0a0a0a" />
            <text
              x="268"
              y="202"
              textAnchor="middle"
              fontFamily="Anton, sans-serif"
              fontSize="38"
              fill="#ffffff"
            >
              GG
            </text>
          </g>

          <g transform="rotate(4 200 332)">
            <rect x="92" y="288" width="216" height="76" rx="10" fill="#c52125" />
            <text
              x="200"
              y="337"
              textAnchor="middle"
              fontFamily="Anton, sans-serif"
              fontSize="26"
              letterSpacing="2"
              fill="#ffffff"
            >
              FGC CLUB
            </text>
          </g>

          <text
            x="200"
            y="386"
            textAnchor="middle"
            fontFamily="Space Mono, monospace"
            fontSize="8"
            letterSpacing="3"
            fill="#0a0a0a"
            opacity="0.45"
          >
            EL RESZ MX · STICKER PACK
          </text>
        </g>
      ) : null}
    </svg>
  );
}
