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
		label: "Phone",
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
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id="contact" className="py-20 border-t border-line">
			<div className="wrap">
				<SectionHead title="Initialize Connection" num="04 //" tag="CONTACT" />

				<div
					ref={blockRef}
					className={`contact-block grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 items-start transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
					}`}
				>
					<div className="flex flex-col gap-5">
						<h3 className="font-sans text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold leading-tight text-ink tracking-tight">
							Building a product that requires full-stack rigor? Let&apos;s
							connect.
						</h3>
						<p className="text-muted text-[0.95rem] leading-relaxed">
							Whether you need a complete system architected from scratch,
							database scaling, async queue integrations, or a dedicated senior
							contributor — my inbox is open.
						</p>

						<div className="pt-2">
							<button
								type="button"
								onClick={copyEmail}
								className="btn btn-ghost mono text-[0.78rem] hover:border-accent hover:text-accent-ink"
							>
								{copied ? "✓ Email Copied" : "Copy Email Address"}
							</button>
						</div>
					</div>

					{/* Contact Table Grid */}
					<div
						id="contactLinks"
						className="contact-links grid grid-cols-1 gap-[1px] bg-line border border-line rounded-[var(--radius)] overflow-hidden"
					>
						{CONTACT_ITEMS.map((item, idx) => (
							<a
								key={item.label}
								href={item.href}
								target={item.external ? "_blank" : undefined}
								rel={item.external ? "noopener noreferrer" : undefined}
								className={`contact-row flex justify-between items-center p-4 md:p-5 bg-surface hover:bg-surface-hover no-underline text-ink group transition-colors duration-150 ${
									isInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-3"
								}`}
								style={{
									transitionProperty: "opacity, transform, background-color",
									transitionDuration: "500ms, 500ms, 150ms",
									transitionDelay: `${idx * 60}ms, ${idx * 60}ms, 0ms`,
								}}
							>
								<div className="flex items-center gap-3">
									<span className="mono text-[0.7rem] px-2 py-0.5 rounded-[2px] bg-paper border border-line text-muted-2 font-semibold transition-colors duration-150 group-hover:border-accent-border group-hover:text-accent-ink">
										{item.code}
									</span>
									<div>
										<span className="label block text-[0.72rem] uppercase font-semibold text-muted tracking-wider">
											{item.label}
										</span>
										<span className="value mono text-[0.9rem] font-medium text-ink">
											{item.value}
										</span>
									</div>
								</div>

								<span className="arrow text-muted text-base mono transition-all duration-150 ease-out group-hover:translate-x-1 group-hover:text-accent">
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
