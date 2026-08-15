"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface TopologyNode {
	label: string;
	type: "client" | "service" | "queue" | "db" | "infra";
}

interface ProjectItem {
	id: string;
	title: string;
	arabicTitle?: string;
	category: "saas" | "realtime" | "enterprise";
	role: string;
	status: string;
	isLive?: boolean;
	description: string;
	highlights: string[];
	topology: TopologyNode[];
	link?: {
		text: string;
		url: string;
	};
	disabledLinkText?: string;
	tags: string[];
	telemetry: string;
}

const PROJECTS: ProjectItem[] = [
	{
		id: "nazam",
		title: "Nazam",
		arabicTitle: "نظّم",
		category: "saas",
		role: "Full-Stack · Solo",
		status: "Private Repo",
		description:
			"A centralized commerce-operations engine designed for merchants to combine, synchronize, and track multi-channel inventory, order workflows, and supplier dispatches in real-time.",
		highlights: [
			"Turborepo monorepo architecture with shared UI and validation contracts",
			"BullMQ asynchronous queues for heavy order processing and stock re-indexing",
			"Prisma relational schema with PostgreSQL query optimization & Redis caching",
		],
		topology: [
			{ label: "Next.js", type: "client" },
			{ label: "NestJS API", type: "service" },
			{ label: "BullMQ Queue", type: "queue" },
			{ label: "Redis Cache", type: "db" },
			{ label: "PostgreSQL", type: "db" },
		],
		link: {
			text: "Source Code ↗",
			url: "https://github.com/TahaHamdy-MernDev/nazam",
		},
		tags: [
			"Next.js",
			"NestJS",
			"Turborepo",
			"Prisma",
			"PostgreSQL",
			"Redis",
			"BullMQ",
		],
		telemetry: "ARCH: MONOREPO · DB: POSTGRESQL · QUEUE: BULLMQ · CACHE: REDIS",
	},
	{
		id: "egapy",
		title: "Egapy",
		category: "enterprise",
		role: "Full-Stack · Team of 2",
		status: "Live in Production",
		isLive: true,
		description:
			"A modular Enterprise Resource Planning (ERP) platform built to automate core commercial workflows, accounting ledgers, warehouse inventory, and cross-departmental operations.",
		highlights: [
			"Normalized database architecture ensuring atomic financial and stock transactions",
			"Modular NestJS service layer with role-based access control (RBAC)",
			"High-density responsive data grids with low-latency server-side pagination",
		],
		topology: [
			{ label: "Next.js UI", type: "client" },
			{ label: "NestJS Core", type: "service" },
			{ label: "Prisma ORM", type: "service" },
			{ label: "PostgreSQL", type: "db" },
		],
		link: {
			text: "Visit Platform ↗",
			url: "https://www.egapy.com/ar",
		},
		tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind CSS"],
		telemetry:
			"TYPE: ENTERPRISE ERP · DB: POSTGRESQL · AUTH: RBAC · STATE: LIVE",
	},
	{
		id: "labaik",
		title: "Labaik",
		category: "realtime",
		role: "Full-Stack · Solo",
		status: "Live Platform & Backend",
		isLive: true,
		description:
			'A dedicated proxy pilgrimage platform facilitating "Umrah al-Badal" by connecting families worldwide with vetted pilgrims. Engineered the landing site, operations management dashboard, and real-time backend servicing mobile clients.',
		highlights: [
			"Real-time WebSocket connection handling for instant status updates & journey tracking",
			"Firebase Cloud Messaging (FCM) push integration for time-sensitive notifications",
			"TypeORM transaction handling across MySQL for pilgrim allocations and booking cycles",
		],
		topology: [
			{ label: "Next.js Dashboard", type: "client" },
			{ label: "NestJS Gateway", type: "service" },
			{ label: "Socket.io", type: "service" },
			{ label: "BullMQ Jobs", type: "queue" },
			{ label: "MySQL DB", type: "db" },
		],
		link: {
			text: "Visit Platform ↗",
			url: "https://labaikapp.com/ar",
		},
		tags: [
			"Next.js",
			"NestJS",
			"TypeORM",
			"MySQL",
			"BullMQ",
			"FCM Push",
			"WebSockets",
		],
		telemetry: "REALTIME: SOCKETS · PUSH: FCM · QUEUE: BULLMQ · DB: MYSQL",
	},
	{
		id: "buyfromegypt",
		title: "Buy From Egypt",
		category: "enterprise",
		role: "Front-End Developer",
		status: "Private · Unpublished",
		description:
			"A B2B international trade and export portal connecting verified Egyptian manufacturers with global commercial buyers, featuring structured product directories and integrated ML conversational inquiry routing.",
		highlights: [
			"Modern UI system built with Next.js App Router and accessible shadcn/ui primitives",
			"Integration with custom conversational ML assistant API for live export inquiry handling",
			"Optimized multi-attribute filtering and catalog indexing for global procurement",
		],
		topology: [
			{ label: "Next.js App", type: "client" },
			{ label: "shadcn/ui", type: "client" },
			{ label: "ML Assistant API", type: "service" },
			{ label: "Catalog Engine", type: "service" },
		],
		disabledLinkText: "Private System",
		tags: ["Next.js", "shadcn/ui", "TypeScript", "Tailwind CSS", "ML API"],
		telemetry:
			"DOMAIN: B2B TRADE · AI: ML QUERY ASSISTANT · CLIENT: NEXT.JS 16",
	},
	{
		id: "coldwellbanker",
		title: "Coldwell Banker — New Alex",
		category: "saas",
		role: "Full-Stack · Solo",
		status: "Archived System",
		description:
			"A full-scale real estate discovery engine built for property exploration, featuring interactive map queries, multi-parameter spatial filtering, multilingual i18n support, and automated SEO indexing.",
		highlights: [
			"Dynamic location-based search filtering and property indexing",
			"Express.js REST APIs with MongoDB aggregation pipelines",
			"Cloudinary asset storage and automated image transformations",
		],
		topology: [
			{ label: "Vite Client", type: "client" },
			{ label: "Express.js API", type: "service" },
			{ label: "MongoDB", type: "db" },
			{ label: "Cloudinary CDN", type: "infra" },
		],
		link: {
			text: "GitHub (Partial) ↗",
			url: "https://github.com/TahaHamdy-MernDev/cold-well-banker",
		},
		tags: [
			"Vite",
			"Bootstrap 5",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Cloudinary",
		],
		telemetry:
			"DOMAIN: REAL ESTATE · DB: MONGODB · CDN: CLOUDINARY · STATUS: ARCHIVED",
	},
	{
		id: "gedo",
		title: "GEDO",
		arabicTitle: "جدو",
		category: "realtime",
		role: "Backend Developer",
		status: "Architecture Case Study",
		description:
			"A specialized remote healthcare and Alzheimer's patient monitoring backend, coordinating scheduled medication alerts, daily vital sign logs, and caregiver activity reports.",
		highlights: [
			"REST API endpoints designed for low-latency telemetry logging and metric retrieval",
			"Cron-scheduled background alerts for patient medication timelines",
			"Structured MongoDB schema for caregiver coordination and daily logs",
		],
		topology: [
			{ label: "Caregiver App", type: "client" },
			{ label: "Express Backend", type: "service" },
			{ label: "Cron Engine", type: "queue" },
			{ label: "MongoDB", type: "db" },
		],
		disabledLinkText: "Architecture Case Study",
		tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Cron Tasks"],
		telemetry:
			"DOMAIN: HEALTHCARE · DB: MONGODB · ENGINE: NODE.JS · TYPE: REST API",
	},
];

const FILTER_TABS = [
	{ id: "all", label: "All Systems", count: 6 },
	{ id: "saas", label: "SaaS & Operations", count: 2 },
	{ id: "enterprise", label: "Enterprise & ERP", count: 2 },
	{ id: "realtime", label: "Real-Time & APIs", count: 2 },
];

export function Projects() {
	const [activeFilter, setActiveFilter] = useState<string>("all");
	const [isInView, setIsInView] = useState(false);
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = listRef.current;
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
			{ threshold: 0.05 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	const filteredProjects = useMemo(() => {
		if (activeFilter === "all") return PROJECTS;
		return PROJECTS.filter((p) => p.category === activeFilter);
	}, [activeFilter]);

	return (
		<section id="work" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title="Featured Systems & Case Studies"
					num="01 //"
					tag="WORK"
				/>

				{/* Filter Tabs & System Telemetry Bar */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
					<div className="flex items-center gap-1.5 p-1 sm:p-1.5 bg-surface/90 backdrop-blur-md border border-line rounded-full overflow-x-auto max-w-full [scrollbar-width:none] [-ms-overflow-style:none]">
						{FILTER_TABS.map((tab) => {
							const isActive = activeFilter === tab.id;
							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveFilter(tab.id)}
									className={`mono text-[0.72rem] sm:text-[0.76rem] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
										isActive
											? "bg-accent text-white font-semibold"
											: "text-muted hover:text-ink hover:bg-surface-hover/80"
									}`}
								>
									<span>{tab.label}</span>
									<span
										className={`text-[0.65rem] sm:text-[0.68rem] px-1.5 py-0.2 rounded-full ${
											isActive
												? "bg-white/20 text-white font-bold"
												: "bg-paper text-muted-2"
										}`}
									>
										{tab.count}
									</span>
								</button>
							);
						})}
					</div>

					<div className="mono text-[0.72rem] text-muted-2 hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface/50 border border-line">
						{/* <span className="" /> */}
						<span>SYSTEMS_LOADED: {filteredProjects.length} / 6</span>
					</div>
				</div>

				{/* Modular Bento Work Cards Grid */}
				<div ref={listRef} className="grid grid-cols-1 gap-6 sm:gap-8">
					{filteredProjects.map((project, idx) => (
						<article
							key={project.id}
							className={`project-card bg-surface/90 backdrop-blur-md border border-line hover:border-accent/50 rounded-[var(--radius)] overflow-hidden transition-all duration-300 group ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{
								transitionProperty: "opacity, transform, border-color",
								transitionDuration: "400ms, 400ms, 250ms",
								transitionDelay: `${idx * 60}ms, ${idx * 60}ms, 0ms`,
							}}
						>
							{/* Card Top Header Terminal Bar */}
							<div className="p-3.5 sm:p-5 border-b border-line bg-surface-card/95 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
									<span className="mono text-[0.72rem] sm:text-[0.74rem] font-bold text-accent-ink bg-accent-soft border border-accent-border px-2 sm:px-2.5 py-0.5 rounded-md shrink-0">
										SYS.0{PROJECTS.findIndex((p) => p.id === project.id) + 1}
									</span>
									<h3 className="font-sans text-[1.12rem] sm:text-[1.38rem] font-bold text-ink tracking-tight m-0 flex items-center gap-2">
										<span>{project.title}</span>
										{project.arabicTitle && (
											<span className="mono text-[0.72em] font-normal text-muted">
												({project.arabicTitle})
											</span>
										)}
									</h3>
									<span className="mono text-[0.72rem] text-muted-2 hidden sm:inline">
										/
									</span>
									<span className="mono text-[0.74rem] text-muted hidden sm:inline">
										{project.role}
									</span>
								</div>

								{/* Top Right Status & Action Link */}
								<div className="flex items-center gap-2.5 sm:gap-3 justify-between sm:justify-end w-full sm:w-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-line/40">
									<span className="mono text-[0.7rem] sm:text-[0.72rem] px-2 sm:px-2.5 py-1 rounded-full bg-paper border border-line text-muted flex items-center gap-1.5 sm:gap-2">
										{project.isLive && (
											<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
										)}
										{project.status}
									</span>

									{project.link ? (
										<a
											href={project.link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="mono text-[0.76rem] sm:text-[0.78rem] font-semibold text-ink bg-paper border border-line px-3 sm:px-3.5 py-1 rounded-md transition-all duration-150 hover:bg-accent hover:text-white hover:border-accent no-underline"
										>
											{project.link.text}
										</a>
									) : (
										<span className="mono text-[0.72rem] sm:text-[0.74rem] text-muted-2 border border-dashed border-line px-2 sm:px-2.5 py-1 rounded-md cursor-default">
											{project.disabledLinkText}
										</span>
									)}
								</div>
							</div>

							{/* Card Body — 2-Column Engineered Split */}
							<div className="p-4 sm:p-7 grid grid-cols-1 lg:grid-cols-[1.2fr_1.1fr] gap-5 sm:gap-8 items-start">
								{/* Left: Narrative & Key Architectural Challenges */}
								<div className="flex flex-col gap-3.5 sm:gap-4">
									<p className="m-0 text-ink text-[0.92rem] sm:text-[0.96rem] leading-relaxed font-normal">
										{project.description}
									</p>

									{/* Key Technical Highlights */}
									<div className="bg-paper/80 border border-line rounded-[var(--radius)] p-3.5 sm:p-4 flex flex-col gap-2">
										<div className="mono text-[0.68rem] uppercase font-semibold text-accent-ink tracking-wider flex items-center gap-1.5">
											<span>⚡</span>
											<span>Technical Architecture Highlights</span>
										</div>
										<ul className="m-0 p-0 pl-4 list-disc text-[0.82rem] sm:text-[0.84rem] text-muted space-y-1">
											{project.highlights.map((highlight) => (
												<li key={highlight} className="leading-relaxed">
													{highlight}
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Right: Topology Pipeline & Stack Matrix */}
								<div className="flex flex-col gap-4">
									{/* Interactive Visual Topology Flow */}
									<div className="bg-paper/80 border border-line rounded-[var(--radius)] p-4">
										<div className="mono text-[0.66rem] uppercase tracking-wider text-muted-2 mb-3 font-semibold flex justify-between items-center">
											<span>System Topology Pipeline</span>
											<span className="text-[0.6rem] text-accent-ink">
												[FLOW: CLIENT ➔ DATA]
											</span>
										</div>

										<div className="flex items-center gap-2 flex-wrap">
											{project.topology.map((node, nIdx) => (
												<span
													key={node.label}
													className="flex items-center gap-2"
												>
													<span
														className={`mono text-[0.72rem] px-2.5 py-1 rounded-md border transition-all duration-150 ${
															node.type === "client"
																? "bg-surface text-ink border-line"
																: node.type === "service"
																	? "bg-surface-hover text-ink border-accent/40 font-medium"
																	: node.type === "queue"
																		? "bg-accent-soft text-accent-ink border-accent-border font-semibold"
																		: node.type === "db"
																			? "bg-surface text-ink border-line font-medium"
																			: "bg-surface-card text-muted border-line"
														}`}
													>
														{node.label}
													</span>
													{nIdx < project.topology.length - 1 && (
														<span className="text-muted-2 font-mono text-[0.76rem] font-bold">
															→
														</span>
													)}
												</span>
											))}
										</div>
									</div>

									{/* Technologies Tag Array */}
									<div className="flex flex-col gap-2">
										<div className="mono text-[0.66rem] uppercase tracking-wider text-muted-2 font-semibold">
											Technologies & Libraries
										</div>
										<div className="flex flex-wrap gap-1.5">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="mono text-[0.72rem] px-2.5 py-0.5 rounded-md bg-surface-card text-muted border border-line select-none hover:border-accent-border hover:text-white transition-colors duration-150"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Card Footer Terminal Ribbon */}
							<div className="px-5 py-2.5 bg-surface-card/90 border-t border-line flex flex-wrap items-center justify-between gap-2 mono text-[0.68rem] text-muted-2">
								<span>{project.telemetry}</span>
								<span className="text-accent-ink font-medium">
									[VERIFIED_ARCHITECTURE]
								</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
