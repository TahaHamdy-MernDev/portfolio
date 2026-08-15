"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

export function About() {
	const [isInView, setIsInView] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = containerRef.current;
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
			{ threshold: 0.08 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="about" className="py-20 border-t-0">
			<div className="wrap">
				<SectionHead title="Engineering Philosophy" num="01 //" tag="PROFILE" />

				<div
					ref={containerRef}
					id="aboutGrid"
					className="about-grid grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start"
				>
					{/* Narrative text */}
					<div className="flex flex-col gap-5">
						<p
							className={`text-ink text-[1.05rem] md:text-[1.1rem] leading-relaxed font-normal transition-all duration-500 ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{ transitionDelay: "0ms" }}
						>
							I&apos;m a Full-Stack Developer with 3+ years of hands-on
							experience designing, building, and deploying production web
							applications. I operate across the full software lifecycle — from
							engineering responsive interfaces to architecting scalable APIs,
							databases, asynchronous job queues, and cloud deployments.
						</p>

						<p
							className={`text-muted text-[0.98rem] leading-relaxed transition-all duration-500 ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{ transitionDelay: "70ms" }}
						>
							I specialize in mission-critical business systems: commerce
							engines, ERP backbones, real-time messaging, logistics pipelines,
							and administrative dashboards. I build software that solves
							tangible operational bottlenecks and runs with predictable
							reliability under high concurrency.
						</p>

						<p
							className={`text-muted text-[0.98rem] leading-relaxed transition-all duration-500 ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{ transitionDelay: "140ms" }}
						>
							Beyond shipping features, I prioritize system ergonomics: strict
							TypeScript typings, modular database schemas, zero-drift CI/CD,
							and clean architectural boundaries that make codebases a joy to
							maintain and scale.
						</p>
					</div>

					{/* Architectural Pillars / Telemetry Block */}
					<div
						className={`grid grid-cols-1 gap-[1px] bg-line border border-line rounded-[var(--radius)] overflow-hidden transition-all duration-500 ease-out ${
							isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
						}`}
						style={{ transitionDelay: "180ms" }}
					>
						<div className="bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="mono text-[0.72rem] uppercase font-semibold text-ink mb-1">
								[01] Full-Cycle Architecture
							</div>
							<div className="text-[0.84rem] text-muted">
								End-to-end ownership: Figma specs $\rightarrow$ Next.js UI
								$\rightarrow$ NestJS Services $\rightarrow$ PostgreSQL Storage.
							</div>
						</div>

						<div className="bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="mono text-[0.72rem] uppercase font-semibold text-ink mb-1">
								[02] Async Queues & Concurrency
							</div>
							<div className="text-[0.84rem] text-muted">
								Heavy workload offloading via BullMQ, Redis, and event-driven
								workers.
							</div>
						</div>

						<div className="bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="mono text-[0.72rem] uppercase font-semibold text-ink mb-1">
								[03] Real-Time Systems
							</div>
							<div className="text-[0.84rem] text-muted">
								WebSocket synchronization, instant notifications (FCM), and live
								state management.
							</div>
						</div>

						<div className="bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="mono text-[0.72rem] uppercase font-semibold text-ink mb-1">
								[04] Database Integrity
							</div>
							<div className="text-[0.84rem] text-muted">
								Structured relational schemas, indexing strategies, and ORM
								hygiene with Prisma and TypeORM.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
