import React from "react";

const MARQUEE_ITEMS = [
	"Enterprise SaaS Architecture",
	"Distributed Node & NestJS Systems",
	"Commerce Operations Engines",
	"Real-Time WebSockets & FCM",
	"Async Queues (BullMQ & Redis)",
	"PostgreSQL & Prisma Hygiene",
	"Next.js 16 (App Router & Turbopack)",
	"Role-Based Access Control (RBAC)",
	"Docker & Zero-Downtime CI/CD",
];

export function Marquee() {
	const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

	return (
		<div
			className="marquee overflow-hidden border-y border-line/90 bg-[#0c0e12]/80 backdrop-blur-md py-4 select-none"
			aria-hidden="true"
		>
			<div
				className="marquee-track mono flex items-center gap-6 w-max text-[0.8rem] text-muted tracking-wider whitespace-nowrap"
				style={{
					animation: "marqueeScroll 40s linear infinite",
				}}
			>
				{items.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Marquee items are strictly static
					<React.Fragment key={`${item}-${index}`}>
						<span className="text-ink font-medium hover:text-accent-ink transition-colors duration-150">
							{item}
						</span>
						<span className="size-1.5 rounded-full bg-accent/60" />
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
