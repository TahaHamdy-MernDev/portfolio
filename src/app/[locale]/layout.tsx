import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Cairo, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { JsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";

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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const isArabic = locale === "ar";

	const title = isArabic
		? "طه حمدي — مطور Full-Stack ومهندس أنظمة برمجية"
		: "Taha Hamdy — Full-Stack Developer & Systems Architect";

	const description = isArabic
		? "مطور Full-Stack ومهندس أنظمة بخبرة أكثر من 3 سنوات في تصميم وإطلاق منصات SaaS وبنية التجارة الإلكترونية والأنظمة الموزعة."
		: "Full-Stack Developer & Systems Architect with 3+ years delivering high-throughput SaaS platforms, e-commerce infrastructure, and enterprise business workflows with Next.js, NestJS, and PostgreSQL.";

	return {
		metadataBase: new URL("https://taha-hamdy.vercel.app"),
		title: {
			default: title,
			template: `%s | ${isArabic ? "طه حمدي" : "Taha Hamdy"}`,
		},
		description,
		applicationName: isArabic ? "معرض أعمال طه حمدي" : "Taha Hamdy Portfolio",
		authors: [{ name: "Taha Hamdy", url: "https://taha-hamdy.vercel.app" }],
		creator: "Taha Hamdy",
		alternates: {
			canonical: `https://taha-hamdy.vercel.app/${locale}`,
			languages: {
				en: "https://taha-hamdy.vercel.app/en",
				ar: "https://taha-hamdy.vercel.app/ar",
			},
		},
		openGraph: {
			type: "website",
			locale: isArabic ? "ar_EG" : "en_US",
			url: `https://taha-hamdy.vercel.app/${locale}`,
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
			creator: "@tahahamdy",
		},
		robots: {
			index: true,
			follow: true,
		},
		category: "technology",
	};
}

export default async function LocalizedLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html
			lang={locale}
			dir={locale === "ar" ? "rtl" : "ltr"}
			className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${cairo.variable} scroll-smooth`}
		>
			<head>
				<JsonLd />
			</head>
			<body className="min-h-full flex flex-col antialiased bg-paper text-ink">
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
