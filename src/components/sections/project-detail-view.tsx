"use client";

import { Footer } from "@/components/sections/footer";
import type { ProjectDetail } from "@/data/projects-data";
import {
	Activity,
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	CheckCircle2,
	Cpu,
	Database,
	Layers,
	LayoutDashboard,
	Lock,
	Maximize2,
	Radio,
	Server,
	ShieldCheck,
	Terminal,
	Workflow,
	X,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectDetailViewProps {
	project: ProjectDetail;
	prevProject?: ProjectDetail;
	nextProject?: ProjectDetail;
}

export function ProjectDetailView({
	project,
	prevProject,
	nextProject,
}: ProjectDetailViewProps) {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("sec-overview");

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsLightboxOpen(false);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Active scrollspy observer
	useEffect(() => {
		const sectionIds = [
			"sec-overview",
			"sec-challenge",
			"sec-subsystems",
			"sec-capabilities",
			"sec-pipeline",
			"sec-stack",
		];

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 120;
			for (const id of sectionIds) {
				const el = document.getElementById(id);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Scrollspy / Quick Jump Handler
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const yOffset = -76;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	const navSections = [
		{ id: "sec-overview", label: "Overview" },
		{ id: "sec-challenge", label: "Challenge & Solution" },
		{ id: "sec-subsystems", label: "Subsystems" },
		{ id: "sec-capabilities", label: "Capabilities" },
		{ id: "sec-pipeline", label: "Data Pipeline" },
		{ id: "sec-stack", label: "Tech Stack" },
	];

	// Determine optimal grid column classes for stack categories
	const stackGridClass =
		project.stack.length === 4
			? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
			: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";

	return (
		<div className="flex flex-col min-h-screen relative bg-paper text-ink selection:bg-accent selection:text-paper antialiased">
			{/* High-Contrast Blueprint Background Grid */}
			<div className="fixed inset-0 pointer-events-none bg-blueprint opacity-35 z-0" />

			<div className="relative z-10 flex-1 flex flex-col">
				{/* Top Command Bar & Sticky Navigation */}
				<header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-xl border-b border-line">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
						{/* Back Button */}
						<Link
							href="/#work"
							className="mono text-[0.76rem] sm:text-[0.8rem] text-muted hover:text-ink transition-colors inline-flex items-center gap-2 group px-3.5 py-1.5 rounded-full border border-line bg-surface/70 hover:bg-surface"
						>
							<ArrowLeft className="size-3.5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
							<span className="hidden sm:inline">Systems Directory</span>
							<span className="sm:hidden">Back</span>
						</Link>

						{/* Quick Section Jump Pills (Desktop) */}
						<nav
							aria-label="Case Study Section Navigation"
							className="hidden md:flex items-center gap-1 bg-surface p-1 rounded-full border border-line text-[0.74rem] mono text-muted"
						>
							{navSections.map((sec) => (
								<button
									key={sec.id}
									type="button"
									onClick={() => scrollToSection(sec.id)}
									className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
										activeSection === sec.id
											? "bg-accent-soft text-accent-ink font-semibold border border-accent-border"
											: "hover:text-ink hover:bg-surface-hover border border-transparent"
									}`}
								>
									{sec.label}
								</button>
							))}
						</nav>

						{/* System Badge & Status */}
						<div className="flex items-center gap-2">
							<span className="mono text-[0.7rem] font-bold text-accent-ink bg-accent-soft border border-accent-border px-2.5 py-1 rounded-md">
								{project.sysId}
							</span>

							{project.statusBadge.variant === "live" ? (
								<span className="mono text-[0.68rem] text-status-live border border-status-live/30 bg-status-live/10 px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
									<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
									<span className="hidden sm:inline">LIVE IN PRODUCTION</span>
									<span className="sm:hidden">LIVE</span>
								</span>
							) : (
								<span className="mono text-[0.68rem] text-muted-2 border border-line bg-surface px-2.5 py-1 rounded-full font-medium inline-flex items-center gap-1.5">
									<Lock className="size-3 text-muted-2" />
									<span>PRIVATE SYSTEM</span>
								</span>
							)}
						</div>
					</div>
				</header>

				{/* Main Article Content */}
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24 flex-1">
					{/* ========================================================================= */}
					{/* 00: EXECUTIVE HERO SHOWCASE & SYSTEM SPECS */}
					{/* ========================================================================= */}
					<section id="sec-overview" className="space-y-8 scroll-mt-24">
						{/* Title Header */}
						<div className="space-y-4 max-w-4xl">
							<div className="flex items-center gap-2.5 flex-wrap">
								<span className="mono text-[0.7rem] uppercase tracking-wider text-accent-ink font-bold bg-accent-soft border border-accent-border px-3 py-0.5 rounded-full">
									{project.category === "saas"
										? "Enterprise SaaS Architecture"
										: project.category === "ecommerce"
											? "E-Commerce & Logistics Infrastructure"
											: "Real-Time Telemetry Platform"}
								</span>
								<span className="mono text-[0.7rem] text-muted-2">•</span>
								<span className="mono text-[0.74rem] text-muted font-medium">
									{project.timeline}
								</span>
							</div>

							<div className="space-y-2">
								<h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold font-sans tracking-tight text-ink m-0 leading-[1.1]">
									{project.title}
								</h1>

								{project.arabicTitle && (
									<div className="text-[1.15rem] sm:text-[1.35rem] font-sans text-muted/90 font-medium leading-relaxed">
										{project.arabicTitle}
									</div>
								)}
							</div>

							<p className="text-[1.05rem] sm:text-[1.2rem] text-ink/90 font-normal leading-relaxed m-0 max-w-3xl">
								{project.tagline}
							</p>
						</div>

						{/* Quick Telemetry Spec Bar */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-(--radius) bg-surface/90 border border-line">
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold flex items-center gap-1.5">
									<Cpu className="size-3.5 text-accent-ink" />
									<span>Engineering Role</span>
								</div>
								<div className="mono text-[0.84rem] font-bold text-ink leading-snug">
									{project.role}
								</div>
							</div>

							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold flex items-center gap-1.5">
									<Layers className="size-3.5 text-accent-ink" />
									<span>Architecture Scope</span>
								</div>
								<div className="mono text-[0.82rem] font-medium text-muted leading-snug">
									{project.team}
								</div>
							</div>

							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold flex items-center gap-1.5">
									<Database className="size-3.5 text-accent-ink" />
									<span>Core Backend & DB</span>
								</div>
								<div className="mono text-[0.84rem] font-semibold text-ink leading-snug">
									{project.stack[0]?.technologies.slice(0, 3).join(" · ") ||
										"NestJS · PostgreSQL"}
								</div>
							</div>

							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold flex items-center gap-1.5">
									<Radio className="size-3.5 text-accent-ink" />
									<span>System Status</span>
								</div>
								<div className="mono text-[0.84rem] font-semibold text-accent-ink flex items-center gap-1.5">
									<span className="size-1.5 rounded-full bg-accent-ink" />
									<span>{project.statusBadge.label}</span>
								</div>
							</div>
						</div>

						{/* Hero Interface Blueprint & Action Bar */}
						<div className="space-y-4">
							<div className="relative rounded-(--radius) border border-line bg-surface overflow-hidden shadow-2xl group">
								{/* Browser Mockup Window Bar */}
								<div className="px-4 py-2.5 border-b border-line bg-surface-card flex items-center justify-between gap-3 mono text-[0.7rem] text-muted-2">
									<div className="flex items-center gap-2">
										<div className="flex items-center gap-1.5">
											<div className="size-2.5 rounded-full bg-red-500/80" />
											<div className="size-2.5 rounded-full bg-yellow-500/80" />
											<div className="size-2.5 rounded-full bg-green-500/80" />
										</div>
										<span className="ms-2 text-muted hidden sm:inline">
											https://sys.{project.slug}.internal/architecture/telemetry
										</span>
										<span className="ms-2 text-muted sm:hidden">
											{project.slug}.sys
										</span>
									</div>

									<button
										type="button"
										onClick={() => setIsLightboxOpen(true)}
										className="mono text-[0.7rem] text-muted hover:text-ink px-2.5 py-1 rounded bg-paper border border-line flex items-center gap-1.5 transition-colors cursor-pointer hover:border-accent"
									>
										<Maximize2 className="size-3.5" />
										<span>Expand View</span>
									</button>
								</div>

								{/* Screenshot Preview */}
								<button
									type="button"
									className="relative aspect-16/9 md:aspect-21/9 w-full bg-paper cursor-pointer p-0 border-none block text-start overflow-hidden"
									onClick={() => setIsLightboxOpen(true)}
									aria-label="Click to enlarge image"
								>
									<Image
										src={project.image}
										alt={`${project.title} overview`}
										fill
										priority
										sizes="(max-width: 1280px) 100vw, 1280px"
										className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-paper/60 via-transparent to-transparent opacity-40 pointer-events-none" />
								</button>
							</div>

							{/* Action Links Bar */}
							<div className="flex flex-wrap items-center justify-between gap-3 pt-1">
								<div className="flex flex-wrap items-center gap-3">
									{project.liveUrl ? (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noreferrer"
											className="btn btn-primary px-5 py-2 text-[0.84rem]"
										>
											<span>Visit Live Platform</span>
											<ArrowUpRight className="size-4 rtl:-rotate-90" />
										</a>
									) : (
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-(--radius) bg-surface border border-line text-[0.8rem] mono text-muted-2 select-none">
											<ShieldCheck className="size-4 text-accent-ink" />
											<span>Private Enterprise System</span>
										</div>
									)}
								</div>

								<Link
									href="/#contact"
									className="btn btn-ghost px-4 py-2 text-[0.84rem]"
								>
									<span>Request Technical Consultation</span>
									<ArrowRight className="size-3.5 rtl:rotate-180" />
								</Link>
							</div>
						</div>

						{/* Key Metrics Grid (Full Content, No Truncation) */}
						{project.metrics && project.metrics.length > 0 && (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								{project.metrics.map((m) => (
									<div
										key={m.label}
										className="p-4 rounded-(--radius) bg-surface/90 border border-line hover:border-accent-border transition-colors flex flex-col justify-between gap-2"
									>
										<div className="space-y-1">
											<div className="mono text-[0.66rem] uppercase tracking-wider text-muted-2 font-semibold">
												{m.label}
											</div>
											<div className="mono text-[1.45rem] font-bold text-accent-ink leading-tight">
												{m.value}
											</div>
										</div>
										{m.description && (
											<p className="text-[0.78rem] text-muted leading-relaxed m-0 font-normal">
												{m.description}
											</p>
										)}
									</div>
								))}
							</div>
						)}
					</section>

					{/* ========================================================================= */}
					{/* 01: PROBLEM DIAGNOSIS & ARCHITECTURAL SOLUTION */}
					{/* ========================================================================= */}
					<section id="sec-challenge" className="space-y-6 scroll-mt-24">
						<div className="flex items-center gap-3 pb-3 border-b border-line">
							<span className="mono text-[0.74rem] font-bold text-accent-ink">
								{"01 //"}
							</span>
							<h2 className="text-[1.3rem] sm:text-[1.6rem] font-bold font-sans text-ink m-0">
								Problem Diagnosis & Architectural Solution
							</h2>
						</div>

						{/* Engineering Ownership Scope */}
						<div className="p-5 sm:p-6 rounded-(--radius) bg-surface border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
							<div className="space-y-1">
								<div className="mono text-[0.68rem] uppercase tracking-wider text-muted-2 font-semibold flex items-center gap-2">
									<Cpu className="size-4 text-accent-ink" />
									<span>Engineering Leadership & Architecture Scope</span>
								</div>
								<p className="text-[0.94rem] text-ink leading-relaxed m-0 max-w-4xl">
									{project.myRoleAndChallenge.roleOverview}
								</p>
							</div>
						</div>

						{/* Side-by-Side: The Operational Bottleneck vs Engineered Solution */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{/* The Operational Challenge & Concurrency Bottleneck */}
							<div className="p-6 sm:p-7 rounded-(--radius) bg-surface/90 border border-line flex flex-col justify-between gap-5 relative">
								<div className="space-y-4">
									<div className="flex items-center gap-2 mono text-[0.72rem] uppercase tracking-wider font-bold text-amber-400">
										<Activity className="size-4 shrink-0" />
										<span>The Operational Challenge & Scale Bottleneck</span>
									</div>

									<div className="space-y-3">
										<p className="text-[0.95rem] text-ink/90 leading-relaxed m-0 font-normal">
											{project.theProblem}
										</p>

										{project.myRoleAndChallenge.technicalChallenge && (
											<div className="p-4 rounded-md bg-paper border border-line space-y-1.5">
												<div className="mono text-[0.68rem] font-bold text-amber-400/90 uppercase tracking-wider flex items-center gap-1.5">
													<Zap className="size-3.5" />
													<span>Concurrency & State Contention</span>
												</div>
												<p className="text-[0.86rem] text-muted leading-relaxed m-0">
													{project.myRoleAndChallenge.technicalChallenge}
												</p>
											</div>
										)}
									</div>
								</div>

								<div className="pt-3 border-t border-line/60 flex items-center justify-between mono text-[0.68rem] text-muted-2">
									<span>DIAGNOSIS_LOGGED</span>
									<span className="size-2 rounded-full bg-amber-400" />
								</div>
							</div>

							{/* The Engineered Solution & ACID Guarantees */}
							<div className="p-6 sm:p-7 rounded-(--radius) bg-surface/90 border border-accent/40 flex flex-col justify-between gap-5 relative">
								<div className="space-y-4">
									<div className="flex items-center gap-2 mono text-[0.72rem] uppercase tracking-wider font-bold text-accent-ink">
										<ShieldCheck className="size-4 shrink-0" />
										<span>The Engineered Solution & ACID Guarantees</span>
									</div>

									<p className="text-[0.95rem] text-ink leading-relaxed m-0 font-normal">
										{project.myRoleAndChallenge.architecturalSolution}
									</p>
								</div>

								<div className="pt-3 border-t border-line/60 flex items-center justify-between mono text-[0.68rem] text-muted-2">
									<span>ARCHITECTURAL_PARITY</span>
									<span className="size-2 rounded-full bg-accent-ink" />
								</div>
							</div>
						</div>
					</section>

					{/* ========================================================================= */}
					{/* 02: DEEP-DIVE SUBSYSTEM MODULES */}
					{/* ========================================================================= */}
					{project.myRoleAndChallenge.highlights &&
						project.myRoleAndChallenge.highlights.length > 0 && (
							<section id="sec-subsystems" className="space-y-6 scroll-mt-24">
								<div className="flex items-center gap-3 pb-3 border-b border-line">
									<span className="mono text-[0.74rem] font-bold text-accent-ink">
										{"02 //"}
									</span>
									<h2 className="text-[1.3rem] sm:text-[1.6rem] font-bold font-sans text-ink m-0">
										Key Subsystem Modules
									</h2>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
									{project.myRoleAndChallenge.highlights.map((highlight) => (
										<div
											key={highlight.label}
											className="p-5 rounded-(--radius) bg-surface border border-line hover:border-accent-border transition-all duration-200 flex flex-col justify-between gap-3 group"
										>
											<div className="space-y-2.5">
												<div className="flex items-center justify-between gap-2 flex-wrap">
													<span className="mono text-[0.68rem] px-2.5 py-0.5 rounded bg-accent-soft text-accent-ink border border-accent-border font-semibold">
														{highlight.subsystem}
													</span>
													<Terminal className="size-3.5 text-muted-2 group-hover:text-accent-ink transition-colors" />
												</div>

												<h3 className="mono text-[0.88rem] font-bold text-ink m-0 leading-snug">
													{highlight.label}
												</h3>

												<p className="text-[0.84rem] text-muted leading-relaxed m-0 font-normal">
													{highlight.note}
												</p>
											</div>

											<div className="pt-2 border-t border-line/50 flex items-center justify-between mono text-[0.64rem] text-muted-2">
												<span>MODULE_ISOLATED</span>
												<span className="size-1.5 rounded-full bg-status-live" />
											</div>
										</div>
									))}
								</div>
							</section>
						)}

					{/* ========================================================================= */}
					{/* 03: KEY ARCHITECTURAL CAPABILITIES */}
					{/* ========================================================================= */}
					<section id="sec-capabilities" className="space-y-6 scroll-mt-24">
						<div className="flex items-center gap-3 pb-3 border-b border-line">
							<span className="mono text-[0.74rem] font-bold text-accent-ink">
								{"03 //"}
							</span>
							<h2 className="text-[1.3rem] sm:text-[1.6rem] font-bold font-sans text-ink m-0">
								Key Architectural Capabilities
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
							{project.keyFeatures.map((feature, idx) => {
								// Extract title if separated by colon
								const hasColon = feature.includes(":");
								const title = hasColon ? feature.split(":")[0] : null;
								const body = hasColon
									? feature.substring(feature.indexOf(":") + 1).trim()
									: feature;

								return (
									<div
										key={feature}
										className="p-5 rounded-(--radius) bg-surface/90 border border-line hover:border-accent-border transition-all duration-200 flex flex-col justify-between gap-3 group"
									>
										<div className="space-y-2.5">
											<div className="flex items-center justify-between">
												<span className="mono text-[0.66rem] text-accent-ink font-bold px-2 py-0.5 rounded bg-accent-soft border border-accent-border">
													CAP.0{idx + 1}
												</span>
												<CheckCircle2 className="size-4 text-muted-2 group-hover:text-status-live transition-colors" />
											</div>

											{title ? (
												<div>
													<h3 className="font-sans font-bold text-[0.98rem] text-ink m-0 leading-snug">
														{title}
													</h3>
													<p className="text-[0.86rem] text-muted leading-relaxed font-normal mt-1.5 m-0">
														{body}
													</p>
												</div>
											) : (
												<p className="text-[0.88rem] text-ink leading-relaxed font-normal m-0">
													{body}
												</p>
											)}
										</div>

										<div className="pt-2 border-t border-line/50 flex items-center justify-between mono text-[0.64rem] text-muted-2">
											<span>FEATURE_VERIFIED</span>
											<span className="size-1.5 rounded-full bg-status-live" />
										</div>
									</div>
								);
							})}
						</div>
					</section>

					{/* ========================================================================= */}
					{/* 04: SYSTEM TOPOLOGY & DATA PIPELINE */}
					{/* ========================================================================= */}
					<section id="sec-pipeline" className="space-y-6 scroll-mt-24">
						<div className="flex items-center gap-3 pb-3 border-b border-line">
							<span className="mono text-[0.74rem] font-bold text-accent-ink">
								{"04 //"}
							</span>
							<h2 className="text-[1.3rem] sm:text-[1.6rem] font-bold font-sans text-ink m-0">
								System Topology & Data Pipeline
							</h2>
						</div>

						<div className="p-6 sm:p-7 rounded-(--radius) bg-surface/90 border border-line space-y-6">
							<div className="flex items-center justify-between mono text-[0.7rem] text-muted-2">
								<span className="flex items-center gap-2 font-semibold">
									<Workflow className="size-4 text-accent-ink" />
									<span>END-TO-END TRANSACTIONAL TOPOLOGY</span>
								</span>
								<span className="text-accent-ink font-bold">
									[{project.topology.length} NODES]
								</span>
							</div>

							{/* Balanced Responsive Grid (Adapts nicely for 4, 5, or 7 items) */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{project.topology.map((node, nIdx) => {
									const isLastOdd =
										nIdx === project.topology.length - 1 &&
										project.topology.length % 3 === 1;

									return (
										<div
											key={node.label}
											className={`p-4 sm:p-5 rounded-lg border flex flex-col justify-between gap-3.5 transition-all ${
												isLastOdd ? "md:col-span-2 lg:col-span-3" : ""
											} ${
												node.type === "client"
													? "bg-surface-card border-line"
													: node.type === "service"
														? "bg-surface-hover border-accent/40"
														: node.type === "queue"
															? "bg-accent-soft border-accent-border"
															: node.type === "db"
																? "bg-surface border-line"
																: "bg-surface-card border-line"
											}`}
										>
											<div className="space-y-2">
												<div className="flex items-center justify-between gap-2">
													<span className="mono text-[0.68rem] uppercase font-bold text-accent-ink px-2 py-0.5 rounded bg-paper border border-line inline-block whitespace-nowrap">
														0{nIdx + 1}. {node.type.toUpperCase()}
													</span>
													{node.type === "queue" && (
														<span className="size-2 rounded-full bg-accent-ink animate-pulse" />
													)}
													{node.type === "db" && (
														<Database className="size-3.5 text-muted-2" />
													)}
													{node.type === "service" && (
														<Server className="size-3.5 text-muted-2" />
													)}
													{node.type === "client" && (
														<LayoutDashboard className="size-3.5 text-muted-2" />
													)}
												</div>

												<h3 className="mono text-[0.9rem] font-bold text-ink m-0 leading-snug">
													{node.label}
												</h3>
											</div>

											{node.description && (
												<p className="text-[0.78rem] text-muted leading-relaxed m-0 font-normal">
													{node.description}
												</p>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</section>

					{/* ========================================================================= */}
					{/* 05: TECHNOLOGY MATRIX & STACK SPECIFICATIONS */}
					{/* ========================================================================= */}
					<section id="sec-stack" className="space-y-6 scroll-mt-24">
						<div className="flex items-center gap-3 pb-3 border-b border-line">
							<span className="mono text-[0.74rem] font-bold text-accent-ink">
								{"05 //"}
							</span>
							<h2 className="text-[1.3rem] sm:text-[1.6rem] font-bold font-sans text-ink m-0">
								Technology Matrix & Specifications
							</h2>
						</div>

						{/* Balanced Responsive Grid for Stack Categories */}
						<div className={stackGridClass}>
							{project.stack.map((group, gIdx) => {
								// When 5 items in a 3-col grid, expand the 5th item across 2 columns to fill row 2 (1+2=3)
								const isFifthInFive =
									project.stack.length === 5 && gIdx === 4;

								return (
									<div
										key={group.category}
										className={`p-5 rounded-(--radius) bg-surface/90 border border-line space-y-3.5 ${
											isFifthInFive ? "md:col-span-2 lg:col-span-2" : ""
										}`}
									>
										<div className="mono text-[0.72rem] text-accent-ink uppercase tracking-wider font-bold border-b border-line pb-2.5 flex items-center justify-between">
											<span>{group.category}</span>
											<span className="text-muted-2 font-normal text-[0.66rem]">
												{group.technologies.length} components
											</span>
										</div>

										<div className="flex flex-wrap gap-2">
											{group.technologies.map((tech) => (
												<span
													key={tech}
													className="mono text-[0.74rem] px-2.5 py-1 rounded-md bg-paper text-ink border border-line hover:border-accent-border transition-colors"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								);
							})}
						</div>
					</section>

					{/* ========================================================================= */}
					{/* 06: ADJACENT SYSTEM NAVIGATION CARDS */}
					{/* ========================================================================= */}
					<section className="pt-8 border-t border-line space-y-5">
						<div className="flex items-center justify-between mono text-[0.7rem] text-muted-2 uppercase tracking-wider font-semibold">
							<span>Adjacent System Case Studies</span>
							<span>INDEX_NAV</span>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{prevProject ? (
								<Link
									href={`/projects/${prevProject.slug}`}
									className="p-5 rounded-(--radius) bg-surface/80 border border-line hover:border-accent transition-all group flex flex-col justify-between gap-3 no-underline"
								>
									<div className="flex items-center gap-2 mono text-[0.68rem] text-muted-2">
										<ArrowLeft className="size-3.5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
										<span>PREVIOUS CASE STUDY</span>
									</div>

									<div className="space-y-1">
										<div className="mono text-[0.72rem] text-accent-ink font-semibold">
											{prevProject.sysId}
										</div>
										<div className="font-sans text-[1.12rem] font-bold text-ink">
											{prevProject.title}
										</div>
										<p className="text-[0.82rem] text-muted line-clamp-1 m-0">
											{prevProject.tagline}
										</p>
									</div>
								</Link>
							) : (
								<div className="hidden sm:block" />
							)}

							{nextProject ? (
								<Link
									href={`/projects/${nextProject.slug}`}
									className="p-5 rounded-(--radius) bg-surface/80 border border-line hover:border-accent transition-all group flex flex-col justify-between gap-3 text-end no-underline"
								>
									<div className="flex items-center justify-end gap-2 mono text-[0.68rem] text-muted-2">
										<span>NEXT CASE STUDY</span>
										<ArrowRight className="size-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
									</div>

									<div className="space-y-1">
										<div className="mono text-[0.72rem] text-accent-ink font-semibold">
											{nextProject.sysId}
										</div>
										<div className="font-sans text-[1.12rem] font-bold text-ink">
											{nextProject.title}
										</div>
										<p className="text-[0.82rem] text-muted line-clamp-1 m-0">
											{nextProject.tagline}
										</p>
									</div>
								</Link>
							) : (
								<div className="hidden sm:block" />
							)}
						</div>
					</section>

					{/* ========================================================================= */}
					{/* 07: ENGINEERING CONSULTATION CALL TO ACTION */}
					{/* ========================================================================= */}
					<section className="p-8 sm:p-12 rounded-(--radius) bg-surface border border-accent/40 text-center space-y-6 relative overflow-hidden">
						<div className="max-w-2xl mx-auto space-y-3 relative z-10">
							<span className="mono text-[0.72rem] text-accent-ink uppercase tracking-wider font-bold bg-accent-soft border border-accent-border px-3.5 py-1 rounded-full">
								ARCHITECTURAL CONSULTING & CONTRACTS
							</span>
							<h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold font-sans text-ink m-0">
								Have a Similar Architecture Challenge?
							</h2>
							<p className="text-[0.95rem] sm:text-[1.02rem] text-muted leading-relaxed m-0">
								I specialize in designing and shipping multi-tenant platforms,
								high-throughput background queues, and resilient database
								schemas built for heavy production traffic.
							</p>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-3.5 relative z-10 pt-1">
							<Link
								href="/#contact"
								className="btn btn-primary px-6 py-2.5 text-[0.88rem]"
							>
								<span>Schedule Architecture Discussion</span>
								<ArrowUpRight className="size-4 rtl:-rotate-90" />
							</Link>
							<Link
								href="/#work"
								className="btn btn-secondary px-5 py-2.5 text-[0.88rem]"
							>
								<span>View All Systems</span>
							</Link>
						</div>
					</section>
				</main>

				{/* Global Footer */}
				<Footer />
			</div>

			{/* Fullscreen Lightbox Modal */}
			{isLightboxOpen && (
				<div className="fixed inset-0 z-100 flex items-center justify-center p-2.5 sm:p-6 md:p-10 animate-fade-in">
					<button
						type="button"
						className="fixed inset-0 bg-paper/90 backdrop-blur-md cursor-default w-full h-full border-none p-0"
						onClick={() => setIsLightboxOpen(false)}
						aria-label="Close full preview"
					/>
					<div className="relative z-10 max-w-5xl w-full bg-surface border border-line rounded-(--radius) overflow-hidden shadow-2xl flex flex-col">
						<div className="px-4 sm:px-6 py-3 bg-surface-card border-b border-line flex items-center justify-between gap-3">
							<div className="flex items-center gap-2">
								<h3 className="mono text-[0.84rem] sm:text-[0.92rem] font-bold text-ink m-0">
									{project.title} — Interface Blueprint
								</h3>
							</div>

							<button
								type="button"
								onClick={() => setIsLightboxOpen(false)}
								className="mono text-[0.74rem] font-bold px-2.5 py-1 rounded bg-paper border border-line text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5"
							>
								<X className="size-3.5" />
								<span>Close</span>
							</button>
						</div>

						<div className="relative aspect-video w-full bg-paper">
							<Image
								src={project.image}
								alt={`${project.title} full interface capture`}
								fill
								sizes="(max-width: 1280px) 100vw, 1280px"
								priority
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
