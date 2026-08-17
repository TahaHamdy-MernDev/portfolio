import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://taha-hamdy.vercel.app";
	const currentDate = new Date().toISOString();

	return [
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
}
