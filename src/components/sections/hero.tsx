"use client";

import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

export function Hero() {
	const t = useTranslations("Hero");

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
	const stat2 = useCountUp(7);
	const stat3 = useCountUp(3);
	const stat4 = useCountUp(100, "%");

	return (
		<section className="hero relative pt-8 sm:pt-16 md:pt-24 pb-10 sm:pb-14 md:pb-16 border-t-0 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Main Headline */}
				<div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
					<h1 className="split-lines text-[clamp(2.15rem,7.5vw,5.5rem)] leading-[1.02] font-bold tracking-[-0.035em] text-ink text-center">
						<span className="line block overflow-hidden">
							<span
								className="inline-block"
								style={{ animationDelay: "0.12s" }}
							>
								{t("headline_line1")}
							</span>
						</span>
						<span className="line block overflow-hidden">
							<span
								className="inline-block gradient-heading"
								style={{ animationDelay: "0.22s" }}
							>
								{t("headline_line2")}
							</span>
						</span>
					</h1>

					{/* Subtitle */}
					<p
						className="hero-sub load-in mt-5 sm:mt-7 w-full max-w-[66ch] mx-auto text-center text-muted text-[0.98rem] sm:text-[1.15rem] md:text-[1.24rem] leading-relaxed font-normal"
						style={{ animationDelay: "0.35s" }}
					>
						{t("subtitle")}
					</p>

					{/* CTA Buttons */}
					<div
						className="hero-cta load-in mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-md sm:max-w-none mx-auto"
						style={{ animationDelay: "0.45s" }}
					>
						<a
							ref={magnetBtnRef}
							id="magnetBtn"
							href="#work"
							onPointerMove={handlePointerMove}
							onPointerLeave={handlePointerLeave}
							className="btn btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
						>
							<span>{t("cta_primary")}</span>
							<ArrowUpRight className="size-4 rtl:-rotate-90" />
						</a>
						<div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								// download
								onClick={(e) => e.preventDefault()}
								aria-disabled="true"
								className="btn btn-ghost cursor-not-allowed w-full sm:w-auto text-center flex items-center justify-center gap-1.5 px-3 py-2.5 text-[0.84rem] sm:text-[0.88rem]"
							>
								<Download className="size-3.5 text-accent-ink shrink-0" />
								<span>{t("cta_resume")}</span>
							</a>
							<a
								href="#contact"
								className="btn btn-ghost w-full sm:w-auto text-center flex items-center justify-center gap-1.5 px-3 py-2.5 text-[0.84rem] sm:text-[0.88rem]"
							>
								<span>{t("cta_secondary")}</span>
								<ArrowRight className="size-3.5 rtl:rotate-180" />
							</a>
						</div>
					</div>
				</div>

				{/* Full-Stack Architecture Layer Strip (2x2 on Mobile, 4 across on Desktop) */}
				<div
					className="stack-strip load-in mt-9 sm:mt-14 border border-line rounded-(--radius) bg-line overflow-hidden"
					style={{ animationDelay: "0.55s" }}
				>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
						<div className="stack-layer bg-surface p-3.5 sm:p-5 transition-all duration-200 hover:bg-surface-hover group">
							<div className="flex items-center justify-between mb-1.5 sm:mb-3">
								<span className="mono text-[0.66rem] sm:text-[0.7rem] uppercase font-semibold text-ink tracking-wider group-hover:text-accent-ink transition-colors">
									{t("layers.client")}
								</span>
								<span className="mono text-[0.62rem] sm:text-[0.68rem] text-muted-2">
									{t("layers.client_tag")}
								</span>
							</div>
							<span className="mono text-[0.74rem] sm:text-[0.82rem] text-muted block leading-relaxed">
								{t("layers.client_stack")}
							</span>
						</div>

						<div className="stack-layer bg-surface p-3.5 sm:p-5 transition-all duration-200 hover:bg-surface-hover group">
							<div className="flex items-center justify-between mb-1.5 sm:mb-3">
								<span className="mono text-[0.66rem] sm:text-[0.7rem] uppercase font-semibold text-ink tracking-wider group-hover:text-accent-ink transition-colors">
									{t("layers.service")}
								</span>
								<span className="mono text-[0.62rem] sm:text-[0.68rem] text-muted-2">
									{t("layers.service_tag")}
								</span>
							</div>
							<span className="mono text-[0.74rem] sm:text-[0.82rem] text-muted block leading-relaxed">
								{t("layers.service_stack")}
							</span>
						</div>

						<div className="stack-layer bg-surface p-3.5 sm:p-5 transition-all duration-200 hover:bg-surface-hover group">
							<div className="flex items-center justify-between mb-1.5 sm:mb-3">
								<span className="mono text-[0.66rem] sm:text-[0.7rem] uppercase font-semibold text-ink tracking-wider group-hover:text-accent-ink transition-colors">
									{t("layers.data")}
								</span>
								<span className="mono text-[0.62rem] sm:text-[0.68rem] text-muted-2">
									{t("layers.data_tag")}
								</span>
							</div>
							<span className="mono text-[0.74rem] sm:text-[0.82rem] text-muted block leading-relaxed">
								{t("layers.data_stack")}
							</span>
						</div>

						<div className="stack-layer bg-surface p-3.5 sm:p-5 transition-all duration-200 hover:bg-surface-hover group">
							<div className="flex items-center justify-between mb-1.5 sm:mb-3">
								<span className="mono text-[0.66rem] sm:text-[0.7rem] uppercase font-semibold text-ink tracking-wider group-hover:text-accent-ink transition-colors">
									{t("layers.infra")}
								</span>
								<span className="mono text-[0.62rem] sm:text-[0.68rem] text-muted-2">
									{t("layers.infra_tag")}
								</span>
							</div>
							<span className="mono text-[0.74rem] sm:text-[0.82rem] text-muted block leading-relaxed">
								{t("layers.infra_stack")}
							</span>
						</div>
					</div>
				</div>

				{/* Telemetry Stats Grid */}
				<div
					className="stats-row load-in mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-px border border-line rounded-(--radius) bg-line overflow-hidden"
					style={{ animationDelay: "0.65s" }}
				>
					<div className="stat bg-surface p-4 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat1.ref}
							className="stat-num mono block text-[1.8rem] sm:text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat1.value}
						</span>
						<span className="stat-label block mt-2 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-muted">
							{t("stats.years_exp")}
						</span>
					</div>

					<div className="stat bg-surface p-4 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat2.ref}
							className="stat-num mono block text-[1.8rem] sm:text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat2.value}
						</span>
						<span className="stat-label block mt-2 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-muted">
							{t("stats.featured_systems")}
						</span>
					</div>

					<div className="stat bg-surface p-4 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat3.ref}
							className="stat-num mono block text-[1.8rem] sm:text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat3.value}
						</span>
						<span className="stat-label block mt-2 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-muted">
							{t("stats.live_products")}
						</span>
					</div>

					<div className="stat bg-surface p-4 sm:p-6 transition-colors duration-150 hover:bg-surface-hover">
						<span
							ref={stat4.ref}
							className="stat-num mono block text-[1.8rem] sm:text-[2.2rem] font-bold leading-none text-ink"
						>
							{stat4.value}
						</span>
						<span className="stat-label block mt-2 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-muted">
							{t("stats.production_ready")}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
