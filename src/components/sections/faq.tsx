"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

export function FAQ() {
	const t = useTranslations("Faq");

	const [openIdx, setOpenIdx] = useState<number | null>(0);
	const [isInView, setIsInView] = useState(false);
	const faqRef = useRef<HTMLDivElement>(null);

	const faqs = [
		{ q: t("items.q1"), a: t("items.a1") },
		{ q: t("items.q2"), a: t("items.a2") },
		{ q: t("items.q3"), a: t("items.a3") },
		{ q: t("items.q4"), a: t("items.a4") },
	];

	useEffect(() => {
		const el = faqRef.current;
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

	const toggleAccordion = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<section id="faq" className="py-24 border-t border-line/80 relative">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div
					ref={faqRef}
					className={`flex flex-col gap-3.5 transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}
				>
					{faqs.map((faq, idx) => {
						const isOpen = openIdx === idx;
						return (
							<div
								key={faq.q}
								className={`rounded-(--radius) border transition-all duration-200 overflow-hidden ${
									isOpen
										? "bg-surface border-accent"
										: "bg-surface/50 border-line hover:border-line/80 hover:bg-surface/80"
								}`}
							>
								<button
									type="button"
									onClick={() => toggleAccordion(idx)}
									className="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
									aria-expanded={isOpen}
								>
									<span className="font-sans font-bold text-[0.98rem] sm:text-[1.05rem] text-ink">
										{faq.q}
									</span>
									<span
										className={`mono text-sm px-2 py-0.5 rounded border shrink-0 transition-transform duration-200 ${
											isOpen
												? "bg-accent-soft text-accent-ink border-accent-border rotate-45"
												: "bg-paper text-muted border-line rotate-0"
										}`}
									>
										+
									</span>
								</button>

								<div
									className={`grid transition-all duration-200 ease-out ${
										isOpen
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-0"
									}`}
								>
									<div className="overflow-hidden">
										<p className="px-4 sm:px-5 pb-5 pt-1 text-muted text-[0.88rem] sm:text-[0.92rem] leading-relaxed border-t border-line/40 mt-1">
											{faq.a}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
