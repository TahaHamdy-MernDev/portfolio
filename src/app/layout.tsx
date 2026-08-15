import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
	title: "Taha Hamdy — Full-Stack Developer & Systems Architect",
	description:
		"Full-Stack Developer building scalable SaaS platforms, e-commerce systems, resilient APIs, and business-critical software.",
	keywords: [
		"Full-Stack Developer",
		"Next.js",
		"NestJS",
		"TypeScript",
		"PostgreSQL",
		"Prisma",
		"Redis",
		"BullMQ",
		"Turborepo",
	],
	authors: [{ name: "Taha Hamdy" }],
	creator: "Taha Hamdy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
		>
			<body className="min-h-full flex flex-col antialiased bg-paper text-ink">
				{children}
			</body>
		</html>
	);
}
