"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
	{ id: "about", num: "01", label: "About" },
	{ id: "skills", num: "02", label: "Skills" },
	{ id: "work", num: "03", label: "Work" },
	{ id: "contact", num: "04", label: "Contact" },
];

export function Header() {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const sections = NAV_ITEMS.map((item) =>
			document.getElementById(item.id),
		).filter(Boolean) as HTMLElement[];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "-40% 0px -40% 0px" },
		);

		sections.forEach((s) => {
			observer.observe(s);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-md border-b border-line">
			<nav className="wrap flex items-center justify-between py-4!">
				<a
					href="/"
					className="brand flex items-center gap-2.5 font-sans font-bold text-[0.95rem] text-ink no-underline tracking-tight"
				>
					<span className="size-2 rounded-full bg-accent" />
					<span>TAHA HAMDY</span>
					<span className="mono hidden sm:inline-block text-[0.7rem] text-muted-2 font-normal">
						/ FULL-STACK
					</span>
				</a>

				<div className="navlinks flex gap-2 sm:gap-6 text-[0.8rem] sm:text-[0.85rem]">
					{NAV_ITEMS.map((item) => {
						const isActive = activeSection === item.id;
						return (
							<a
								key={item.id}
								href={`#${item.id}`}
								className={`mono relative no-underline px-2.5 py-1 rounded-[2px] transition-colors duration-150 flex items-center gap-1.5 ${
									isActive
										? "text-ink bg-surface border border-accent-border font-medium"
										: "text-muted hover:text-ink"
								}`}
							>
								<span
									className={`text-[0.7rem] hidden sm:inline ${
										isActive ? "text-accent font-semibold" : "text-muted-2"
									}`}
								>
									{item.num}.
								</span>
								<span>{item.label}</span>
							</a>
						);
					})}
				</div>
			</nav>
		</header>
	);
}
