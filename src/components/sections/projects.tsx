"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface TopologyNode {
	label: string;
	type: "client" | "service" | "queue" | "db" | "infra";
}

interface ProjectItem {
	id: string;
	category: "saas" | "realtime" | "ecommerce";
	isLive?: boolean;
	linkUrl?: string;
	tags: string[];
	topology: TopologyNode[];
	telemetry: string;
}

const PROJECTS: ProjectItem[] = [
	{
		id: "nazam",
		category: "saas",
		linkUrl: "https://github.com/TahaHamdy-MernDev/nazam",
		tags: [
			"Next.js",
			"NestJS",
			"Turborepo",
			"Prisma",
			"PostgreSQL",
			"Redis",
			"BullMQ",
		],
		topology: [
			{ label: "Next.js", type: "client" },
			{ label: "NestJS API", type: "service" },
			{ label: "BullMQ Queue", type: "queue" },
			{ label: "Redis Cache", type: "db" },
			{ label: "PostgreSQL", type: "db" },
		],
		telemetry: "ARCH: MONOREPO · DB: POSTGRESQL · QUEUE: BULLMQ · CACHE: REDIS",
	},
	{
		id: "egapy",
		category: "saas",
		isLive: true,
		linkUrl: "https://www.egapy.com/ar",
		tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
		topology: [
			{ label: "Next.js UI", type: "client" },
			{ label: "NestJS Core", type: "service" },
			{ label: "Prisma ORM", type: "db" },
			{ label: "PostgreSQL", type: "db" },
		],
		telemetry: "PLATFORM: ERP · ARCH: FULL-STACK · DB: POSTGRESQL",
	},
	{
		id: "labaik",
		category: "realtime",
		isLive: true,
		linkUrl: "https://labaikapp.com/ar",
		tags: ["Next.js", "NestJS", "TypeORM", "MySQL", "BullMQ", "FCM", "Sockets"],
		topology: [
			{ label: "Next.js Web", type: "client" },
			{ label: "NestJS Core", type: "service" },
			{ label: "BullMQ / FCM", type: "queue" },
			{ label: "MySQL", type: "db" },
		],
		telemetry: "SERVICES: WEB + MOBILE APP + DASHBOARD · QUEUES: BULLMQ",
	},
	{
		id: "buy_from_egypt",
		category: "ecommerce",
		tags: ["Next.js", "shadcn/ui", "ML integration"],
		topology: [
			{ label: "Next.js UI", type: "client" },
			{ label: "ML Model API", type: "service" },
			{ label: "B2B Gateway", type: "infra" },
		],
		telemetry: "DOMAIN: B2B EXPORT · AI: EMBEDDED ML MODEL",
	},
	{
		id: "coldwell_banker",
		category: "ecommerce",
		linkUrl: "https://github.com/TahaHamdy-MernDev/cold-well-banker",
		tags: [
			"Vite",
			"Bootstrap 5",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Cloudinary",
		],
		topology: [
			{ label: "Vite Client", type: "client" },
			{ label: "Node.js API", type: "service" },
			{ label: "MongoDB", type: "db" },
			{ label: "Cloudinary", type: "infra" },
		],
		telemetry: "PLATFORM: REAL ESTATE · MAPS: INTERACTIVE · DB: MONGODB",
	},
	{
		id: "gedo",
		category: "realtime",
		tags: ["Node.js", "Express.js", "MongoDB"],
		topology: [
			{ label: "Caregiver App", type: "client" },
			{ label: "Node.js API", type: "service" },
			{ label: "MongoDB", type: "db" },
		],
		telemetry: "DOMAIN: HEALTHCARE / ALZHEIMER · DB: MONGODB",
	},
];

export function Projects() {
	const t = useTranslations("Projects");

	const filterTabs = [
		{ id: "all", label: t("tabs.all"), count: 6 },
		{ id: "saas", label: t("tabs.saas"), count: 2 },
		{ id: "ecommerce", label: t("tabs.ecommerce"), count: 2 },
		{ id: "realtime", label: t("tabs.realtime"), count: 2 },
	];

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
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				{/* Filter Tabs & System Telemetry Bar */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
					<div className="flex items-center gap-1.5 p-1 sm:p-1.5 bg-surface/90 backdrop-blur-md border border-line rounded-full overflow-x-auto max-w-full scrollbar-none [-ms-overflow-style:none]">
						{filterTabs.map((tab) => {
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
						<span>
							{t("systems_loaded", { count: filteredProjects.length })}
						</span>
					</div>
				</div>

				{/* Modular Bento Work Cards Grid */}
				<div ref={listRef} className="grid grid-cols-1 gap-6 sm:gap-8">
					{filteredProjects.map((project, idx) => {
						const title = t(`items.${project.id}.title`);
						const arabicTitle = t(`items.${project.id}.arabicTitle`);
						const role = t(`items.${project.id}.role`);
						const status = t(`items.${project.id}.status`);
						const desc = t(`items.${project.id}.desc`);
						const hasLink = Boolean(project.linkUrl);
						const linkText = hasLink
							? t(`items.${project.id}.link_text`)
							: null;
						const disabledText = !hasLink
							? t(`items.${project.id}.disabled_link`)
							: null;

						return (
							<article
								key={project.id}
								className={`project-card bg-surface/90 backdrop-blur-md border border-line hover:border-accent/50 rounded-(--radius) overflow-hidden transition-all duration-300 group ${
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
											<span>{title}</span>
											{arabicTitle && (
												<span className="mono text-[0.72em] font-normal text-muted">
													({arabicTitle})
												</span>
											)}
										</h3>
										<span className="mono text-[0.72rem] text-muted-2 hidden sm:inline">
											/
										</span>
										<span className="mono text-[0.74rem] text-muted hidden sm:inline">
											{role}
										</span>
									</div>

									{/* Top Right Status & Action Link */}
									<div className="flex items-center gap-2.5 sm:gap-3 justify-between sm:justify-end w-full sm:w-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-line/40">
										<span className="mono text-[0.7rem] sm:text-[0.72rem] px-2 sm:px-2.5 py-1 rounded-full bg-paper border border-line text-muted flex items-center gap-1.5 sm:gap-2">
											{project.isLive && (
												<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
											)}
											{status}
										</span>

										{hasLink && project.linkUrl ? (
											<a
												href={project.linkUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="mono text-[0.76rem] sm:text-[0.78rem] font-semibold text-ink bg-paper border border-line px-3 sm:px-3.5 py-1 rounded-md transition-all duration-150 hover:bg-accent hover:text-white hover:border-accent no-underline"
											>
												{linkText}
											</a>
										) : (
											<span className="mono text-[0.72rem] sm:text-[0.74rem] text-muted-2 border border-dashed border-line px-2 sm:px-2.5 py-1 rounded-md cursor-default">
												{disabledText}
											</span>
										)}
									</div>
								</div>

								{/* Card Body — 2-Column Engineered Split */}
								<div className="p-4 sm:p-7 grid grid-cols-1 lg:grid-cols-[1.2fr_1.1fr] gap-5 sm:gap-8 items-start">
									{/* Left: Narrative Description */}
									<div className="flex flex-col gap-3.5 sm:gap-4">
										<p className="m-0 text-ink text-[0.92rem] sm:text-[0.96rem] leading-relaxed font-normal">
											{desc}
										</p>
									</div>

									{/* Right: Topology Pipeline & Stack Matrix */}
									<div className="flex flex-col gap-4">
										{/* Visual Topology Flow */}
										<div className="bg-paper/80 border border-line rounded-(--radius) p-4">
											<div className="mono text-[0.66rem] uppercase tracking-wider text-muted-2 mb-3 font-semibold flex justify-between items-center">
												<span>{t("card.architecture")}</span>
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
															<span className="text-muted-2 font-mono text-[0.76rem] font-bold rtl:rotate-180">
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
						);
					})}
				</div>
			</div>
		</section>
	);
}
