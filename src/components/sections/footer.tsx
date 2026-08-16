import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("Footer");

	const links = [
		{ label: "GITHUB", href: "https://github.com/TahaHamdy-MernDev" },
		{ label: "LINKEDIN", href: "https://www.linkedin.com/in/taha-hamdy" },
		{ label: "WHATSAPP", href: "https://wa.me/201114911898" },
		{ label: "EMAIL", href: "mailto:tahahamdy.dev@gmail.com" },
	];

	return (
		<footer className="border-t border-line bg-surface-card pt-16 pb-12 overflow-hidden relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
				{/* Grand Typographic Watermark Logo */}
				<div className="select-none pointer-events-none mb-6 sm:mb-8 tracking-tighter">
					<span className="font-extrabold text-[clamp(2.3rem,10vw,6.5rem)] leading-none text-transparent bg-clip-text bg-linear-to-b from-white/20 via-orange-500/10 to-transparent block font-sans">
						TAHA HAMDY
					</span>
				</div>

				{/* Social Links Bar */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noreferrer"
							className="mono text-[0.74rem] sm:text-[0.78rem] text-muted hover:text-accent-ink transition-colors px-3 py-1.5 rounded-full border border-line bg-surface/50 hover:bg-surface inline-flex items-center gap-1"
						>
							<span>{link.label}</span>
							<ArrowUpRight className="size-3 rtl:-rotate-90 shrink-0" />
						</a>
					))}
				</div>

				{/* Footer Meta & Copyright */}
				<div className="w-full pt-6 border-t border-line/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.72rem] sm:text-[0.76rem] mono text-muted">
					<div className="flex items-center gap-2">
						<span>{t("copyright")}</span>
					</div>
					<div className="text-muted-2 text-center sm:text-end">
						<span>{t("built_with")}</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
