"use client";

import { useEffect, useRef, useState } from "react";

export function Footer() {
	const [isInView, setIsInView] = useState(false);
	const footerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const el = footerRef.current;
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

	return (
		<footer
			ref={footerRef}
			className={`border-t border-line bg-surface-card pt-16 pb-12 transition-all duration-500 ease-out overflow-hidden relative ${
				isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
				{/* Grand Typographic Watermark Logo */}
				<div className="select-none pointer-events-none mb-6 sm:mb-8 tracking-tighter">
					<span className="font-extrabold text-[clamp(2.3rem,10vw,6.5rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-orange-500/10 to-transparent block font-sans">
						TAHA HAMDY
					</span>
				</div>

				{/* Social Links Bar */}
				<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm mono">
					<a
						href="https://github.com/TahaHamdy-MernDev"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted hover:text-white transition-colors duration-150 flex items-center gap-1.5"
					>
						GitHub ↗
					</a>
					<span className="text-muted-2">/</span>
					<a
						href="https://www.linkedin.com/in/taha-hamdy"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted hover:text-white transition-colors duration-150 flex items-center gap-1.5"
					>
						LinkedIn ↗
					</a>
					<span className="text-muted-2">/</span>
					<a
						href="mailto:tahahamdy.dev@gmail.com"
						className="text-muted hover:text-white transition-colors duration-150 flex items-center gap-1.5"
					>
						Email ↗
					</a>
				</div>

				<div className="w-full pt-6 border-t border-line/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.72rem] sm:text-[0.76rem] mono text-muted">
					<div className="flex items-center gap-2">
						{/* <span className="" /> */}
						<span>© 2026 TAHA HAMDY · FULL_STACK_SYSTEMS</span>
					</div>
					<div className="text-muted-2 text-center sm:text-right">
						NEXT.JS 16 · NESTJS · POSTGRESQL · DISTRIBUTED CONCURRENCY
					</div>
				</div>
			</div>
		</footer>
	);
}
