"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeadProps {
	title: string;
	num: string;
	tag?: string;
	className?: string;
}

export function SectionHead({
	title,
	num,
	tag,
	className = "",
}: SectionHeadProps) {
	const [isInView, setIsInView] = useState(false);
	const headRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = headRef.current;
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
			{ threshold: 0.3 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={headRef}
			className={`section-head flex flex-wrap items-baseline justify-between gap-4 mb-10 pb-4 border-b border-line ${className}`}
		>
			<div className="flex items-center gap-3">
				<span
					className={`mono text-[0.76rem] font-medium text-muted-2 tracking-wider transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
					}`}
				>
					{num}
				</span>
				<h2 className="section-title text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold font-sans tracking-tight text-ink m-0">
					<span className="inline-block overflow-hidden">
						<span
							className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
								isInView ? "translate-y-0" : "translate-y-[112%]"
							}`}
						>
							{title}
						</span>
					</span>
				</h2>
			</div>

			{tag && (
				<span
					className={`mono text-[0.72rem] uppercase tracking-wider text-muted px-2.5 py-1 rounded-[2px] bg-surface border border-line transition-all duration-500 ease-out delay-100 ${
						isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
					}`}
				>
					{tag}
				</span>
			)}
		</div>
	);
}
