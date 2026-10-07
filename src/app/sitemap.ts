import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/data/projects-data";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://taha-hamdy.vercel.app";
	// Stable release update timestamp so search engines can utilize conditional crawl caching
	const lastUpdatedDate = "2026-10-01T00:00:00.000Z";

	const entries: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/en`,
			lastModified: lastUpdatedDate,
			changeFrequency: "weekly",
			priority: 1.0,
			alternates: {
				languages: {
					en: `${baseUrl}/en`,
					"x-default": `${baseUrl}/en`,
				},
			},
		},
		{
			url: `${baseUrl}/en/projects`,
			lastModified: lastUpdatedDate,
			changeFrequency: "weekly",
			priority: 0.9,
			alternates: {
				languages: {
					en: `${baseUrl}/en/projects`,
					"x-default": `${baseUrl}/en/projects`,
				},
			},
		},
	];

	for (const locale of routing.locales) {
		for (const project of ALL_PROJECTS) {
			entries.push({
				url: `${baseUrl}/${locale}/projects/${project.slug}`,
				lastModified: lastUpdatedDate,
				changeFrequency: "monthly",
				priority: 0.85,
				alternates: {
					languages: {
						en: `${baseUrl}/en/projects/${project.slug}`,
						"x-default": `${baseUrl}/en/projects/${project.slug}`,
					},
				},
			});
		}
	}

	return entries;
}
