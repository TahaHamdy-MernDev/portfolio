"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface ContactItem {
	label: string;
	value: string;
	href: string;
	code: string;
	external?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
	{
		label: "Email",
		code: "MAIL",
		value: "tahahamdy.dev@gmail.com",
		href: "mailto:tahahamdy.dev@gmail.com",
	},
	{
		label: "WhatsApp / Phone",
		code: "TEL",
		value: "+20 111 491 1898",
		href: "tel:+201114911898",
	},
	{
		label: "LinkedIn",
		code: "IN",
		value: "linkedin.com/in/taha-hamdy",
		href: "https://www.linkedin.com/in/taha-hamdy",
		external: true,
	},
	{
		label: "GitHub",
		code: "GIT",
		value: "github.com/TahaHamdy-MernDev",
		href: "https://github.com/TahaHamdy-MernDev",
		external: true,
	},
];

export function Contact() {
	const [isInView, setIsInView] = useState(false);
	const [copied, setCopied] = useState(false);
	const blockRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = blockRef.current;
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

	const copyEmail = () => {
		navigator.clipboard.writeText("tahahamdy.dev@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2200);
	};

	return (
		<section id="contact" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Pre-Footer Banner Card */}
				<div className="relative mb-12 sm:mb-16 p-6 sm:p-12 rounded-[var(--radius)] overflow-hidden border border-line bg-surface">
					<div className="relative z-10 max-w-[800px]">
						<span className="mono text-[0.72rem] uppercase tracking-wider text-accent-ink font-semibold px-3 py-1 rounded-full bg-accent-soft border border-accent-border inline-block mb-4">
							INITIATE COLLABORATION
						</span>
						<h2 className="font-sans text-[clamp(1.6rem,4vw,2.8rem)] font-bold text-ink tracking-tight leading-tight mb-3 sm:mb-4">
							Your vision, full-stack rigor. Let&apos;s engineer something{" "}
							<span className="gradient-orange font-extrabold">
								exceptional.
							</span>
						</h2>
						<p className="text-muted text-[0.92rem] sm:text-[1.05rem] leading-relaxed mb-6 sm:mb-8">
							Whether you need a greenfield platform architected from scratch,
							database scaling, async queues, or a dedicated senior contributor
							— let&apos;s build it right.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
							<a
								href="mailto:tahahamdy.dev@gmail.com"
								className="btn btn-primary w-full sm:w-auto text-center"
							>
								Send Project Email ↗
							</a>
							<button
								type="button"
								onClick={copyEmail}
								className="btn btn-ghost mono text-[0.8rem] w-full sm:w-auto text-center"
							>
								{copied ? "✓ Copied to Clipboard" : "Copy Email Address"}
							</button>
						</div>
					</div>
				</div>

				<SectionHead title="Initialize Connection" num="06 //" tag="CONTACT" />

				<div
					ref={blockRef}
					className={`contact-block grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 sm:gap-10 items-start transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
					}`}
				>
					<div className="flex flex-col gap-4 sm:gap-5">
						<h3 className="font-sans text-[clamp(1.35rem,3.2vw,2.2rem)] font-bold leading-tight text-ink tracking-tight">
							Direct Communication Channels
						</h3>
						<p className="text-muted text-[0.92rem] sm:text-[0.95rem] leading-relaxed">
							Feel free to reach out directly through any of these communication
							points. I respond to technical inquiries and project briefs within
							24 hours.
						</p>

						<div className="p-3.5 sm:p-4 rounded-[var(--radius)] bg-surface/70 border border-line flex items-center gap-3">
							{/* <span className="" /> */}
							<span className="mono text-[0.74rem] sm:text-[0.78rem] text-muted">
								Current Response Time:{" "}
								<strong className="text-white font-medium">
									&lt; 12 Hours
								</strong>
							</span>
						</div>
					</div>

					{/* Contact Table Grid */}
					<div
						id="contactLinks"
						className="contact-links grid grid-cols-1 gap-px bg-line rounded-[var(--radius)] overflow-hidden"
					>
						{CONTACT_ITEMS.map((item, idx) => (
							<a
								key={item.label}
								href={item.href}
								target={item.external ? "_blank" : undefined}
								rel={item.external ? "noopener noreferrer" : undefined}
								className={`contact-row flex justify-between items-center p-3.5 sm:p-5 bg-surface/90 hover:bg-surface-hover no-underline text-ink group transition-all duration-200 ${
									isInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-3"
								}`}
								style={{
									transitionProperty: "opacity, transform, background-color",
									transitionDuration: "500ms, 500ms, 200ms",
									transitionDelay: `${idx * 60}ms, ${idx * 60}ms, 0ms`,
								}}
							>
								<div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
									<span className="mono text-[0.68rem] sm:text-[0.7rem] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-paper border border-line text-muted-2 font-semibold shrink-0 transition-colors duration-150 group-hover:border-accent-border group-hover:text-accent-ink group-hover:bg-accent-soft">
										{item.code}
									</span>
									<div className="min-w-0">
										<span className="label block text-[0.68rem] sm:text-[0.72rem] uppercase font-semibold text-muted tracking-wider">
											{item.label}
										</span>
										<span className="value mono text-[0.82rem] sm:text-[0.92rem] font-medium text-ink group-hover:text-white transition-colors block break-all sm:break-normal">
											{item.value}
										</span>
									</div>
								</div>

								<span className="arrow text-muted text-base sm:text-lg mono transition-all duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-accent-ink shrink-0 ml-2">
									→
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
