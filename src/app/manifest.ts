import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Taha Hamdy — Full-Stack Developer",
		short_name: "Taha Hamdy",
		description:
			"Full-Stack Developer specializing in SaaS platforms, real-time messaging, e-commerce engines, and high-concurrency Node.js & Next.js systems.",
		start_url: "/",
		display: "standalone",
		background_color: "#0f1115",
		theme_color: "#ff5500",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	};
}
