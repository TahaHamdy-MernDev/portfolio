import React from "react";

const MARQUEE_ITEMS = [
	"SaaS Architecture",
	"Distributed Systems",
	"Commerce Operations",
	"Real-Time WebSockets",
	"Background Queues (BullMQ)",
	"PostgreSQL & Prisma",
	"NestJS & Next.js 16",
	"ERP & Workflow Engines",
];

export function Marquee() {
	const items = [
		...MARQUEE_ITEMS,
		...MARQUEE_ITEMS,
		...MARQUEE_ITEMS,
		...MARQUEE_ITEMS,
	];

	return (
		<div
			className="marquee overflow-hidden border-y border-line bg-surface py-3.5 select-none"
			aria-hidden="true"
		>
			<div
				className="marquee-track mono flex items-center gap-5 w-max text-[0.78rem] text-muted tracking-wider whitespace-nowrap"
				style={{
					animation: "marqueeScroll 35s linear infinite",
				}}
			>
				{items.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Marquee items are strictly static
					<React.Fragment key={`${item}-${index}`}>
						<span className="text-ink font-medium">{item}</span>
						<span className="text-muted-2 font-mono">/</span>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
