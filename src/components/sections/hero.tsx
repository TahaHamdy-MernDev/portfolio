"use client";

import { useCallback, useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

export function Hero() {
	const magnetBtnRef = useRef<HTMLAnchorElement>(null);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent<HTMLAnchorElement>) => {
			const el = magnetBtnRef.current;
			if (!el) return;
			const reduceMotion =
				typeof window !== "undefined" &&
				window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			if (reduceMotion) return;

			const rect = el.getBoundingClientRect();
			const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
			const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
			el.style.transform = `translate(${x}px, ${y}px)`;
		},
		[],
	);

	const handlePointerLeave = useCallback(() => {
		const el = magnetBtnRef.current;
		if (!el) return;
		el.style.transform = "";
	}, []);

	const stat1 = useCountUp(3, "+");
	const stat2 = useCountUp(10);
	const stat3 = useCountUp(100, "%");

	return (
		<section className="hero pt-16 md:pt-24 pb-12 border-t-0">
			<div className="wrap">
				{/* Top Status & Telemetry Header */}
				<div className="flex flex-wrap items-center justify-between gap-3 mb-7">
					<div
						className="load-in inline-flex items-center gap-2.5 text-[0.76rem] font-medium text-ink bg-surface border border-line px-3 py-1.5 rounded-[2px]"
						style={{ animationDelay: "0.05s" }}
					>
						<span className="size-2 rounded-full bg-status-live" />
						<span className="mono text-muted">STATUS:</span>
						<span>Available for hire & contracts</span>
					</div>

					<div
						className="load-in hidden sm:flex items-center gap-3 mono text-[0.72rem] text-muted-2"
						style={{ animationDelay: "0.1s" }}
					>
						<span>LOC: CAIRO (UTC+2)</span>
						<span>·</span>
						<span>FULL_STACK_ARCH</span>
					</div>
				</div>

				{/* Main Headline */}
				<h1 className="split-lines text-[clamp(2.3rem,5.5vw,3.8rem)] leading-[1.08] font-bold tracking-tight text-ink max-w-[18ch]">
					<span className="line block overflow-hidden">
						<span className="inline-block" style={{ animationDelay: "0.12s" }}>
							I build the systems
						</span>
					</span>
					<span className="line block overflow-hidden">
						<span className="inline-block" style={{ animationDelay: "0.22s" }}>
							businesses run on.
						</span>
					</span>
				</h1>

				{/* Subtitle */}
				<p
					className="hero-sub load-in mt-6 max-w-[62ch] text-muted text-[1.05rem] md:text-[1.12rem] leading-relaxed font-normal"
					style={{ animationDelay: "0.35s" }}
				>
					Full-Stack Developer & Systems Architect with 3+ years delivering
					high-throughput SaaS platforms, e-commerce infrastructure, and
					enterprise business workflows — from UI design to distributed backend
					pipelines.
				</p>

				{/* CTA Buttons */}
				<div
					className="hero-cta load-in mt-8 flex gap-3.5 flex-wrap items-center"
					style={{ animationDelay: "0.45s" }}
				>
					<a
						ref={magnetBtnRef}
						id="magnetBtn"
						href="#work"
						onPointerMove={handlePointerMove}
						onPointerLeave={handlePointerLeave}
						className="btn btn-primary"
					>
						Explore Case Studies ↗
					</a>
					<a href="#contact" className="btn btn-ghost">
						Get in touch →
					</a>
				</div>

				{/* Full-Stack Architecture Layer Strip (0-Gradient, 1px Hairline Grid) */}
				<div
					className="stack-strip load-in mt-14 border border-line rounded-[var(--radius)] bg-line overflow-hidden shadow-none"
					style={{ animationDelay: "0.55s" }}
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
						<div className="stack-layer bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="flex items-center justify-between mb-3">
								<span className="mono text-[0.7rem] uppercase font-semibold text-ink tracking-wider">
									01 / Interface
								</span>
								<span className="mono text-[0.68rem] text-muted-2">
									[CLIENT]
								</span>
							</div>
							<span className="mono text-[0.82rem] text-muted block leading-relaxed">
								React · Next.js · TypeScript · Tailwind
							</span>
						</div>

						<div className="stack-layer bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="flex items-center justify-between mb-3">
								<span className="mono text-[0.7rem] uppercase font-semibold text-ink tracking-wider">
									02 / Service
								</span>
								<span className="mono text-[0.68rem] text-muted-2">
									[API_CORE]
								</span>
							</div>
							<span className="mono text-[0.82rem] text-muted block leading-relaxed">
								NestJS · Node.js · GraphQL · BullMQ
							</span>
						</div>

						<div className="stack-layer bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="flex items-center justify-between mb-3">
								<span className="mono text-[0.7rem] uppercase font-semibold text-ink tracking-wider">
									03 / Data
								</span>
								<span className="mono text-[0.68rem] text-muted-2">
									[PERSISTENCE]
								</span>
							</div>
							<span className="mono text-[0.82rem] text-muted block leading-relaxed">
								PostgreSQL · Prisma · Redis · TypeORM
							</span>
						</div>

						<div className="stack-layer bg-surface p-5 transition-colors duration-150 hover:bg-surface-hover">
							<div className="flex items-center justify-between mb-3">
								<span className="mono text-[0.7rem] uppercase font-semibold text-ink tracking-wider">
									04 / Infra
								</span>
								<span className="mono text-[0.68rem] text-muted-2">
									[DEVOPS]
								</span>
							</div>
							<span className="mono text-[0.82rem] text-muted block leading-relaxed">
								Docker · Turborepo · CI/CD · Vercel
							</span>
						</div>
					</div>
				</div>

				{/* Telemetry Stats Grid */}
				<div
					className="stats-row load-in mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px border border-line rounded-[var(--radius)] bg-line overflow-hidden"
					style={{ animationDelay: "0.65s" }}
				>
					<div className="stat bg-surface p-5 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat1.ref}
							className="stat-num mono block text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat1.value}
						</span>
						<span className="stat-label block mt-2 text-[0.78rem] uppercase tracking-wider text-muted">
							Years Experience
						</span>
					</div>

					<div className="stat bg-surface p-5 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat2.ref}
							className="stat-num mono block text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat2.value}+
						</span>
						<span className="stat-label block mt-2 text-[0.78rem] uppercase tracking-wider text-muted">
							Shipped Products
						</span>
					</div>

					<div className="stat bg-surface p-5 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat3.ref}
							className="stat-num mono block text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat3.value}
						</span>
						<span className="stat-label block mt-2 text-[0.78rem] uppercase tracking-wider text-muted">
							Production Architecture
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
