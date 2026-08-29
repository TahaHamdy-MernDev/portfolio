import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/data/projects-data";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://taha-hamdy.vercel.app";
	const currentDate = new Date().toISOString();

	const entries: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/en`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 1.0,
			alternates: {
				languages: {
					en: `${baseUrl}/en`,
				},
			},
		},
	];

	for (const locale of routing.locales) {
		for (const project of ALL_PROJECTS) {
			entries.push({
				url: `${baseUrl}/${locale}/projects/${project.slug}`,
				lastModified: currentDate,
				changeFrequency: "monthly",
				priority: 0.85,
				alternates: {
					languages: {
						en: `${baseUrl}/en/projects/${project.slug}`,
					},
				},
			});
		}
	}

	return entries;
}
