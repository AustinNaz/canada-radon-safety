import type { StaticImageData } from "next/image";

type PlaceholderParams = { label: string; color: string };

export type Product = {
  slug: string;
  name: string;
  price: string;
  description: string;
  details: string;
  image: string | StaticImageData;
  images: (string | StaticImageData)[];
};

const makePlaceholder = ({ label, color }: PlaceholderParams) => {
  const safeColor = color.replace("#", "%23");
  const safeLabel = encodeURIComponent(label);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${safeColor}' stop-opacity='0.9'/><stop offset='100%' stop-color='${safeColor}' stop-opacity='0.6'/></linearGradient></defs><rect width='400' height='300' rx='22' fill='url(%23grad)'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%23ffffff'>${safeLabel}</text></svg>`;
};

export const products: Product[] = [
  {
    slug: "long-term-radon-test-kit",
    name: "Long-Term Radon Test Kit",
    price: "$79.00",
    description:
      "90-day alpha track test with prepaid lab analysis to capture seasonal swings and give a true baseline.",
    details:
      "Place the long-term test kit in the lowest lived-in level for 90 days to capture long-range averages. Ideal for confirming mitigation results or screening before renovations.",
    image: makePlaceholder({ label: "Long-Term Kit", color: "#004d71" }),
    images: [
      makePlaceholder({ label: "Long-Term Kit", color: "#004d71" }),
      makePlaceholder({ label: "Placement Guide", color: "#006d8f" }),
      makePlaceholder({ label: "Lab Report", color: "#008dbd" }),
    ],
  },
  {
    slug: "short-term-radon-test-kit",
    name: "Short-Term Radon Test Kit",
    price: "$49.00",
    description:
      "48-hour charcoal test to spot-check radon quickly—perfect for initial screening.",
    details:
      "Use when you need a fast read on radon levels. Run the kit with closed-house conditions and return it using the included mailer for lab processing.",
    image: makePlaceholder({ label: "48-Hour Kit", color: "#ff7a1a" }),
    images: [
      makePlaceholder({ label: "48-Hour Kit", color: "#ff7a1a" }),
      makePlaceholder({ label: "Setup Steps", color: "#f97316" }),
      makePlaceholder({ label: "Return Mailer", color: "#fb923c" }),
    ],
  },
  {
    slug: "continuous-radon-monitor",
    name: "Continuous Radon Monitor",
    price: "$249.00",
    description:
      "Digital monitor with hour-by-hour readings so you can see trends and spikes in real time.",
    details:
      "Track daily and weekly patterns with a backlit display. Great for monitoring during different HVAC settings and seasons.",
    image: makePlaceholder({ label: "Digital Monitor", color: "#006d8f" }),
    images: [
      makePlaceholder({ label: "Digital Monitor", color: "#006d8f" }),
      makePlaceholder({ label: "Reading Example", color: "#0ea5e9" }),
      makePlaceholder({ label: "Placement", color: "#0ea8c4" }),
    ],
  },
  {
    slug: "mitigation-fan",
    name: "Mitigation Fan (CSA/UL)",
    price: "$329.00",
    description:
      "Low-noise, energy-efficient fan sized for Canadian homes and cold climates.",
    details:
      "Pair with sealed sumps and vent piping for sub-slab depressurization. Rated for continuous duty with freeze-resistant housing.",
    image: makePlaceholder({ label: "Mitigation Fan", color: "#0b7a5c" }),
    images: [
      makePlaceholder({ label: "Mitigation Fan", color: "#0b7a5c" }),
      makePlaceholder({ label: "Install Example", color: "#16a34a" }),
      makePlaceholder({ label: "Vent Discharge", color: "#15803d" }),
    ],
  },
  {
    slug: "sealing-crack-repair-pack",
    name: "Sealing & Crack Repair Pack",
    price: "$89.00",
    description:
      "Polyurethane sealant bundle for slabs, sumps, and service penetrations.",
    details:
      "Prep surfaces, apply the flexible sealant, and finish with radon-rated grommets where needed to tighten up entry points.",
    image: makePlaceholder({ label: "Sealant Pack", color: "#b85c2d" }),
    images: [
      makePlaceholder({ label: "Sealant Pack", color: "#b85c2d" }),
      makePlaceholder({ label: "Crack Prep", color: "#d97706" }),
      makePlaceholder({ label: "Finished Joint", color: "#b45309" }),
    ],
  },
  {
    slug: "basement-ventilation-booster",
    name: "Basement Ventilation Booster",
    price: "$199.00",
    description:
      "Inline ventilation kit to improve air changes and help dilute radon in tight spaces.",
    details:
      "Use in combination with testing to supplement air exchange. Includes variable speed control and backdraft damper.",
    image: makePlaceholder({ label: "Vent Booster", color: "#c53f5b" }),
    images: [
      makePlaceholder({ label: "Vent Booster", color: "#c53f5b" }),
      makePlaceholder({ label: "Duct Routing", color: "#db2777" }),
      makePlaceholder({ label: "Speed Control", color: "#be185d" }),
    ],
  },
];
