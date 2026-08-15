import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage() {
	return (
		<div className="flex flex-col min-h-screen relative bg-paper text-ink selection:bg-accent selection:text-white">
			{/* Mathematical Blueprint Background Grid */}
			<div className="fixed inset-0 pointer-events-none bg-blueprint opacity-60 z-0" />

			{/* Sticky Global Engineering Header */}
			<Header />

			<main className="flex-1 relative z-10">
				{/* 00: Hero Terminal Introduction & Dynamic Telemetry Stats */}
				<Hero />

				{/* Global Engineering Tech Stack Ribbon */}
				<Marquee />

				{/* 01: Selected Systems & Bento Architecture Showcases */}
				<Projects />

				{/* 02: Modular Technical Capabilities & Stack Matrix */}
				<Skills />

				{/* 03: Engineering Methodology & Execution Stages */}
				<Process />

				{/* 04: Engineering Philosophy & Technical Background */}
				<About />

				{/* 05: Architectural FAQ & Technical Inquiries */}
				<FAQ />

				{/* 06: Direct Contact & Channel Coordination */}
				<Contact />
			</main>

			{/* Grand Typographic Watermark Footer */}
			<Footer />
		</div>
	);
}
