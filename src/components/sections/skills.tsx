"use client";

import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";

interface SkillCategory {
	title: string;
	code: string;
	description: string;
	skills: string[];
	fullWidth?: boolean;
}

export function Skills() {
	const t = useTranslations("Skills");
	const categoriesData: SkillCategory[] = t.raw("categories_data") || [];

	return (
		<section id="skills" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div
					id="skillsGrid"
					className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-(--radius) overflow-hidden"
				>
					{categoriesData.map((category, idx) => {
						const isLast = idx === categoriesData.length - 1;
						return (
							<div
								key={category.code}
								className={`skill-group bg-surface/90 backdrop-blur-md p-4 sm:p-7 transition-all duration-200 hover:bg-surface-hover ${
									isLast ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
								}`}
							>
								<div className="flex items-center justify-between mb-1.5 sm:mb-2">
									<h3 className="font-sans font-semibold text-[0.88rem] sm:text-[0.92rem] text-ink tracking-tight">
										{category.title}
									</h3>
									<span className="mono text-[0.62rem] sm:text-[0.68rem] text-accent-ink font-medium px-2 py-0.5 rounded-full bg-accent-soft border border-accent-border">
										[{category.code}]
									</span>
								</div>

								<p className="text-muted text-[0.78rem] sm:text-[0.82rem] leading-relaxed mb-3 sm:mb-4">
									{category.description}
								</p>

								<div className="chip-row flex flex-wrap gap-1.5 sm:gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className="chip mono text-[0.68rem] sm:text-[0.76rem] px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-paper border border-line text-muted transition-all duration-150 ease-out hover:border-accent/60 hover:text-white cursor-default select-none"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
