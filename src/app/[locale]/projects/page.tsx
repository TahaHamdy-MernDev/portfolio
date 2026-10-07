import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/sections/projects-catalog";
import { routing } from "@/i18n/routing";

interface ProjectsPageProps {
	params: Promise<{
		locale: string;
	}>;
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: ProjectsPageProps): Promise<Metadata> {
	const { locale } = await params;

	const isArabic = locale === "ar";
	const title = isArabic
		? "دليل المشاريع والأنظمة البرمجية | طه حمدي"
		: "Systems Directory & Architecture Catalog | Taha Hamdy";
	const description = isArabic
		? "استعراض شامل لجميع الأنظمة المؤسسية ومنصات التجارة الإلكترونية وحلول المعمارية السحابية المطورة بواسطة طه حمدي."
		: "Comprehensive technical directory of production enterprise platforms, B2B marketplaces, and distributed architectures engineered by Taha Hamdy.";

	return {
		title,
		description,
		alternates: {
			canonical: `https://taha-hamdy.vercel.app/${locale}/projects`,
			languages: {
				en: "https://taha-hamdy.vercel.app/en/projects",
				"x-default": "https://taha-hamdy.vercel.app/en/projects",
			},
		},
		openGraph: {
			type: "website",
			locale: isArabic ? "ar_EG" : "en_US",
			url: `https://taha-hamdy.vercel.app/${locale}/projects`,
			siteName: isArabic
				? "طه حمدي — أنظمة Full-Stack"
				: "Taha Hamdy — Full-Stack Systems",
			title,
			description,
			images: [
				{
					url: "/og-image.png",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/og-image.png"],
		},
	};
}

export default async function ProjectsIndexPage() {
	return <ProjectsCatalog />;
}
