"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface SkillCategory {
	title: string;
	code: string;
	skills: string[];
	fullWidth?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: "Core Languages",
		code: "LANG",
		skills: ["TypeScript", "JavaScript (ESNext)", "SQL", "HTML5", "CSS3"],
	},
	{
		title: "Frontend Engineering",
		code: "CLIENT",
		skills: [
			"React 19",
			"Next.js 16 (App Router)",
			"Tailwind CSS",
			"shadcn/ui",
			"State Management",
		],
	},
	{
		title: "Backend & Services",
		code: "SERVER",
		skills: [
			"NestJS",
			"Node.js",
			"RESTful APIs",
			"GraphQL",
			"Webhooks",
			"Microservices",
		],
	},
	{
		title: "Databases & Storage",
		code: "STORAGE",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "TypeORM"],
	},
	{
		title: "Asynchronous & Real-Time",
		code: "ASYNC",
		skills: [
			"Redis",
			"BullMQ",
			"WebSockets / Socket.io",
			"Background Workers",
			"FCM Push",
		],
	},
	{
		title: "Architecture & DevOps",
		code: "INFRA",
		skills: [
			"Turborepo (Monorepo)",
			"Docker",
			"Linux Server Mgmt",
			"CI/CD Pipelines",
			"Vercel",
			"pnpm Workspaces",
		],
	},
	{
		title: "Domain Architecture & Workflows",
		code: "DOMAINS",
		fullWidth: true,
		skills: [
			"Enterprise SaaS Architecture",
			"E-commerce & Inventory Engines",
			"Payment Gateway Integrations",
			"Multi-Role Auth & RBAC",
			"Multi-lingual / i18n Systems",
			"Data Pipelines & Reporting",
		],
	},
];

export function Skills() {
	const [isInView, setIsInView] = useState(false);
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = gridRef.current;
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
			{ threshold: 0.08 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="skills" className="py-20 border-t border-line">
			<div className="wrap">
				<SectionHead
					title="Skills & Technical Capabilities"
					num="02 //"
					tag="CAPABILITIES"
				/>

				<div
					ref={gridRef}
					id="skillsGrid"
					className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-line border border-line rounded-[var(--radius)] overflow-hidden"
				>
					{SKILL_CATEGORIES.map((category, idx) => (
						<div
							key={category.title}
							className={`skill-group bg-surface p-6 transition-colors duration-150 hover:bg-surface-hover ${
								category.fullWidth
									? "col-span-1 sm:col-span-2 lg:col-span-3"
									: ""
							} ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-3"
							}`}
							style={{ transitionDelay: `${idx * 60}ms` }}
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-sans font-semibold text-[0.84rem] text-ink tracking-tight">
									{category.title}
								</h3>
								<span className="mono text-[0.68rem] text-muted-2 font-medium">
									[{category.code}]
								</span>
							</div>

							<div className="chip-row flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<span
										key={skill}
										className="chip mono text-[0.76rem] px-2.5 py-1 rounded-[2px] bg-paper border border-line text-muted transition-all duration-150 ease-out hover:border-accent hover:text-ink cursor-default select-none"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
