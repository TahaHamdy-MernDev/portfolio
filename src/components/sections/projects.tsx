"use client";

import { ArrowRight, ArrowUpRight, Lock, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface TopologyNode {
	label: string;
	type: "client" | "service" | "queue" | "db" | "infra";
}

interface StatusBadge {
	code: string;
	variant: "live" | "verified" | "private" | "archived" | "case_study";
}

interface ProjectItem {
	id: string;
	slug: string;
	category: "saas" | "realtime" | "ecommerce";
	isLive?: boolean;
	linkUrl?: string;
	image?: string;
	routeUrl: string;
	tags: string[];
	topology?: TopologyNode[];
	telemetry: string;
	statusBadge: StatusBadge;
}

const PROJECTS: ProjectItem[] = [
	{
		id: "nazam",
		slug: "nazam",
		category: "saas",
		image: "/projects/nazam.jpg",
		routeUrl: "https://app.nazam.internal/inventory/fulfillment",
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
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "egapy",
		slug: "egapy",
		category: "saas",
		image: "/projects/egapy.jpg",
		routeUrl: "https://www.egapy.com/ar/dashboard",
		tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
		topology: [
			{ label: "Next.js UI", type: "client" },
			{ label: "NestJS Core", type: "service" },
			{ label: "Prisma ORM", type: "db" },
			{ label: "PostgreSQL", type: "db" },
		],
		telemetry: "PLATFORM: ERP · ARCH: FULL-STACK · DB: POSTGRESQL",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "labaik",
		slug: "labika",
		category: "saas",
		image: "/projects/labika.webp",
		routeUrl: "https://labika.app",
		tags: [
			"Next.js 16",
			"NestJS",
			"TypeORM",
			"MySQL",
			"BullMQ",
			"Redis",
			"Socket.io",
		],
		topology: [
			{ label: "Marketing & App", type: "client" },
			{ label: "NestJS Core API", type: "service" },
			{ label: "BullMQ / Redis", type: "queue" },
			{ label: "MySQL (TypeORM)", type: "db" },
		],
		telemetry:
			"SERVICES: API + DASHBOARD + LANDING · QUEUES: BULLMQ · ESCROW: MULTI-PARTITION",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "buy_from_egypt",
		slug: "buy-from-egypt",
		category: "ecommerce",
		image: "/projects/buy-from-egypt.jpg",
		routeUrl: "https://buyfromegypt.com",
		tags: [
			"Next.js 15",
			"React 19",
			"RTK Query",
			"Socket.io",
			"NestJS",
			"Tailwind v4",
		],
		topology: [
			{ label: "Buyer & Exporter", type: "client" },
			{ label: "NestJS API", type: "service" },
			{ label: "WebSocket Hub", type: "service" },
			{ label: "PostgreSQL", type: "db" },
		],
		telemetry:
			"PLATFORM: CROSS-BORDER B2B · REALTIME: WEBSOCKET · STATE: RTK QUERY",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "coldwell_banker",
		slug: "coldwell-banker",
		category: "saas",
		image: "/projects/coldwell_banker.jpg",
		routeUrl: "https://coldwellbankeregypt.com",
		tags: ["React 18", "Vite", "Mapbox GL", "Node.js", "Express.js", "MongoDB"],
		topology: [
			{ label: "React / Mapbox", type: "client" },
			{ label: "Express API", type: "service" },
			{ label: "Media Storage", type: "service" },
			{ label: "MongoDB", type: "db" },
		],
		telemetry:
			"PLATFORM: NODE.JS / EXPRESS · CLIENT: REACT 18 + VITE + MAPBOX GL · DB: MONGODB",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "gedo",
		slug: "alzcare",
		category: "saas",
		image: "/projects/alzcare.jpg",
		routeUrl: "https://gedo.internal/caregiver/portal",
		tags: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"Node-Cron",
			"FCM",
			"Cloudinary",
		],
		topology: [
			{ label: "Patient & Caregiver", type: "client" },
			{ label: "Express Gateway", type: "service" },
			{ label: "Cron Scheduler", type: "service" },
			{ label: "MongoDB Store", type: "db" },
		],
		telemetry:
			"PLATFORM: HEALTHCARE TELEMETRY · QUEUES: NODE-CRON + FCM · DB: MONGODB",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			variant: "private",
		},
	},
	{
		id: "ecombo",
		slug: "e-combo",
		category: "ecommerce",
		isLive: true,
		linkUrl: "https://ecombo.co",
		image: "/projects/ecombo.jpg",
		routeUrl: "https://ecombo.co",
		tags: [
			"Next.js 14",
			"React 18",
			"Tailwind CSS",
			"Radix UI",
			"Framer Motion",
			"d3-geo",
		],
		topology: [
			{ label: "Acquisition Web", type: "client" },
			{ label: "Supplier Dashboard", type: "client" },
			{ label: "Core Fulfillment", type: "service" },
			{ label: "COD Ledger", type: "db" },
		],
		telemetry:
			"PLATFORM: NEXT.JS 14 · LOCALIZATION: NATIVE RTL · MAPS: MERCATOR PROJECTION",
		statusBadge: {
			code: "[LIVE_PRODUCTION]",
			variant: "live",
		},
	},
];

interface SelectedImageModal {
	src: string;
	title: string;
	arabicTitle?: string;
	routeUrl: string;
}

export function Projects() {
	const t = useTranslations("Projects");

	const filterTabs = [
		{ id: "all", label: t("tabs.all"), count: 7 },
		{ id: "saas", label: t("tabs.saas"), count: 2 },
		{ id: "ecommerce", label: t("tabs.ecommerce"), count: 3 },
		{ id: "realtime", label: t("tabs.realtime"), count: 2 },
	];

	const [activeFilter, setActiveFilter] = useState<string>("all");
	const [isInView, setIsInView] = useState(false);
	const [selectedImage, setSelectedImage] = useState<SelectedImageModal | null>(
		null,
	);
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setSelectedImage(null);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

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
					<div className="flex items-center gap-1.5 px-2 py-1.5 sm:p-1.5 bg-surface/90 backdrop-blur-md border border-line rounded-full overflow-x-auto max-w-full scrollbar-none [-ms-overflow-style:none]">
						{filterTabs.map((tab) => {
							const isActive = activeFilter === tab.id;
							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveFilter(tab.id)}
									className={`mono text-[0.7rem] sm:text-[0.76rem] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
										isActive
											? "bg-accent text-paper font-semibold"
											: "text-muted hover:text-ink hover:bg-surface-hover/80"
									}`}
								>
									<span>{tab.label}</span>
									<span
										className={`text-[0.62rem] sm:text-[0.68rem] px-1.5 py-0.2 rounded-full ${
											isActive
												? "bg-paper/20 text-paper font-bold"
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
								<div className="p-3 sm:p-5 border-b border-line bg-surface-card/95 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
									<div className="flex items-center gap-2 sm:gap-3 flex-wrap">
										<span className="mono text-[0.7rem] sm:text-[0.74rem] font-bold text-accent-ink bg-accent-soft border border-accent-border px-2 sm:px-2.5 py-0.5 rounded-md shrink-0">
											SYS.0
											{PROJECTS.findIndex((p) => p.id === project.id) + 1}
										</span>
										<h3 className="font-sans text-[1.08rem] sm:text-[1.38rem] font-bold text-ink tracking-tight m-0 flex items-center gap-1.5 sm:gap-2">
											<span>{title}</span>
											{arabicTitle && (
												<span className="mono text-[0.72em] font-normal text-muted">
													({arabicTitle})
												</span>
											)}
										</h3>
									</div>

									<div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
										<span className="mono text-[0.7rem] sm:text-[0.74rem] text-muted">
											{role}
										</span>
										<span className="mono text-[0.7rem] text-muted-2">/</span>
										<span className="mono text-[0.66rem] sm:text-[0.72rem] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-paper border border-line text-muted flex items-center gap-1.5">
											{project.isLive && (
												<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
											)}
											{status}
										</span>
									</div>
								</div>

								{/* Card Body — 2-Column Engineered Split (Clean Media on Left, Specs on Right) */}
								<div className="p-4 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
									{/* Left Column: Clean Image Media or No-Preview Placeholder */}
									<div className="lg:col-span-6 w-full">
										{project.image ? (
											<button
												type="button"
												className="w-full text-start group/preview relative border border-line rounded-(--radius) bg-paper overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5 p-0 block aspect-video"
												onClick={() =>
													setSelectedImage({
														src: project.image as string,
														title,
														arabicTitle,
														routeUrl: project.routeUrl,
													})
												}
												aria-label={`${title} preview`}
											>
												<Image
													src={project.image}
													alt={`${title} interface preview`}
													fill
													sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
													className="object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.025]"
												/>
											</button>
										) : (
											<div className="w-full aspect-video rounded-(--radius) border border-dashed border-line/80 bg-paper/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-2.5 relative overflow-hidden select-none">
												<div className="size-9 rounded-full bg-surface-card border border-line flex items-center justify-center text-muted-2">
													<Lock className="size-4 text-muted-2 shrink-0" />
												</div>
												<div className="flex flex-col gap-1 z-10">
													<span className="mono text-[0.76rem] font-bold text-ink uppercase tracking-wider">
														{t("card.no_preview")}
													</span>
													<span className="mono text-[0.68rem] text-muted-2">
														{t("card.proprietary_internal")}
													</span>
												</div>
											</div>
										)}
									</div>

									{/* Right Column: Narrative, Architecture Flow & Stack Matrix */}
									<div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
										<p className="m-0 text-ink text-[0.92rem] sm:text-[0.96rem] leading-relaxed font-normal">
											{desc}
										</p>

										{/* Visual Topology Flow */}
										{project.topology && project.topology.length > 0 && (
											<div className="bg-paper/80 border border-line rounded-(--radius) p-3.5 sm:p-4">
												<div className="mono text-[0.64rem] sm:text-[0.66rem] uppercase tracking-wider text-muted-2 mb-2.5 sm:mb-3 font-semibold flex justify-between items-center">
													<span>{t("card.architecture")}</span>
													<span className="text-[0.58rem] sm:text-[0.6rem] text-accent-ink">
														[PIPELINE_FLOW]
													</span>
												</div>

												<div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
													{project.topology.map((node, nIdx) => (
														<span
															key={node.label}
															className="flex items-center gap-1.5 sm:gap-2"
														>
															<span
																className={`mono text-[0.66rem] sm:text-[0.72rem] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border transition-all duration-150 whitespace-nowrap ${
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
															{nIdx < (project.topology?.length ?? 0) - 1 && (
																<ArrowRight className="size-3 text-muted-2 shrink-0 rtl:rotate-180" />
															)}
														</span>
													))}
												</div>
											</div>
										)}

										{/* Technologies Tag Array */}
										<div className="flex flex-col gap-1.5 sm:gap-2">
											<div className="mono text-[0.64rem] sm:text-[0.66rem] uppercase tracking-wider text-muted-2 font-semibold">
												Technologies & Libraries
											</div>
											<div className="flex flex-wrap gap-1.5">
												{project.tags.map((tag) => (
													<span
														key={tag}
														className="mono text-[0.68rem] sm:text-[0.72rem] px-2 sm:px-2.5 py-0.5 rounded-md bg-surface-card text-muted border border-line select-none hover:border-accent-border hover:text-white transition-colors duration-150"
													>
														{tag}
													</span>
												))}
											</div>
										</div>

										{/* Action Links Bar */}
										<div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-2">
											<Link
												href={`/projects/${project.slug}`}
												className="btn btn-primary text-[0.76rem] sm:text-[0.8rem] py-1.5 px-3.5 inline-flex items-center gap-1.5 font-semibold shadow-sm hover:shadow-accent/20"
											>
												<span>{t("card.case_study")}</span>
												<ArrowRight className="size-3.5 rtl:rotate-180" />
											</Link>

											{project.linkUrl && (
												<a
													href={project.linkUrl}
													target="_blank"
													rel="noreferrer"
													className="btn btn-secondary text-[0.76rem] sm:text-[0.8rem] py-1.5 px-3.5 inline-flex items-center gap-1.5"
												>
													<span>{t("card.explore")}</span>
													<ArrowUpRight className="size-3.5 rtl:-rotate-90" />
												</a>
											)}
										</div>
									</div>
								</div>

								{/* Card Footer Terminal Ribbon */}
								<div className="px-4 sm:px-5 py-2.5 bg-surface-card/90 border-t border-line flex flex-wrap items-center justify-between gap-2 mono text-[0.64rem] sm:text-[0.68rem] text-muted-2">
									<span>{project.telemetry}</span>
									{project.statusBadge.variant === "live" ? (
										<span className="text-status-live font-semibold flex items-center gap-1.5">
											<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
											{project.statusBadge.code}
										</span>
									) : project.statusBadge.variant === "verified" ? (
										<span className="text-accent-ink font-semibold flex items-center gap-1.5">
											{project.statusBadge.code}
										</span>
									) : (
										<span className="text-muted-2 font-medium flex items-center gap-1.5 opacity-85">
											{project.statusBadge.code}
										</span>
									)}
								</div>
							</article>
						);
					})}
				</div>
			</div>

			{/* Fullscreen High-Resolution Lightbox Modal — Optimized for Mobile */}
			{selectedImage && (
				<div className="fixed inset-0 z-100 flex items-center justify-center p-2.5 sm:p-6 md:p-10 animate-fade-in">
					<button
						type="button"
						className="fixed inset-0 bg-paper/90 backdrop-blur-md cursor-default w-full h-full border-none p-0"
						onClick={() => setSelectedImage(null)}
						aria-label={t("card.close_preview")}
					/>
					<div className="relative z-10 max-w-5xl w-full bg-surface border border-line rounded-(--radius) overflow-hidden shadow-2xl flex flex-col">
						{/* Modal Header */}
						<div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-surface-card border-b border-line flex items-center justify-between gap-3">
							<div className="flex items-center gap-2 sm:gap-3">
								<h4 className="font-sans font-bold text-ink text-[0.95rem] sm:text-[1.12rem] m-0 flex items-center gap-2">
									<span>{selectedImage.title}</span>
									{selectedImage.arabicTitle && (
										<span className="text-muted text-[0.8em] font-normal">
											({selectedImage.arabicTitle})
										</span>
									)}
								</h4>
								{selectedImage.routeUrl && (
									<span className="mono text-[0.68rem] text-muted-2 hidden md:inline px-2 py-0.5 rounded bg-paper border border-line">
										{selectedImage.routeUrl}
									</span>
								)}
							</div>

							<button
								type="button"
								onClick={() => setSelectedImage(null)}
								className="mono text-[0.76rem] font-bold px-2.5 py-1 rounded bg-paper border border-line text-muted hover:text-ink hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5"
								aria-label={t("card.close_preview")}
							>
								<X className="size-3.5" />
								<span>{t("card.close_preview")}</span>
							</button>
						</div>

						{/* Modal Image View */}
						<div className="relative aspect-video w-full bg-paper">
							<Image
								src={selectedImage.src}
								alt={selectedImage.title}
								fill
								sizes="(max-width: 1024px) 100vw, 1024px"
								priority
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
