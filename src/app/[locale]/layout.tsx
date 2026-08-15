import type { Metadata, Viewport } from "next";
import { Cairo, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { JsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	display: "swap",
});

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	display: "swap",
});

const cairo = Cairo({
	variable: "--font-arabic",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	display: "swap",
});

export const viewport: Viewport = {
	themeColor: "#0f1115",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	metadataBase: new URL("https://taha-hamdy.vercel.app"),
	title: {
		default: "Taha Hamdy — Full-Stack Developer & Systems Architect",
		template: "%s | Taha Hamdy",
	},
	description:
		"Full-Stack Developer & Systems Architect with 3+ years delivering high-throughput SaaS platforms, e-commerce infrastructure, and enterprise business workflows with Next.js, NestJS, and PostgreSQL.",
	applicationName: "Taha Hamdy Portfolio",
	authors: [{ name: "Taha Hamdy", url: "https://taha-hamdy.vercel.app" }],
	creator: "Taha Hamdy",
	publisher: "Taha Hamdy",
	alternates: {
		canonical: "https://taha-hamdy.vercel.app",
	},
	icons: {
		icon: [
			{ url: "/icon.png", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://taha-hamdy.vercel.app",
		siteName: "Taha Hamdy — Full-Stack Systems",
		title: "Taha Hamdy — Full-Stack Developer & Systems Architect",
		description:
			"I build the systems businesses run on. Full-Stack Developer delivering high-throughput SaaS platforms, e-commerce infrastructure, and distributed backend pipelines.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Taha Hamdy — Full-Stack Developer & Systems Architect",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Taha Hamdy — Full-Stack Developer & Systems Architect",
		description:
			"I build the systems businesses run on. Full-Stack Developer delivering high-throughput SaaS platforms, e-commerce infrastructure, and distributed backend pipelines.",
		creator: "@TahaHamdy",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "technology",
};

export default async function LocalizedLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as "en")) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html
			lang="en"
			dir="ltr"
			className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${cairo.variable} scroll-smooth`}
		>
			<head>
				<JsonLd />
			</head>
			<body className="min-h-full flex flex-col antialiased bg-paper text-ink">
				<NextIntlClientProvider locale="en" messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
