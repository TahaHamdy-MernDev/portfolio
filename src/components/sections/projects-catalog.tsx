"use client";

import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	LayoutGrid,
	Lock,
	Search,
	ShieldCheck,
	Table,
	Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/sections/footer";
import { ALL_PROJECTS } from "@/data/projects-data";

export function ProjectsCatalog() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

	const filteredProjects = ALL_PROJECTS.filter((project) => {
		const matchesCategory =
			selectedCategory === "all" || project.category === selectedCategory;
		const matchesSearch =
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.arabicTitle?.includes(searchQuery) ||
			project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.stack.some((s) =>
				s.technologies.some((t) =>
					t.toLowerCase().includes(searchQuery.toLowerCase()),
				),
			);
		return matchesCategory && matchesSearch;
	});

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
							<span>Return to Portfolio Home</span>
						</Link>

						<div className="flex items-center gap-2">
							<span className="mono text-[0.7rem] font-bold text-accent-ink bg-accent-soft border border-accent-border px-2.5 py-1 rounded-md">
								SYSTEMS DIRECTORY
							</span>
							<span className="mono text-[0.7rem] text-muted-2 px-2 py-1 rounded bg-surface border border-line hidden sm:inline">
								{ALL_PROJECTS.length} PRODUCTION CODEBASES
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
								<span>ARCHITECTURAL PORTFOLIO & CODEBASE DIRECTORY</span>
							</div>
							<h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold font-sans tracking-tight text-ink m-0">
								Production Systems & Architectures
							</h1>
							<p className="text-[1.05rem] sm:text-[1.15rem] text-muted max-w-3xl font-normal leading-relaxed m-0">
								Deep-dive case studies, technical schematics, concurrency
								solutions, and telemetry for enterprise platforms, B2B
								marketplaces, and real-time distributed applications.
							</p>
						</div>

						{/* Telemetry HUD Metric Chips */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-(--radius) bg-surface/90 border border-line">
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									Total Architectures
								</div>
								<div className="mono text-[1.4rem] font-bold text-ink">
									0{ALL_PROJECTS.length}{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										Systems
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									Codebase Monorepos
								</div>
								<div className="mono text-[1.4rem] font-bold text-accent-ink">
									10+{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										Apps & APIs
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									Concurrency Target
								</div>
								<div className="mono text-[1.4rem] font-bold text-status-live">
									100%{" "}
									<span className="text-[0.75rem] text-muted font-normal">
										Idempotent
									</span>
								</div>
							</div>
							<div className="space-y-1">
								<div className="mono text-[0.66rem] text-muted-2 uppercase font-semibold">
									Primary Frameworks
								</div>
								<div className="mono text-[1.4rem] font-bold text-ink truncate">
									Nest · Next · Mongo
								</div>
							</div>
						</div>

						{/* Filter & Search Bar */}
						<div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
							{/* Category Filters */}
							<div className="flex items-center gap-1.5 flex-wrap">
								{[
									{ id: "all", label: "All Systems" },
									{ id: "saas", label: "Enterprise SaaS" },
									{ id: "ecommerce", label: "E-Commerce & Logistics" },
								].map((cat) => (
									<button
										key={cat.id}
										type="button"
										onClick={() => setSelectedCategory(cat.id)}
										className={`mono text-[0.74rem] px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
											selectedCategory === cat.id
												? "bg-accent-soft text-accent-ink border-accent-border font-bold shadow-sm"
												: "bg-surface text-muted border-line hover:text-ink hover:border-line-active"
										}`}
									>
										{cat.label}
									</button>
								))}
							</div>

							{/* Search Input & View Mode Toggles */}
							<div className="flex items-center gap-3">
								<div className="relative flex-1 md:w-64">
									<Search className="size-3.5 text-muted-2 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
									<input
										type="text"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										placeholder="Search stack, title, feature..."
										className="w-full bg-surface border border-line rounded-lg px-3 py-1.5 pl-9 rtl:pl-3 rtl:pr-9 text-[0.8rem] mono text-ink placeholder:text-muted-2 focus:outline-none focus:border-accent"
									/>
									{searchQuery && (
										<button
											type="button"
											onClick={() => setSearchQuery("")}
											className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink text-[0.7rem] mono"
										>
											Clear
										</button>
									)}
								</div>

								{/* View Mode Toggle */}
								<div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-line">
									<button
										type="button"
										onClick={() => setViewMode("grid")}
										className={`p-1.5 rounded ${viewMode === "grid" ? "bg-paper text-accent-ink" : "text-muted hover:text-ink"} cursor-pointer`}
										title="Grid View"
									>
										<LayoutGrid className="size-4" />
									</button>
									<button
										type="button"
										onClick={() => setViewMode("table")}
										className={`p-1.5 rounded ${viewMode === "table" ? "bg-paper text-accent-ink" : "text-muted hover:text-ink"} cursor-pointer`}
										title="Table View"
									>
										<Table className="size-4" />
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Catalog Stream */}
					{viewMode === "grid" ? (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
							{filteredProjects.map((project) => (
								<article
									key={project.slug}
									className="rounded-(--radius) bg-surface/90 border border-line hover:border-accent-border transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-lg group"
								>
									<div>
										{/* Preview Image Frame */}
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
												) : (
													<span className="mono text-[0.66rem] text-muted-2 border border-line bg-paper/90 px-2 py-0.5 rounded-full font-medium flex items-center gap-1.5 backdrop-blur-md">
														<Lock className="size-2.5" />
														PRIVATE
													</span>
												)}
											</div>
										</Link>

										{/* Content Body */}
										<div className="p-6 space-y-4">
											<div className="space-y-1">
												<div className="flex items-center gap-2 mono text-[0.68rem] text-muted-2 uppercase font-semibold">
													<span>
														{project.category === "saas"
															? "Enterprise SaaS"
															: "E-Commerce"}
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
														<span>Topology Pipeline</span>
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
										<Link
											href={`/projects/${project.slug}`}
											className="btn btn-primary text-[0.8rem] py-2 px-4 inline-flex items-center gap-1.5 font-semibold"
										>
											<span>Deep-Dive Case Study</span>
											<ArrowRight className="size-3.5 rtl:rotate-180" />
										</Link>

										{project.liveUrl ? (
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noreferrer"
												className="btn btn-secondary text-[0.8rem] py-2 px-3.5 inline-flex items-center gap-1.5"
											>
												<span>Visit Site</span>
												<ArrowUpRight className="size-3.5 rtl:-rotate-90" />
											</a>
										) : (
											<span className="mono text-[0.72rem] text-muted-2 flex items-center gap-1.5">
												<ShieldCheck className="size-3.5 text-accent-ink" />
												<span>Private System</span>
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
											<th className="py-3.5 px-4 text-start">SYS_ID</th>
											<th className="py-3.5 px-4 text-start">System Title</th>
											<th className="py-3.5 px-4 text-start">Category</th>
											<th className="py-3.5 px-4 text-start">Role / Scope</th>
											<th className="py-3.5 px-4 text-start">Core Stack</th>
											<th className="py-3.5 px-4 text-start">Status</th>
											<th className="py-3.5 px-4 text-end">Action</th>
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
														<span className="mono text-[0.68rem] text-status-live border border-status-live/30 bg-status-live/10 px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1.5">
															<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
															LIVE
														</span>
													) : (
														<span className="mono text-[0.68rem] text-muted-2 border border-line bg-surface px-2 py-0.5 rounded-full font-medium inline-flex items-center gap-1">
															<Lock className="size-2.5" />
															PRIVATE
														</span>
													)}
												</td>
												<td className="py-4 px-4 text-end">
													<Link
														href={`/projects/${project.slug}`}
														className="btn btn-ghost text-[0.74rem] py-1 px-3 inline-flex items-center gap-1"
													>
														<span>Case Study</span>
														<ArrowRight className="size-3 rtl:rotate-180" />
													</Link>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</main>

				{/* Global Footer */}
				<Footer />
			</div>
		</div>
	);
}
