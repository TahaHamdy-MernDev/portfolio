"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["work", "skills", "process", "about", "contact"];

export function Header() {
	const tNav = useTranslations("Nav");
	const tCommon = useTranslations("Common");

	const navItems = [
		{ id: "work", num: "01", label: tNav("work") },
		{ id: "skills", num: "02", label: tNav("skills") },
		{ id: "process", num: "03", label: tNav("process") },
		{ id: "about", num: "04", label: tNav("about") },
		{ id: "contact", num: "05", label: tNav("contact") },
	];

	const [activeSection, setActiveSection] = useState<string>("work");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [indicatorStyle, setIndicatorStyle] = useState<{
		left: number;
		width: number;
		opacity: number;
	}>({ left: 0, width: 0, opacity: 0 });

	const navContainerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
	const isManualScroll = useRef(false);
	const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);

	// Deterministic scroll spy
	useEffect(() => {
		let rafId: number | null = null;

		const handleScroll = () => {
			if (isManualScroll.current) return;

			if (rafId) cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const scrollY = window.scrollY;
				const windowHeight = window.innerHeight;
				const documentHeight = document.documentElement.scrollHeight;

				// 1. Bottom of page lock (e.g. over footer/contact)
				if (scrollY + windowHeight >= documentHeight - 80) {
					setActiveSection("contact");
					return;
				}

				// 2. Near top (Hero area) default to first section
				const firstSection = document.getElementById(SECTION_IDS[0]);
				if (firstSection && scrollY < firstSection.offsetTop - 200) {
					setActiveSection(SECTION_IDS[0]);
					return;
				}

				// 3. Scan sections top-to-bottom with consistent offset threshold
				const triggerOffset = 140;
				let current = SECTION_IDS[0];

				for (const id of SECTION_IDS) {
					const el = document.getElementById(id);
					if (!el) continue;
					const rect = el.getBoundingClientRect();
					if (rect.top <= triggerOffset) {
						current = id;
					}
				}

				setActiveSection(current);
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId) cancelAnimationFrame(rafId);
			if (manualScrollTimeout.current)
				clearTimeout(manualScrollTimeout.current);
		};
	}, []);

	// Smoothly position active sliding pill on desktop
	useEffect(() => {
		const updateIndicator = () => {
			if (!activeSection) return;
			const targetEl = itemRefs.current.get(activeSection);
			const containerEl = navContainerRef.current;

			if (targetEl && containerEl) {
				const containerRect = containerEl.getBoundingClientRect();
				const targetRect = targetEl.getBoundingClientRect();

				setIndicatorStyle({
					left: targetRect.left - containerRect.left,
					width: targetRect.width,
					opacity: 1,
				});
			}
		};

		updateIndicator();
		window.addEventListener("resize", updateIndicator);
		return () => window.removeEventListener("resize", updateIndicator);
	}, [activeSection]);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	const handleNavClick = (id: string, e?: React.MouseEvent) => {
		if (e) {
			e.preventDefault();
		}
		setActiveSection(id);
		setIsMobileMenuOpen(false);

		isManualScroll.current = true;
		if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);

		const el = document.getElementById(id);
		if (el) {
			const headerEl = document.querySelector("header");
			const headerHeight = headerEl ? headerEl.offsetHeight : 64;
			const targetY =
				el.getBoundingClientRect().top + window.scrollY - headerHeight;
			window.scrollTo({ top: targetY, behavior: "smooth" });
		}

		manualScrollTimeout.current = setTimeout(() => {
			isManualScroll.current = false;
		}, 750);
	};

	return (
		<header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-xl border-b border-line transition-colors duration-200">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3.5 sm:py-4">
				{/* Brand Logo */}
				<a
					href="/"
					onClick={() => setIsMobileMenuOpen(false)}
					className="brand flex items-center gap-2.5 font-sans font-bold text-[0.92rem] sm:text-[0.95rem] text-ink no-underline tracking-tight group"
				>
					<span className="group-hover:text-accent-ink transition-colors duration-200">
						{tCommon("brandTitle")}
					</span>
					<span className="mono hidden sm:inline-block text-[0.7rem] text-muted-2 font-normal">
						{tCommon("brandSubtitle")}
					</span>
				</a>

				{/* Desktop Navigation with Smooth Sliding Pill */}
				<div className="hidden md:flex items-center gap-4">
					<div
						ref={navContainerRef}
						className="navlinks relative flex gap-1 text-[0.85rem] p-1"
					>
						{/* Smooth Sliding Active Pill (100% GPU Composited) */}
						<span
							className="absolute top-1 bottom-1 left-0 rounded-full bg-surface border border-accent transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform pointer-events-none"
							style={{
								transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
								width: `${indicatorStyle.width}px`,
								opacity: indicatorStyle.opacity,
							}}
						/>

						{navItems.map((item) => {
							const isActive = activeSection === item.id;
							return (
								<a
									key={item.id}
									ref={(el) => {
										if (el) itemRefs.current.set(item.id, el);
										else itemRefs.current.delete(item.id);
									}}
									href={`#${item.id}`}
									onClick={(e) => handleNavClick(item.id, e)}
									className={`mono relative z-10 no-underline px-3.5 py-1.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 select-none ${
										isActive
											? "text-ink font-medium"
											: "text-muted hover:text-ink"
									}`}
								>
									<span
										className={`text-[0.7rem] transition-colors duration-200 ${
											isActive
												? "text-accent-ink font-semibold"
												: "text-muted-2"
										}`}
									>
										{item.num}.
									</span>
									<span>{item.label}</span>
								</a>
							);
						})}
					</div>
				</div>

				{/* Mobile Hamburger Toggle */}
				<div className="flex md:hidden items-center">
					<button
						type="button"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="flex items-center justify-center size-9 rounded-lg border border-line bg-surface text-ink hover:bg-surface-hover transition-colors focus:outline-none cursor-pointer"
						aria-label={
							isMobileMenuOpen
								? "Close navigation menu"
								: "Open navigation menu"
						}
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<X className="size-5 text-ink" />
						) : (
							<Menu className="size-5 text-ink" />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Drawer Menu Overlay */}
			{isMobileMenuOpen && (
				<div className="md:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] min-h-[calc(100vh-62px)] bg-paper/98 backdrop-blur-3xl z-50 border-t border-line p-5 pb-10 flex flex-col justify-between overflow-y-auto">
					{/* Navigation Links List */}
					<div className="flex flex-col gap-2.5">
						<div className="mono text-[0.68rem] text-muted-2 uppercase tracking-wider px-2 font-semibold">
							{tNav("systemNavigation")}
						</div>

						{navItems.map((item) => {
							const isActive = activeSection === item.id;
							return (
								<a
									key={item.id}
									href={`#${item.id}`}
									onClick={(e) => handleNavClick(item.id, e)}
									className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-150 no-underline ${
										isActive
											? "bg-surface border-accent text-ink font-semibold"
											: "border-line/60 bg-surface/50 text-muted hover:text-ink hover:bg-surface"
									}`}
								>
									<div className="flex items-center gap-3">
										<span
											className={`mono text-[0.76rem] font-bold px-2 py-0.5 rounded-md ${
												isActive
													? "bg-accent-soft text-accent-ink border border-accent-border"
													: "bg-paper text-muted-2 border border-line"
											}`}
										>
											{item.num}
										</span>
										<span className="font-sans text-[1.05rem] text-ink">
											{item.label}
										</span>
									</div>

									<ArrowRight
										className={`size-4 rtl:rotate-180 transition-colors ${
											isActive ? "text-accent" : "text-muted-2"
										}`}
									/>
								</a>
							);
						})}
					</div>

					{/* Mobile Menu Footer Telemetry & Quick Action */}
					<div className="pt-6 border-t border-line/80 flex flex-col gap-3.5 mt-6">
						<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface/70 border border-line">
							<div className="flex items-center gap-2">
								<span className="size-2 rounded-full bg-status-live animate-pulse" />
								<span className="mono text-[0.74rem] text-muted">
									{tCommon("location")}
								</span>
							</div>
							<span className="mono text-[0.74rem] text-accent-ink font-medium">
								{tCommon("statusBadge")}
							</span>
						</div>

						<button
							type="button"
							onClick={(e) => handleNavClick("contact", e)}
							className="btn btn-primary w-full text-center py-3 cursor-pointer flex items-center justify-center gap-2"
						>
							<span>{tNav("quickAction")}</span>
							<ArrowUpRight className="size-4 rtl:-rotate-90" />
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
