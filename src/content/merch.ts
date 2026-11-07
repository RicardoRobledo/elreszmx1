import type { MerchItem } from "@/types";

export const merchItems: MerchItem[] = [
  {
    id: "fgc-club-tee",
    name: "Playera FGC Club",
    type: "tee",
    description:
      "Algodón, corte relajado y el logo al frente. Para el torneo, el stream o la reta del domingo.",
    tag: "Concepto 01",
  },
  {
    id: "el-resz-hoodie",
    name: "Hoodie El Resz",
    type: "hoodie",
    description:
      "Fleece negro, logo en el pecho y actitud de torneo. La pieza para las noches largas.",
    tag: "Concepto 02",
  },
  {
    id: "combo-mousepad",
    name: "Mousepad Combo",
    type: "mousepad",
    description:
      "Superficie XL para largas sesiones de training mode y combos que no se pueden fallar.",
    tag: "Concepto 03",
  },
  {
    id: "gg-stickers",
    name: "Sticker Pack GG",
    type: "stickers",
    description:
      "Para la laptop, el arcade stick o la puerta del cuarto. El logo y el GG nunca sobran.",
    tag: "Concepto 04",
  },
];

export const merchCopy = {
  eyebrow: "08 / Merch",
  title: "MERCH · DROP 001",
  kicker: "No está a la venta. Todavía.",
  description:
    "Estamos diseñando el primer drop de El Resz MX. Esto es un adelanto de conceptos, no una tienda: un vistazo a lo que viene.",
  note: "Sin carrito, sin precios y sin prisa. Primero el diseño, luego el drop.",
  cta: "Quiero enterarme del drop",
} as const;
