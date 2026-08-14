import React from "react";

const MARQUEE_ITEMS = [
  "SaaS Platforms",
  "E-commerce Systems",
  "Business Dashboards",
  "Payment Integrations",
  "API Architecture",
  "Real-time Systems",
];

export function Marquee() {
  // Repeating the list so seamless infinite scrolling translateX(-50%) works flawlessly
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="marquee overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] py-4 select-none"
      aria-hidden="true"
    >
      <div
        className="marquee-track mono flex items-center gap-3.5 w-max text-[0.82rem] text-[var(--muted)] whitespace-nowrap"
        style={{
          animation: "marqueeScroll 30s linear infinite",
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <span className="text-[var(--muted-2)]">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
