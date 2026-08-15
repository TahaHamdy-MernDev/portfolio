import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { ScrollProgress } from "@/components/sections/scroll-progress";
import { Skills } from "@/components/sections/skills";

export default function Home() {
	return (
		<div className="min-h-screen bg-paper bg-blueprint text-ink flex flex-col antialiased relative selection:bg-accent selection:text-white">
			<ScrollProgress />
			<Header />
			<main className="flex-1 w-full">
				<Hero />
				<Marquee />
				<Projects />
				<Skills />
				<Process />
				<About />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
