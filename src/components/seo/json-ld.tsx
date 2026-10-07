export function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": "https://taha-hamdy.vercel.app/#person",
				name: "Taha Hamdy",
				url: "https://taha-hamdy.vercel.app/en",
				image: "https://taha-hamdy.vercel.app/avatar.jpg",
				jobTitle: "Full-Stack Developer",
				description:
					"Full-Stack Developer with 3+ years delivering high-throughput SaaS platforms, e-commerce infrastructure, and enterprise business workflows with Next.js, NestJS, and PostgreSQL.",
				email: "mailto:tahahamdy.dev@gmail.com",
				sameAs: [
					"https://github.com/TahaHamdy-MernDev",
					"https://www.linkedin.com/in/taha-hamdy",
				],
				address: {
					"@type": "PostalAddress",
					addressLocality: "Alexandria",
					addressCountry: "EG",
				},
				knowsAbout: [
					"Next.js",
					"React",
					"TypeScript",
					"NestJS",
					"Node.js",
					"PostgreSQL",
					"Prisma",
					"Redis",
					"BullMQ",
					"Docker",
					"Distributed Systems",
					"Full-Stack Architecture",
					"Microservices",
				],
			},
			{
				"@type": "WebSite",
				"@id": "https://taha-hamdy.vercel.app/#website",
				url: "https://taha-hamdy.vercel.app/en",
				name: "Taha Hamdy — Full-Stack Developer",
				description:
					"Portfolio and case studies of Taha Hamdy, Full-Stack Developer & Systems Architect.",
				inLanguage: "en-US",
				publisher: {
					"@id": "https://taha-hamdy.vercel.app/#person",
				},
			},
			{
				"@type": "ProfilePage",
				"@id": "https://taha-hamdy.vercel.app/en#profilepage",
				url: "https://taha-hamdy.vercel.app/en",
				name: "Taha Hamdy — Full-Stack Developer",
				description:
					"Portfolio and case studies of Taha Hamdy, Full-Stack Developer.",
				inLanguage: "en-US",
				mainEntity: {
					"@id": "https://taha-hamdy.vercel.app/#person",
				},
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Schema.org structured data JSON is static and safe
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
