"use client";

import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	Clock,
	Filter,
	LayoutGrid,
	Lock,
	Search,
	ShieldCheck,
	Table,
	Terminal,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Footer } from "@/components/sections/footer";
import { ALL_PROJECTS } from "@/data/projects-data";

const POPULAR_STACK_FILTERS = [
	"NestJS",
	"Next.js",
	"PostgreSQL",
	"MongoDB",
	"Redis",
	"Socket.io",
	"TypeScript",
];

export function ProjectsCatalog() {
	const tCat = useTranslations("ProjectsCatalog");
	const tCommon = useTranslations("Common");
	const tProj = useTranslations("Projects");

	const categories = useMemo(
		() => [
			{ id: "all", label: tProj("tabs.all") },
			{ id: "saas", label: tProj("tabs.saas") },
			{ id: "ecommerce", label: tProj("tabs.ecommerce") },
			{ id: "realtime", label: tProj("tabs.realtime") },
		],
		[tProj],
	);

	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedTech, setSelectedTech] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

	const categoryCounts = useMemo(() => {
		return {
			all: ALL_PROJECTS.length,
			saas: ALL_PROJECTS.filter((p) =>
				p.categories ? p.categories.includes("saas") : p.category === "saas",
			).length,
			ecommerce: ALL_PROJECTS.filter((p) =>
				p.categories
					? p.categories.includes("ecommerce")
					: p.category === "ecommerce",
			).length,
			realtime: ALL_PROJECTS.filter((p) =>
				p.categories
					? p.categories.includes("realtime")
					: p.category === "realtime",
			).length,
		};
	}, []);

	const filteredProjects = useMemo(() => {
		return ALL_PROJECTS.filter((project) => {
			const matchesCategory =
				selectedCategory === "all" ||
				(project.categories
					? project.categories.includes(
							selectedCategory as "saas" | "ecommerce" | "realtime",
						)
					: project.category === selectedCategory);

			const matchesTech =
				selectedTech === "all" ||
				project.stack.some((s) =>
					s.technologies.some((t) =>
						t.toLowerCase().includes(selectedTech.toLowerCase()),
					),
				);

			const query = searchQuery.trim().toLowerCase();
			const matchesSearch =
				!query ||
				project.title.toLowerCase().includes(query) ||
				(project.arabicTitle &&
					project.arabicTitle.toLowerCase().includes(query)) ||
				project.tagline.toLowerCase().includes(query) ||
				project.role.toLowerCase().includes(query) ||
				project.theProblem.toLowerCase().includes(query) ||
				project.keyFeatures.some((f) => f.toLowerCase().includes(query)) ||
				project.stack.some((s) =>
					s.technologies.some((t) => t.toLowerCase().includes(query)),
				);

			return matchesCategory && matchesTech && matchesSearch;
		});
	}, [selectedCategory, selectedTech, searchQuery]);

	const resetFilters = () => {
		setSelectedCategory("all");
		setSelectedTech("all");
		setSearchQuery("");
	};

	const hasActiveFilters =
		selectedCategory !== "all" || selectedTech !== "all" || searchQuery !== "";

	return (
		<div className="flex flex-col min-h-screen relative bg-paper text-ink selection:bg-accent selection:text-paper antialiased">
			{/* Mathematical Blueprint Background Grid */}
			<div className="fixed inset-0 pointer-events-none bg-blueprint opacity-40 z-0" />

			<div className="relative z-10 flex-1 flex flex-col">
				{/* Top Floating Command Bar */}
				<header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-xl border-b border-line">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
						<Link
							href="/#work"
							className="mono text-[0.76rem] sm:text-[0.82rem] text-muted hover:text-ink transition-colors inline-flex items-center gap-2 group px-3 py-1.5 rounded-full border border-line bg-surface/60 hover:bg-surface"
						>
							<ArrowLeft className="size-3.5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
							<span>{tCommon("backHome")}</span>
						</Link>

						<div className="flex items-center gap-2">
							<span className="mono text-[0.7rem] font-bold text-accent-ink bg-accent-soft border border-accent-border px-2.5 py-1 rounded-md">
								{tCommon("systemsDirectory")}
							</span>
							<span className="mono text-[0.7rem] text-muted-2 px-2 py-1 rounded bg-surface border border-line hidden sm:inline">
								{tCommon("productionSystems", { count: ALL_PROJECTS.length })}
							</span>
						</div>
					</div>
				</header>

				{/* Main Catalog View */}
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 flex-1">
					{/* Header Title & Telemetry HUD */}
					<div className="space-y-6">
						<div className="space-y-2">
							<div className="flex items-center gap-2 mono text-[0.72rem] text-accent-ink uppercase tracking-wider font-bold">
								<Terminal className="size-4" />
								<span>{tCat("header_tag")}</span>
							</div>
							<h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold font-sans tracking-tight text-ink m-0">
								{tCat("title")}
							</h1>
							<p className="text-[1.05rem] sm:text-[1.15rem] text-muted max-w-3xl font-normal leading-relaxed m-0">
								{tCat("subtitle")}
							</p>
						</div>

						{/* Telemetry HUD Metric Chips */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-(--radius) bg-surface/90 border border-line">
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									{tCat("hud.total_arch")}
								</div>
								<div className="mono text-[1.4rem] font-bold text-ink">
									0{ALL_PROJECTS.length}{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										{tCat("hud.systems_unit")}
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									{tCat("hud.monorepos")}
								</div>
								<div className="mono text-[1.4rem] font-bold text-accent-ink">
									10+{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										{tCat("hud.apps_unit")}
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									{tCat("hud.concurrency")}
								</div>
								<div className="mono text-[1.4rem] font-bold text-status-live">
									100%{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										{tCat("hud.idempotent")}
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									{tCat("hud.frameworks")}
								</div>
								<div className="mono text-[1.4rem] font-bold text-ink truncate">
									Nest · Next · Postgres
								</div>
							</div>
						</div>

						{/* Filter, Search & View Controls */}
						<div className="space-y-4 pt-2">
							<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
								{/* Category Tabs */}
								<div className="flex items-center gap-1.5 flex-wrap">
									{categories.map((cat) => {
										const count =
											categoryCounts[cat.id as keyof typeof categoryCounts] ??
											0;
										const isActive = selectedCategory === cat.id;
										return (
											<button
												key={cat.id}
												type="button"
												onClick={() => setSelectedCategory(cat.id)}
												className={`mono text-[0.74rem] px-3.5 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
													isActive
														? "bg-accent text-paper font-bold shadow-sm border-accent"
														: "bg-surface text-muted border-line hover:text-ink hover:border-line-active"
												}`}
											>
												<span>{cat.label}</span>
												<span
													className={`text-[0.62rem] px-1.5 py-0.2 rounded-full ${
														isActive
															? "bg-paper/25 text-paper font-bold"
															: "bg-paper text-muted-2"
													}`}
												>
													{count}
												</span>
											</button>
										);
									})}
								</div>

								{/* Search Input & View Mode Toggles */}
								<div className="flex items-center gap-3">
									<div className="relative flex-1 sm:w-64">
										<Search className="size-3.5 text-muted-2 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
										<input
											type="text"
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
											placeholder={tCat("search_placeholder")}
											className="w-full bg-surface border border-line rounded-lg px-3 py-1.5 pl-9 rtl:pl-3 rtl:pr-9 text-[0.8rem] mono text-ink placeholder:text-muted-2 focus:outline-none focus:border-accent"
										/>
										{searchQuery && (
											<button
												type="button"
												onClick={() => setSearchQuery("")}
												className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink text-[0.7rem] mono cursor-pointer"
											>
												<X className="size-3.5" />
											</button>
										)}
									</div>

									{/* View Mode Toggle */}
									<div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-line">
										<button
											type="button"
											onClick={() => setViewMode("grid")}
											className={`p-1.5 rounded ${viewMode === "grid" ? "bg-paper text-accent-ink font-bold" : "text-muted hover:text-ink"} cursor-pointer`}
											title="Grid View"
										>
											<LayoutGrid className="size-4" />
										</button>
										<button
											type="button"
											onClick={() => setViewMode("table")}
											className={`p-1.5 rounded ${viewMode === "table" ? "bg-paper text-accent-ink font-bold" : "text-muted hover:text-ink"} cursor-pointer`}
											title="Table View"
										>
											<Table className="size-4" />
										</button>
									</div>
								</div>
							</div>

							{/* Secondary Technology Stack Filter Chips */}
							<div className="flex items-center gap-2 flex-wrap pt-1 border-t border-line/60">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold flex items-center gap-1 shrink-0">
									<Filter className="size-3 text-accent-ink" />
									<span>{tCat("filter_tech")}</span>
								</div>

								<button
									type="button"
									onClick={() => setSelectedTech("all")}
									className={`mono text-[0.68rem] px-2.5 py-0.5 rounded border transition-colors cursor-pointer ${
										selectedTech === "all"
											? "bg-accent-soft text-accent-ink border-accent-border font-bold"
											: "bg-surface text-muted-2 border-line hover:text-ink"
									}`}
								>
									{tCat("all_tech")}
								</button>

								{POPULAR_STACK_FILTERS.map((tech) => (
									<button
										key={tech}
										type="button"
										onClick={() =>
											setSelectedTech(selectedTech === tech ? "all" : tech)
										}
										className={`mono text-[0.68rem] px-2.5 py-0.5 rounded border transition-colors cursor-pointer ${
											selectedTech === tech
												? "bg-accent text-paper border-accent font-semibold"
												: "bg-surface text-muted border-line hover:text-ink hover:border-line-active"
										}`}
									>
										{tech}
									</button>
								))}

								{hasActiveFilters && (
									<button
										type="button"
										onClick={resetFilters}
										className="mono text-[0.66rem] text-accent-ink hover:underline cursor-pointer ms-auto"
									>
										{tCommon("resetFilters")}{" "}
										{tCat("matches_count", { count: filteredProjects.length })}
									</button>
								)}
							</div>
						</div>
					</div>

					{/* Empty State */}
					{filteredProjects.length === 0 ? (
						<div className="p-12 text-center rounded-(--radius) bg-surface border border-dashed border-line space-y-3">
							<div className="size-10 rounded-full bg-surface-card border border-line flex items-center justify-center text-muted-2 mx-auto">
								<Search className="size-4" />
							</div>
							<div className="mono text-[0.92rem] font-bold text-ink">
								{tCommon("noMatchingSystems")}
							</div>
							<p className="text-[0.84rem] text-muted max-w-sm mx-auto m-0">
								{tCommon("noMatchingDesc")}
							</p>
							<button
								type="button"
								onClick={resetFilters}
								className="btn btn-secondary text-[0.76rem] py-1.5 px-4 inline-flex items-center gap-1.5 mt-2 cursor-pointer"
							>
								<span>{tCommon("resetFilters")}</span>
							</button>
						</div>
					) : viewMode === "grid" ? (
						/* Catalog Stream Grid View */
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
							{filteredProjects.map((project) => (
								<article
									key={project.slug}
									className="rounded-(--radius) bg-surface/90 border border-line hover:border-accent-border transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-lg group"
								>
									<div>
										{/* Preview Image Frame or Confidential Redacted Frame */}
										{project.image ? (
											<Link
												href={`/projects/${project.slug}`}
												className="relative aspect-16/9 w-full bg-paper block border-b border-line overflow-hidden"
											>
												<Image
													src={project.image}
													alt={`${project.title} overview`}
													fill
													sizes="(max-width: 768px) 100vw, 600px"
													className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
												/>
												<div className="absolute inset-0 bg-linear-to-t from-paper/80 via-transparent to-transparent opacity-60" />

												{/* Top Image Badges */}
												<div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
													<span className="mono text-[0.68rem] font-bold text-accent-ink bg-paper/90 border border-line px-2.5 py-1 rounded backdrop-blur-md">
														{project.sysId}
													</span>

													{project.statusBadge.variant === "live" ? (
														<span className="mono text-[0.66rem] text-status-live border border-status-live/30 bg-paper/90 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1.5 backdrop-blur-md">
															<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
															LIVE
														</span>
													) : project.isComingSoon ? (
														<span className="mono text-[0.66rem] text-accent-ink border border-accent-border bg-paper/90 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1.5 backdrop-blur-md">
															<Clock className="size-3" />
															{tCommon("comingSoon").toUpperCase()}
														</span>
													) : (
														<span className="mono text-[0.66rem] text-muted-2 border border-line bg-paper/90 px-2 py-0.5 rounded-full font-medium flex items-center gap-1.5 backdrop-blur-md">
															<Lock className="size-2.5" />
															PRIVATE
														</span>
													)}
												</div>
											</Link>
										) : (
											<div className="relative aspect-16/9 w-full bg-paper/70 border-b border-line flex flex-col items-center justify-center text-center p-6 select-none">
												<div className="size-9 rounded-full bg-surface-card border border-line flex items-center justify-center text-muted-2 mb-2">
													<Lock className="size-4 text-accent-ink" />
												</div>
												<span className="mono text-[0.76rem] font-bold text-ink uppercase tracking-wider mb-0.5">
													{tCommon("noPreview")}
												</span>
												<span className="mono text-[0.66rem] text-muted-2">
													{tCommon("confidentialSystem")}
												</span>

												<div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
													<span className="mono text-[0.68rem] font-bold text-accent-ink bg-paper/90 border border-line px-2.5 py-1 rounded backdrop-blur-md">
														{project.sysId}
													</span>
													<span className="mono text-[0.66rem] text-accent-ink border border-accent-border bg-paper/90 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1.5 backdrop-blur-md">
														<Clock className="size-3" />
														{tCommon("comingSoon").toUpperCase()}
													</span>
												</div>
											</div>
										)}

										{/* Content Body */}
										<div className="p-6 space-y-4">
											<div className="space-y-1">
												<div className="flex items-center gap-2 mono text-[0.68rem] text-muted-2 uppercase font-semibold">
													<span>
														{project.category === "saas"
															? tProj("tabs.saas")
															: tProj("tabs.ecommerce")}
													</span>
													<span>•</span>
													<span>{project.timeline}</span>
												</div>

												<h2 className="text-[1.3rem] sm:text-[1.45rem] font-bold font-sans text-ink m-0 group-hover:text-accent-ink transition-colors">
													<Link
														href={`/projects/${project.slug}`}
														className="no-underline text-inherit"
													>
														{project.title}
													</Link>
												</h2>

												{project.arabicTitle && (
													<div className="text-[0.92rem] font-sans text-muted/80">
														{project.arabicTitle}
													</div>
												)}
											</div>

											<p className="text-[0.9rem] text-ink/80 leading-relaxed font-normal m-0 line-clamp-3">
												{project.tagline}
											</p>

											{/* Topology Flow Preview */}
											{project.topology && project.topology.length > 0 && (
												<div className="p-3 rounded-md bg-paper border border-line space-y-2">
													<div className="mono text-[0.62rem] uppercase tracking-wider text-muted-2 font-semibold flex justify-between">
														<span>{tProj("card.architecture")}</span>
														<span className="text-accent-ink">[DATA_FLOW]</span>
													</div>
													<div className="flex items-center gap-1.5 flex-wrap">
														{project.topology.slice(0, 4).map((node, idx) => (
															<span
																key={node.label}
																className="flex items-center gap-1.5"
															>
																<span className="mono text-[0.68rem] px-2 py-0.5 rounded bg-surface border border-line text-ink">
																	{node.label}
																</span>
																{idx <
																	Math.min(project.topology.length, 4) - 1 && (
																	<ArrowRight className="size-2.5 text-muted-2 rtl:rotate-180" />
																)}
															</span>
														))}
													</div>
												</div>
											)}

											{/* Stack Chips */}
											<div className="flex flex-wrap gap-1.5 pt-1">
												{project.stack[0]?.technologies
													.slice(0, 5)
													.map((tech) => (
														<span
															key={tech}
															className="mono text-[0.68rem] px-2 py-0.5 rounded bg-surface text-muted border border-line"
														>
															{tech}
														</span>
													))}
											</div>
										</div>
									</div>

									{/* Card Footer Actions */}
									<div className="p-6 pt-0 border-t border-line/50 mt-4 flex items-center justify-between gap-3">
										{project.isComingSoon ? (
											<span className="mono text-[0.76rem] py-2 px-3.5 rounded-(--radius) bg-surface border border-accent-border/60 text-accent-ink inline-flex items-center gap-1.5 font-semibold select-none shadow-xs">
												<Clock className="size-3.5" />
												<span>{tCommon("caseStudySoon")}</span>
											</span>
										) : (
											<Link
												href={`/projects/${project.slug}`}
												className="btn btn-primary text-[0.8rem] py-2 px-4 inline-flex items-center gap-1.5 font-semibold"
											>
												<span>{tCat("deep_dive_btn")}</span>
												<ArrowRight className="size-3.5 rtl:rotate-180" />
											</Link>
										)}

										{project.liveUrl ? (
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noreferrer"
												className="btn btn-secondary text-[0.8rem] py-2 px-3.5 inline-flex items-center gap-1.5"
											>
												<span>{tCommon("visitSite")}</span>
												<ArrowUpRight className="size-3.5 rtl:-rotate-90" />
											</a>
										) : (
											<span className="mono text-[0.72rem] text-muted-2 flex items-center gap-1.5">
												<ShieldCheck className="size-3.5 text-accent-ink" />
												<span>{tCommon("privateSystem")}</span>
											</span>
										)}
									</div>
								</article>
							))}
						</div>
					) : (
						/* High-Density Architecture Table View */
						<div className="rounded-(--radius) bg-surface/90 border border-line overflow-hidden shadow-lg">
							<div className="overflow-x-auto">
								<table className="w-full text-start border-collapse">
									<thead>
										<tr className="bg-surface-card border-b border-line mono text-[0.68rem] text-muted-2 uppercase font-semibold">
											<th className="py-3.5 px-4 text-start">
												{tCat("table.sys_id")}
											</th>
											<th className="py-3.5 px-4 text-start">
												{tCat("table.system_title")}
											</th>
											<th className="py-3.5 px-4 text-start">
												{tCat("table.category")}
											</th>
											<th className="py-3.5 px-4 text-start">
												{tCat("table.role_scope")}
											</th>
											<th className="py-3.5 px-4 text-start">
												{tCat("table.core_stack")}
											</th>
											<th className="py-3.5 px-4 text-start">
												{tCat("table.status")}
											</th>
											<th className="py-3.5 px-4 text-end">
												{tCat("table.action")}
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-line text-[0.84rem]">
										{filteredProjects.map((project) => (
											<tr
												key={project.slug}
												className="hover:bg-surface-hover/70 transition-colors"
											>
												<td className="py-4 px-4 mono text-accent-ink font-bold">
													{project.sysId}
												</td>
												<td className="py-4 px-4 font-sans font-bold text-ink">
													<Link
														href={`/projects/${project.slug}`}
														className="no-underline text-inherit hover:text-accent-ink transition-colors"
													>
														{project.title}
													</Link>
												</td>
												<td className="py-4 px-4 mono text-[0.74rem] text-muted">
													{project.category.toUpperCase()}
												</td>
												<td className="py-4 px-4 mono text-[0.74rem] text-ink/90">
													{project.role}
												</td>
												<td className="py-4 px-4 mono text-[0.72rem] text-muted max-w-xs truncate">
													{project.stack[0]?.technologies
														.slice(0, 4)
														.join(" · ")}
												</td>
												<td className="py-4 px-4">
													{project.statusBadge.variant === "live" ? (
														<span className="mono text-[0.7rem] text-status-live font-semibold flex items-center gap-1.5">
															<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
															LIVE
														</span>
													) : project.isComingSoon ? (
														<span className="mono text-[0.7rem] text-accent-ink font-semibold flex items-center gap-1.5">
															<Clock className="size-3" />
															{tCommon("comingSoon").toUpperCase()}
														</span>
													) : (
														<span className="mono text-[0.7rem] text-muted-2 flex items-center gap-1.5">
															<Lock className="size-3" />
															PRIVATE
														</span>
													)}
												</td>
												<td className="py-4 px-4 text-end">
													{project.isComingSoon ? (
														<span className="mono text-[0.72rem] text-accent-ink font-semibold">
															{tCommon("comingSoon")}
														</span>
													) : (
														<Link
															href={`/projects/${project.slug}`}
															className="btn btn-ghost text-[0.74rem] py-1 px-2.5 inline-flex items-center gap-1"
														>
															<span>{tCat("table.view_spec")}</span>
															<ArrowRight className="size-3 rtl:rotate-180" />
														</Link>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</main>
			</div>

			<Footer />
		</div>
	);
}
