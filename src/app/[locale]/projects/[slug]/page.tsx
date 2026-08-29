import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/sections/project-detail-view";
import { ALL_PROJECTS, getProjectBySlug } from "@/data/projects-data";
import { routing } from "@/i18n/routing";

interface ProjectPageProps {
	params: Promise<{
		locale: string;
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const params: { locale: string; slug: string }[] = [];

	for (const locale of routing.locales) {
		for (const project of ALL_PROJECTS) {
			params.push({
				locale,
				slug: project.slug,
			});
		}
	}

	return params;
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug, locale } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found | Taha Hamdy",
		};
	}

	const title = `${project.title} — Case Study & Technical Architecture | Taha Hamdy`;
	const description = project.tagline;

	return {
		title,
		description,
		alternates: {
			canonical: `https://taha-hamdy.vercel.app/${locale}/projects/${project.slug}`,
		},
		openGraph: {
			title,
			description,
			url: `https://taha-hamdy.vercel.app/${locale}/projects/${project.slug}`,
			siteName: "Taha Hamdy — Full-Stack Systems",
			images: [
				{
					url: project.image || "/og-image.png",
					width: 1200,
					height: 630,
					alt: `${project.title} architecture showcase`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [project.image || "/og-image.png"],
		},
	};
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const currentIndex = ALL_PROJECTS.findIndex((p) => p.slug === project.slug);
	const prevProject =
		currentIndex > 0 ? ALL_PROJECTS[currentIndex - 1] : undefined;
	const nextProject =
		currentIndex < ALL_PROJECTS.length - 1
			? ALL_PROJECTS[currentIndex + 1]
			: undefined;

	return (
		<ProjectDetailView
			project={project}
			prevProject={prevProject}
			nextProject={nextProject}
		/>
	);
}
