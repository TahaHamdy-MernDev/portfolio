import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";

interface SkillCategory {
	title: string;
	code: string;
	description: string;
	skills: string[];
	fullWidth?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: "Core Languages",
		code: "LANG",
		description:
			"Strong foundation in typed, functional, and relational syntax.",
		skills: ["TypeScript", "JavaScript (ESNext)", "SQL", "HTML5", "CSS3"],
	},
	{
		title: "Frontend Engineering",
		code: "CLIENT",
		description:
			"Fluid, responsive, server-rendered and client-side web applications.",
		skills: [
			"React 19",
			"Next.js 16 (App Router)",
			"Tailwind CSS",
			"shadcn/ui",
			"Zustand / Redux",
			"GSAP Animations",
		],
	},
	{
		title: "Backend & Microservices",
		code: "SERVER",
		description:
			"Modular APIs, distributed architectures, and webhook ingestors.",
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
		description: "Schema modeling, query performance tuning, and ORM hygiene.",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "TypeORM"],
	},
	{
		title: "Asynchronous & Real-Time",
		code: "ASYNC",
		description:
			"Concurrency scaling, message queues, and live event synchronization.",
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
		description:
			"Monorepo tooling, containerization, and automated deployments.",
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
		title: "Domain Architecture & Production Workflows",
		code: "DOMAINS",
		description:
			"End-to-end mission-critical software solutions for modern enterprises.",
		fullWidth: true,
		skills: [
			"Enterprise SaaS Architecture",
			"E-commerce & Inventory Engines",
			"Payment Gateway Integrations",
			"Multi-Role Auth & RBAC",
			"Multi-lingual / i18n Systems",
			"Data Pipelines & Reporting",
			"High-Density Admin Portals",
		],
	},
];

export function Skills() {
	const t = useTranslations("Skills");

	return (
		<section id="skills" className="py-24 border-t border-line/80 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				<div
					id="skillsGrid"
					className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-(--radius) overflow-hidden"
				>
					{SKILL_CATEGORIES.map((category) => (
						<div
							key={category.title}
							className={`skill-group bg-surface/90 backdrop-blur-md p-4 sm:p-7 transition-all duration-200 hover:bg-surface-hover ${
								category.fullWidth
									? "col-span-1 sm:col-span-2 lg:col-span-3"
									: ""
							}`}
						>
							<div className="flex items-center justify-between mb-1.5 sm:mb-2">
								<h3 className="font-sans font-semibold text-[0.88rem] sm:text-[0.92rem] text-ink tracking-tight">
									{category.title}
								</h3>
								<span className="mono text-[0.62rem] sm:text-[0.68rem] text-accent-ink font-medium px-2 py-0.5 rounded-full bg-accent-soft border border-accent-border">
									[{category.code}]
								</span>
							</div>

							<p className="text-muted text-[0.78rem] sm:text-[0.82rem] leading-relaxed mb-3 sm:mb-4">
								{category.description}
							</p>

							<div className="chip-row flex flex-wrap gap-1.5 sm:gap-2">
								{category.skills.map((skill) => (
									<span
										key={skill}
										className="chip mono text-[0.68rem] sm:text-[0.76rem] px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-paper border border-line text-muted transition-all duration-150 ease-out hover:border-accent/60 hover:text-white cursor-default select-none"
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
