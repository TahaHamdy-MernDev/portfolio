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
			className={`border-t border-line bg-surface transition-all duration-500 ease-out ${
				isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
			}`}
		>
			<div className="wrap py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.76rem] mono text-muted">
				<div className="flex items-center gap-2">
					<span className="size-1.5 rounded-full bg-status-live" />
					<span>© 2026 TAHA HAMDY · ZERO_GRADIENT_ENGINEERED</span>
				</div>
				<div className="text-muted-2">
					NEXT.JS 16 · NESTJS · POSTGRESQL · DISTRIBUTED ARCHITECTURE
				</div>
			</div>
		</footer>
	);
}
