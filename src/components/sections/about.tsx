import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";

export function About() {
	const t = useTranslations("About");

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

	return (
		<section id="about" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div
					id="aboutGrid"
					className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
				>
					{/* Narrative Column */}
					<div className="lg:col-span-6">
						<p className="text-[1.05rem] sm:text-[1.26rem] font-sans font-semibold text-ink leading-relaxed mb-4 sm:mb-6">
							{t("bio_lead")}
						</p>

						<p className="text-muted text-[0.9rem] sm:text-[1.02rem] leading-relaxed mb-6 sm:mb-8">
							{t("bio_body")}
						</p>

						<div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
							<a
								href="#contact"
								className="btn btn-primary text-[0.82rem] sm:text-[0.88rem] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5"
							>
								<span>{t("section_tag")}</span>
								<ArrowRight className="size-3.5 rtl:rotate-180" />
							</a>

							<a
								href="https://github.com/TahaHamdy-MernDev"
								target="_blank"
								rel="noreferrer"
								className="btn btn-ghost text-[0.82rem] sm:text-[0.88rem] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5"
							>
								<span>GitHub Profile</span>
								<ArrowUpRight className="size-3.5 rtl:-rotate-90" />
							</a>
						</div>
					</div>

					{/* Core Principles Column */}
					<div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
						{principles.map((item, idx) => (
							<div
								key={item.title}
								className="p-4 sm:p-6 rounded-(--radius) bg-surface border border-line hover:border-accent/40 transition-all duration-200 group"
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
