"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface FAQItem {
	question: string;
	answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
	{
		question:
			"What is your availability for freelance contracts or engineering roles?",
		answer:
			"I am actively open to engineering contracts, greenfield system builds, and dedicated senior full-stack roles. Operating from Cairo (UTC+2), I maintain reliable daily working overlap with teams across Europe, GCC, and US East Coast time zones.",
	},
	{
		question:
			"What is your primary technology stack and architectural philosophy?",
		answer:
			"My primary stack centers on Next.js 16 (App Router) and TypeScript on the client, paired with NestJS / Node.js on the backend. For data and concurrency, I rely on PostgreSQL, Prisma ORM, Redis, and BullMQ queues, packaged cleanly in Turborepo monorepos with Docker containerization.",
	},
	{
		question: "How do you handle backend scalability and high concurrency?",
		answer:
			"I enforce strict separation between synchronous HTTP request-response cycles and heavy background workloads. High-cost operations (such as PDF/invoice rendering, stock level recalculations, batch webhooks, and push notifications) are offloaded to BullMQ worker queues backed by Redis, backed by query-indexed PostgreSQL tables.",
	},
	{
		question:
			"Can you own a product end-to-end from design specs to cloud deployment?",
		answer:
			"Yes. I frequently manage the entire lifecycle: translating Figma wireframes into responsive React/Tailwind interfaces, designing normalized relational databases, implementing role-based authentication (RBAC), integrating third-party APIs (Stripe, Twilio, FCM), and configuring automated GitHub Actions CI/CD pipelines.",
	},
	{
		question: "How do we get started on a project together?",
		answer:
			"Simply reach out via email (tahahamdy.dev@gmail.com) or connect on LinkedIn. We can schedule a brief technical alignment call to discuss your product architecture, scope out deliverables and timelines, and establish a clear execution plan.",
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const [isInView, setIsInView] = useState(false);
	const faqRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = faqRef.current;
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

	const toggleItem = (idx: number) => {
		setOpenIndex((prev) => (prev === idx ? null : idx));
	};

	return (
		<section id="faq" className="py-24 border-t border-line/80 relative">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead title="Frequently Asked Questions" num="05 //" tag="FAQ" />

				<div
					ref={faqRef}
					className={`flex flex-col gap-3.5 transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}
				>
					{FAQ_ITEMS.map((item, idx) => {
						const isOpen = openIndex === idx;
						return (
							<div
								key={item.question}
								className={`border rounded-[var(--radius)] bg-surface/90 backdrop-blur-md overflow-hidden transition-all duration-200 ${
									isOpen
										? "border-accent/60 bg-surface-hover/80"
										: "border-line hover:border-line-active hover:bg-surface-hover/40"
								}`}
							>
								<button
									type="button"
									onClick={() => toggleItem(idx)}
									className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none"
									aria-expanded={isOpen}
								>
									<span className="font-sans font-semibold text-[0.92rem] sm:text-[1.05rem] text-ink tracking-tight">
										{item.question}
									</span>
									<span
										className={`size-6 sm:size-7 rounded-full flex items-center justify-center border shrink-0 transition-all duration-200 mono text-xs sm:text-sm ${
											isOpen
												? "bg-accent text-white border-accent rotate-90"
												: "bg-paper text-muted border-line"
										}`}
									>
										{isOpen ? "−" : "+"}
									</span>
								</button>

								{isOpen && (
									<div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[0.86rem] sm:text-[0.94rem] leading-relaxed text-muted border-t border-line/40">
										{item.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
