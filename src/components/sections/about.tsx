"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

export function About() {
	const t = useTranslations("About");

	const [isInView, setIsInView] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const principles = [
		{
			title: t("principles.p1_title"),
			desc: t("principles.p1_desc"),
			badge: "SCALABILITY",
		},
		{
			title: t("principles.p2_title"),
			desc: t("principles.p2_desc"),
			badge: "INTEGRITY",
		},
		{
			title: t("principles.p3_title"),
			desc: t("principles.p3_desc"),
			badge: "RESILIENCE",
		},
	];

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
					}
				});
			},
			{ threshold: 0.1 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="about" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div
					ref={containerRef}
					id="aboutGrid"
					className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
				>
					{/* Narrative Column */}
					<div
						className={`lg:col-span-6 transition-all duration-500 ease-out ${
							isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
						}`}
					>
						<p className="text-[1.14rem] sm:text-[1.26rem] font-sans font-semibold text-ink leading-relaxed mb-6">
							{t("bio_lead")}
						</p>

						<p className="text-muted text-[0.96rem] sm:text-[1.02rem] leading-relaxed mb-8">
							{t("bio_body")}
						</p>

						<div className="flex flex-wrap items-center gap-3">
							<a
								href="#contact"
								className="btn btn-primary text-[0.84rem] sm:text-[0.88rem]"
							>
								{t("section_tag")} →
							</a>
							<a
								href="https://github.com/TahaHamdy-MernDev"
								target="_blank"
								rel="noreferrer"
								className="btn btn-ghost text-[0.84rem] sm:text-[0.88rem]"
							>
								GitHub Profile ↗
							</a>
						</div>
					</div>

					{/* Core Principles Column */}
					<div
						className={`lg:col-span-6 flex flex-col gap-4 transition-all duration-500 ease-out delay-100 ${
							isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
						}`}
					>
						{principles.map((item, idx) => (
							<div
								key={item.title}
								className="p-5 sm:p-6 rounded-(--radius) bg-surface border border-line hover:border-accent/40 transition-all duration-200 group"
							>
								<div className="flex items-center justify-between mb-2 sm:mb-3">
									<span className="mono text-[0.72rem] font-bold text-accent-ink tracking-wider">
										0{idx + 1} {"//"}
									</span>
									<span className="mono text-[0.66rem] text-muted-2 uppercase tracking-wider px-2 py-0.5 rounded bg-surface-hover border border-line">
										{item.badge}
									</span>
								</div>
								<h3 className="font-sans text-[1.05rem] sm:text-[1.12rem] font-bold text-ink mb-1.5 group-hover:text-accent-ink transition-colors">
									{item.title}
								</h3>
								<p className="text-muted text-[0.86rem] sm:text-[0.9rem] leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
