import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";

export function Process() {
	const t = useTranslations("Process");

	const steps = [
		{
			num: t("steps.discovery.num"),
			title: t("steps.discovery.title"),
			desc: t("steps.discovery.desc"),
			tag: "ANALYSIS",
		},
		{
			num: t("steps.development.num"),
			title: t("steps.development.title"),
			desc: t("steps.development.desc"),
			tag: "EXECUTION",
		},
		{
			num: t("steps.testing.num"),
			title: t("steps.testing.title"),
			desc: t("steps.testing.desc"),
			tag: "QA / STRESS",
		},
		{
			num: t("steps.deployment.num"),
			title: t("steps.deployment.title"),
			desc: t("steps.deployment.desc"),
			tag: "PRODUCTION",
		},
	];

	return (
		<section id="process" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
					{steps.map((step) => (
						<article
							key={step.num}
							className="process-card p-4 sm:p-6 rounded-(--radius) border bg-surface/50 border-line hover:border-accent hover:bg-surface transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-55 sm:min-h-65 group"
						>
							{/* Step Watermark Number */}
							<div className="absolute top-2 inset-e-3 text-[3.2rem] sm:text-[4rem] font-bold font-mono text-line/40 select-none pointer-events-none group-hover:text-line/60 transition-colors">
								{step.num}
							</div>

							{/* Step Top Header */}
							<div className="relative z-10">
								<div className="flex items-center justify-between mb-4">
									<span className="mono text-[0.72rem] font-bold px-2 py-0.5 rounded bg-paper text-muted-2 border border-line group-hover:bg-accent-soft group-hover:text-accent-ink group-hover:border-accent-border transition-colors">
										PHASE {step.num}
									</span>
									<span className="mono text-[0.66rem] text-muted-2 tracking-wider">
										{step.tag}
									</span>
								</div>

								<h3 className="font-sans text-[1.1rem] sm:text-[1.18rem] font-bold text-ink mb-2 leading-snug group-hover:text-accent-ink transition-colors">
									{step.title}
								</h3>
							</div>

							{/* Step Narrative */}
							<p className="relative z-10 text-muted text-[0.84rem] sm:text-[0.88rem] leading-relaxed mt-4">
								{step.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
