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
		<section id="about" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title="Engineering Philosophy & Background"
					num="04 //"
					tag="ABOUT"
				/>

				<div
					ref={containerRef}
					id="aboutGrid"
					className="about-grid grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr] gap-8 items-start"
				>
					{/* Narrative text */}
					<div className="flex flex-col gap-4 sm:gap-5">
						<p
							className={`text-ink text-[0.98rem] sm:text-[1.05rem] md:text-[1.12rem] leading-relaxed font-normal transition-all duration-500 ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{ transitionDelay: "0ms" }}
						>
							I&apos;m a Full-Stack Developer with 3+ years of hands-on
							experience designing, building, and deploying production web
							applications. I operate across the full software lifecycle — from
							engineering fluid, responsive interfaces to architecting scalable
							APIs, databases, asynchronous job queues, and cloud deployments.
						</p>

						<p
							className={`text-muted text-[0.92rem] sm:text-[0.98rem] leading-relaxed transition-all duration-500 ease-out ${
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
							className={`text-muted text-[0.92rem] sm:text-[0.98rem] leading-relaxed transition-all duration-500 ease-out ${
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
						className={`grid grid-cols-1 gap-px bg-line rounded-[var(--radius)] overflow-hidden transition-all duration-500 ease-out ${
							isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
						}`}
						style={{ transitionDelay: "180ms" }}
					>
						<div className="bg-surface/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-200 hover:bg-surface-hover group">
							<div className="mono text-[0.72rem] sm:text-[0.74rem] uppercase font-semibold text-accent-ink mb-1 group-hover:text-white transition-colors">
								[01] Full-Cycle Architecture
							</div>
							<div className="text-[0.82rem] sm:text-[0.86rem] text-muted leading-relaxed">
								End-to-end ownership: Product Specs $\rightarrow$ Next.js 16 UI
								$\rightarrow$ NestJS Services $\rightarrow$ PostgreSQL Storage.
							</div>
						</div>

						<div className="bg-surface/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-200 hover:bg-surface-hover group">
							<div className="mono text-[0.72rem] sm:text-[0.74rem] uppercase font-semibold text-accent-ink mb-1 group-hover:text-white transition-colors">
								[02] Async Queues & Concurrency
							</div>
							<div className="text-[0.82rem] sm:text-[0.86rem] text-muted leading-relaxed">
								Heavy workload offloading via BullMQ, Redis, and event-driven
								workers to guarantee rapid HTTP response times.
							</div>
						</div>

						<div className="bg-surface/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-200 hover:bg-surface-hover group">
							<div className="mono text-[0.72rem] sm:text-[0.74rem] uppercase font-semibold text-accent-ink mb-1 group-hover:text-white transition-colors">
								[03] Real-Time Systems & State
							</div>
							<div className="text-[0.82rem] sm:text-[0.86rem] text-muted leading-relaxed">
								WebSocket synchronization, instant notifications (FCM), and live
								multitenant state management.
							</div>
						</div>

						<div className="bg-surface/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-200 hover:bg-surface-hover group">
							<div className="mono text-[0.72rem] sm:text-[0.74rem] uppercase font-semibold text-accent-ink mb-1 group-hover:text-white transition-colors">
								[04] Database Integrity & Scaling
							</div>
							<div className="text-[0.82rem] sm:text-[0.86rem] text-muted leading-relaxed">
								Structured relational schemas, query indexing strategies, and
								ORM hygiene with Prisma and TypeORM.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
