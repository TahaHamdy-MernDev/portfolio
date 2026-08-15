"use client";

import { useEffect, useRef, useState } from "react";

export interface ThemeOption {
	id: string;
	name: string;
	desc: string;
	bgHex: string;
	accentHex: string;
	borderHex: string;
}

export const THEMES: ThemeOption[] = [
	{
		id: "carbon",
		name: "Carbon Charcoal",
		desc: "Warm graphite dark & electric orange",
		bgHex: "#0f1115",
		accentHex: "#ff5500",
		borderHex: "#232733",
	},
	{
		id: "espresso",
		name: "Amber Espresso",
		desc: "Dark espresso stone & solar amber",
		bgHex: "#131110",
		accentHex: "#ff5500",
		borderHex: "#2d2724",
	},
	{
		id: "gunmetal",
		name: "Gunmetal Slate",
		desc: "Deep steel dark & high-tech orange",
		bgHex: "#0b0f14",
		accentHex: "#ff5500",
		borderHex: "#1e2936",
	},
	{
		id: "light",
		name: "Porcelain Light",
		desc: "Clean minimal white & bright orange",
		bgHex: "#f8f9fa",
		accentHex: "#ea580c",
		borderHex: "#e5e7eb",
	},
];

export function ThemeSwitcher() {
	const [activeTheme, setActiveTheme] = useState<string>("carbon");
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Load saved theme on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("portfolio-theme");
		if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
			setActiveTheme(savedTheme);
			document.documentElement.setAttribute("data-theme", savedTheme);
		} else {
			document.documentElement.setAttribute("data-theme", "carbon");
		}
	}, []);

	// Click outside to close dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const selectTheme = (themeId: string) => {
		setActiveTheme(themeId);
		document.documentElement.setAttribute("data-theme", themeId);
		localStorage.setItem("portfolio-theme", themeId);
		setIsOpen(false);
	};

	const currentTheme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

	return (
		<div ref={menuRef} className="relative inline-block text-left">
			{/* Theme Trigger Button */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface hover:bg-surface-hover transition-colors text-[0.78rem] mono text-ink cursor-pointer select-none"
				aria-label="Switch background theme"
				aria-expanded={isOpen}
			>
				{/* Mini Dual Color Swatch */}
				<span className="flex items-center -space-x-1 shrink-0">
					<span
						className="size-3 rounded-full border border-white/20"
						style={{ backgroundColor: currentTheme.bgHex }}
					/>
					<span
						className="size-3 rounded-full border border-white/20"
						style={{ backgroundColor: currentTheme.accentHex }}
					/>
				</span>
				<span className="hidden md:inline font-medium">
					{currentTheme.name}
				</span>
				<span className="text-[0.68rem] text-muted">▾</span>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-64 rounded-(--radius) bg-surface border border-line p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100">
					<div className="px-2.5 py-1.5 mono text-[0.68rem] font-semibold text-muted-2 uppercase tracking-wider border-b border-line/60 mb-1">
						Background Canvas Tone
					</div>

					<div className="flex flex-col gap-1">
						{THEMES.map((theme) => {
							const isSelected = theme.id === activeTheme;
							return (
								<button
									key={theme.id}
									type="button"
									onClick={() => selectTheme(theme.id)}
									className={`w-full text-left px-2.5 py-2 rounded-md flex items-center justify-between gap-3 transition-colors cursor-pointer ${
										isSelected
											? "bg-surface-hover border border-accent/40 text-ink"
											: "hover:bg-surface-hover/70 text-muted hover:text-ink border border-transparent"
									}`}
								>
									<div className="flex items-center gap-2.5">
										{/* Color Swatch Preview */}
										<div
											className="size-5 rounded-md border flex items-center justify-center shrink-0"
											style={{
												backgroundColor: theme.bgHex,
												borderColor: theme.borderHex,
											}}
										>
											<span
												className="size-2 rounded-full"
												style={{ backgroundColor: theme.accentHex }}
											/>
										</div>

										<div>
											<div className="font-sans font-medium text-[0.84rem] text-ink leading-tight">
												{theme.name}
											</div>
											<div className="mono text-[0.68rem] text-muted leading-tight mt-0.5">
												{theme.desc}
											</div>
										</div>
									</div>

									{isSelected && (
										<span className="text-accent mono font-bold text-xs">
											✓
										</span>
									)}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
