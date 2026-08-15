"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface ProcessStep {
	num: string;
	title: string;
	tagline: string;
	description: string;
	deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
	{
		num: "01",
		title: "Architecture & Schema Modeling",
		tagline:
			"Laying the structural blueprint before writing a single line of business logic.",
		description:
			"I translate product requirements into normalized database schemas, type-safe API contracts, and scalable service boundaries to prevent structural tech debt.",
		deliverables: [
			"Normalized PostgreSQL ERD & Prisma Schema",
			"REST / GraphQL Type Contracts & Validation DTOs",
			"Role-Based Access Control (RBAC) Hierarchy",
		],
	},
	{
		num: "02",
		title: "Full-Stack Implementation",
		tagline:
			"High-throughput service engineering paired with high-performance UI.",
		description:
			"I build out modular NestJS microservices, event-driven async queues (BullMQ/Redis), and fluid Next.js 16 user interfaces with strict TypeScript hygiene.",
		deliverables: [
			"Modular NestJS Service & Controller Layers",
			"Asynchronous Worker Queues for Heavy Jobs",
			"Low-Latency Responsive Data Grids & Dashboards",
		],
	},
	{
		num: "03",
		title: "Cloud Deployment & Observability",
		tagline: "Zero-drift CI/CD, containerization, and production hardening.",
		description:
			"From Dockerizing environments to automating deployment pipelines and setting up query telemetry, I ensure systems launch reliably and stay resilient.",
		deliverables: [
			"Dockerized Multi-Stage Production Builds",
			"Automated GitHub Actions CI/CD Pipelines",
			"Database Query Indexing & Performance Tuning",
		],
	},
];

export function Process() {
	const [isInView, setIsInView] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="process" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title="Engineering Methodology & Workflow"
					num="03 //"
					tag="PROCESS"
				/>

				<div
					ref={sectionRef}
					className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
				>
					{PROCESS_STEPS.map((step, idx) => (
						<div
							key={step.num}
							className={`relative bg-surface/90 backdrop-blur-md border border-line hover:border-accent/50 rounded-[var(--radius)] p-5 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: `${idx * 100}ms` }}
						>
							{/* Background Watermark Numeral */}
							<span className="absolute -bottom-3 -right-2 text-[5rem] sm:text-[6.5rem] font-bold font-mono text-white/[0.03] select-none pointer-events-none group-hover:text-accent/[0.08] transition-colors duration-300">
								{step.num}
							</span>

							<div>
								<div className="flex items-center justify-between mb-4 sm:mb-6">
									<span className="mono text-lg sm:text-xl font-bold text-accent-ink bg-accent-soft border border-accent-border px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md">
										{step.num}
									</span>
									<span className="mono text-[0.68rem] text-muted-2 uppercase tracking-wider">
										PHASE_{step.num}
									</span>
								</div>

								<h3 className="font-sans font-bold text-[1.12rem] sm:text-[1.2rem] text-ink tracking-tight mb-2 group-hover:text-white transition-colors">
									{step.title}
								</h3>

								<p className="text-accent-ink text-[0.8rem] sm:text-[0.82rem] font-medium leading-snug mb-2.5 sm:mb-3">
									{step.tagline}
								</p>

								<p className="text-muted text-[0.85rem] sm:text-[0.88rem] leading-relaxed mb-5 sm:mb-6">
									{step.description}
								</p>
							</div>

							{/* Key Deliverables */}
							<div className="pt-3.5 sm:pt-4 border-t border-line/60">
								<span className="mono text-[0.68rem] uppercase font-semibold text-muted-2 tracking-wider block mb-2">
									Core Milestones
								</span>
								<ul className="m-0 p-0 pl-4 list-disc text-[0.8rem] sm:text-[0.82rem] text-muted space-y-1">
									{step.deliverables.map((item) => (
										<li key={item} className="leading-snug">
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
