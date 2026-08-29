import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/sections/projects-catalog";

interface ProjectsPageProps {
	params: Promise<{
		locale: string;
	}>;
}

export async function generateMetadata({
	params,
}: ProjectsPageProps): Promise<Metadata> {
	const { locale } = await params;
	const isArabic = locale === "ar";

	return {
		title: isArabic
			? "دليل المشاريع والأنظمة البرمجية | طه حمدي"
			: "Systems Directory & Architecture Catalog | Taha Hamdy",
		description: isArabic
			? "استعراض شامل لجميع الأنظمة المؤسسية ومنصات التجارة الإلكترونية وحلول المعمارية السحابية المطورة بواسطة طه حمدي."
			: "Comprehensive technical directory of production enterprise platforms, B2B marketplaces, and distributed architectures engineered by Taha Hamdy.",
	};
}

export default function ProjectsIndexPage() {
	return <ProjectsCatalog />;
}
