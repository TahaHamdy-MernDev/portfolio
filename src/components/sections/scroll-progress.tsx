"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setProgress(pct);
		};

		window.addEventListener("scroll", updateProgress, { passive: true });
		updateProgress();

		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div
			id="scrollProgress"
			aria-hidden="true"
			style={{ width: `${progress}%` }}
			className="fixed top-0 left-0 h-0.5 bg-accent z-100 transition-[width] duration-75 ease-linear pointer-events-none"
		/>
	);
}
