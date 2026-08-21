"use client";

import {
	ArrowRight,
	ArrowUpRight,
	Check,
	Clock,
	Copy,
	Mail,
	MapPin,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

function WhatsAppIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
		</svg>
	);
}

function LinkedInIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
		</svg>
	);
}

function GitHubIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
			/>
		</svg>
	);
}

interface ContactItem {
	label: string;
	val: string;
	desc: string;
	href: string;
	tag: string;
	icon: React.ComponentType<{ className?: string }>;
	brandColor: string;
	brandBg: string;
	brandBorder: string;
}

export function Contact() {
	const t = useTranslations("Contact");
	const tCommon = useTranslations("Common");
	const [copied, setCopied] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const blockRef = useRef<HTMLDivElement>(null);

	const email = "tahahamdy.dev@gmail.com";

	const contactItems: ContactItem[] = [
		{
			label: t("whatsapp_label"),
			val: "+20 10 13745260",
			desc: "Instant chat for project inquiries",
			href: "https://wa.me/201114911898",
			tag: "DIRECT_MSG",
			icon: WhatsAppIcon,
			brandColor: "text-[#25D366]",
			brandBg: "bg-[#25D366]/10",
			brandBorder: "border-[#25D366]/20 group-hover:border-[#25D366]/50",
		},
		{
			label: t("linkedin_label"),
			val: "linkedin.com/in/taha-hamdy",
			desc: "Professional background & network",
			href: "https://www.linkedin.com/in/taha-hamdy",
			tag: "NETWORK",
			icon: LinkedInIcon,
			brandColor: "text-[#0A66C2]",
			brandBg: "bg-[#0A66C2]/10",
			brandBorder: "border-[#0A66C2]/20 group-hover:border-[#0A66C2]/50",
		},
		{
			label: t("github_label"),
			val: "github.com/TahaHamdy-MernDev",
			desc: "Source code & system architectures",
			href: "https://github.com/TahaHamdy-MernDev",
			tag: "CODE_REPO",
			icon: GitHubIcon,
			brandColor: "text-white",
			brandBg: "bg-white/10",
			brandBorder: "border-white/20 group-hover:border-white/50",
		},
	];

	useEffect(() => {
		const el = blockRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
					}
				});
			},
			{ threshold: 0.1 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const copyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2200);
	};

	return (
		<section
			id="contact"
			className="relative py-20 sm:py-24 border-t border-line/80"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Pre-Footer Banner Card */}
				<div className="relative mb-10 sm:mb-14 p-6 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface shadow-md">
					<div className="relative z-10 max-w-200">
						<div className="flex items-center gap-2 mb-4">
							<span className="size-2 rounded-full bg-status-live animate-pulse" />
							<span className="mono text-[0.72rem] font-semibold uppercase tracking-wider text-accent-ink px-3 py-1 rounded-full bg-accent-soft border border-accent-border inline-block">
								{t("banner_badge")}
							</span>
						</div>

						<h2 className="font-sans text-[clamp(1.6rem,4vw,2.8rem)] font-bold text-ink tracking-tight leading-tight mb-3 sm:mb-4">
							{t("banner_title")}
						</h2>

						<p className="text-muted text-[0.98rem] sm:text-[1.08rem] leading-relaxed mb-8 max-w-[56ch]">
							{t("banner_subtitle")}
						</p>

						<div className="p-3.5 sm:p-4 rounded-xl bg-surface/70 border border-line flex items-center gap-3 w-fit">
							<Clock className="size-4 text-accent-ink shrink-0" />
							<span className="mono text-[0.74rem] sm:text-[0.78rem] text-muted">
								{t("response_time")}{" "}
								<strong className="text-ink font-medium">
									{t("response_time_val")}
								</strong>
							</span>
						</div>
					</div>
				</div>

				<SectionHead
					title={t("section_title")}
					num={t("section_num")}
					tag={t("section_tag")}
				/>

				{/* 3-Column Bento Grid with Balanced Proportions */}
				<div
					ref={blockRef}
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch transition-all duration-500 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
					}`}
				>
					{/* Card 1: Dedicated Image Card (4 cols) — Compact min-h-75 on mobile */}
					<div className="lg:col-span-4 relative rounded-xl sm:rounded-2xl overflow-hidden border border-line bg-surface group min-h-75 sm:min-h-110 shadow-lg hover:border-accent/50 transition-all duration-300 flex flex-col justify-between p-4 sm:p-5">
						<Image
							src="/taha-contact.jpg"
							alt="Taha Hamdy — Full-Stack Developer & Systems Architect"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							className="object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.95] contrast-[1.05]"
							priority
						/>

						{/* Subtle Bottom & Top Vignette Gradients */}
						<div className="absolute inset-0 bg-linear-to-t from-paper/95 via-paper/40 via-40% to-transparent pointer-events-none" />
						<div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-paper/70 to-transparent pointer-events-none" />

						{/* Top Availability Badge */}
						<div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
							<div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-emerald-500/30 shadow-lg shadow-black/40">
								<span className="relative flex size-2">
									<span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
								</span>
								<span className="mono text-[0.64rem] sm:text-[0.68rem] uppercase tracking-wider text-emerald-400 font-bold drop-shadow">
									{tCommon("statusBadge")}
								</span>
							</div>

							<div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/40 text-zinc-200">
								<MapPin className="size-3 text-accent-ink shrink-0" />
								<span className="mono text-[0.64rem] sm:text-[0.68rem] font-medium tracking-tight">
									Alexandria, EG
								</span>
							</div>
						</div>

						{/* Bottom Identity Card */}
						<div className="relative z-10 p-3 sm:p-3.5 rounded-xl bg-paper/90 backdrop-blur-md border border-line/80 shadow-lg">
							<h3 className="font-sans font-extrabold text-[1.12rem] sm:text-[1.2rem] text-ink leading-tight m-0">
								{tCommon("brandTitle")}
							</h3>
							<div className="flex items-center justify-between gap-2 mt-1">
								<span className="mono text-[0.7rem] sm:text-[0.74rem] text-accent-ink font-medium">
									{tCommon("systemArchitecture")}
								</span>
								<span className="mono text-[0.64rem] sm:text-[0.66rem] text-muted-2 shrink-0">
									[ACTIVE_CONTRACTS]
								</span>
							</div>
						</div>
					</div>

					{/* Card 2: Primary Email Outreach Card (4 cols) */}
					<div className="lg:col-span-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface border border-line hover:border-accent/40 transition-all duration-200 flex flex-col justify-between min-h-auto sm:min-h-110 shadow-lg">
						<div>
							<div className="flex items-center justify-between mb-3">
								<span className="mono text-[0.68rem] uppercase tracking-wider text-muted-2 font-semibold">
									{t("email_label")}
								</span>
								<span className="mono text-[0.68rem] text-accent-ink bg-accent-soft border border-accent-border px-2 py-0.5 rounded-md font-bold">
									PRIMARY_CONTACT
								</span>
							</div>

							<h3 className="font-sans text-[1.24rem] sm:text-[1.45rem] font-extrabold text-ink tracking-tight mb-2">
								{t("direct_inquiries")}
							</h3>
							<p className="text-muted text-[0.84rem] sm:text-[0.88rem] leading-relaxed mb-4">
								{t("email_desc")}
							</p>

							{/* Display Copyable Email Bar */}
							<div className="p-3 rounded-xl bg-surface-card border border-line flex items-center justify-between gap-2 mb-4 group/email">
								<span className="mono text-[0.76rem] sm:text-[0.82rem] text-ink font-semibold select-all truncate">
									{email}
								</span>
								<button
									type="button"
									onClick={copyEmail}
									className="text-muted hover:text-accent-ink p-1.5 rounded-lg hover:bg-surface transition-colors cursor-pointer shrink-0"
									aria-label={t("copy_email")}
								>
									{copied ? (
										<Check className="size-4 text-emerald-400 animate-in zoom-in duration-200" />
									) : (
										<Copy className="size-4" />
									)}
								</button>
							</div>
						</div>

						{/* Action Buttons Row */}
						<div className="flex flex-col gap-3 pt-2">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
								{/* Copy Button */}
								<button
									type="button"
									onClick={copyEmail}
									className={`cursor-pointer py-2.5 sm:py-3 px-4 rounded-xl text-[0.82rem] sm:text-[0.84rem] font-semibold flex items-center justify-center gap-2 border transition-all duration-200 active:scale-[0.97] select-none ${
										copied
											? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 shadow-md shadow-emerald-500/10"
											: "bg-surface-card hover:bg-surface-hover border-line hover:border-accent/40 text-ink hover:text-accent-ink shadow-sm"
									}`}
								>
									{copied ? (
										<>
											<Check className="size-4 text-emerald-400 animate-in zoom-in duration-200" />
											<span>{t("copied")}</span>
										</>
									) : (
										<>
											<Copy className="size-4 text-muted-2 group-hover:text-accent-ink transition-colors" />
											<span>{t("copy_email")}</span>
										</>
									)}
								</button>

								{/* Send Direct Email Primary CTA */}
								<a
									href={`mailto:${email}`}
									className="py-2.5 sm:py-3 px-4 rounded-xl text-[0.82rem] sm:text-[0.84rem] text-center flex items-center justify-center gap-2 font-semibold bg-accent hover:bg-accent-hover text-paper active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 no-underline group/btn"
								>
									<Mail className="size-4 transition-transform group-hover/btn:-translate-y-0.5" />
									<span>{t("send_direct")}</span>
								</a>
							</div>

							<div className="flex items-center justify-center gap-1.5 text-[0.68rem] sm:text-[0.7rem] mono text-muted">
								<Clock className="size-3 text-accent-ink" />
								<span>
									{t("response_time")}{" "}
									<strong className="text-ink font-medium">
										{t("response_time_val")}
									</strong>
								</span>
							</div>
						</div>
					</div>

					{/* Card 3: Secondary Communication Channels (4 cols) */}
					<div className="md:col-span-2 lg:col-span-4 flex flex-col justify-between gap-2.5 sm:gap-3 min-h-auto sm:min-h-110">
						{contactItems.map((item) => {
							const Icon = item.icon;
							return (
								<a
									key={item.label}
									href={item.href}
									target="_blank"
									rel="noreferrer"
									className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-surface border border-line hover:border-accent hover:bg-surface-hover active:scale-[0.98] transition-all duration-200 no-underline flex flex-col justify-between flex-1 group shadow-md"
								>
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-3">
											<div
												className={`p-2.5 rounded-xl border transition-all duration-200 ${item.brandBg} ${item.brandColor} ${item.brandBorder}`}
											>
												<Icon className="size-4.5 shrink-0" />
											</div>
											<div>
												<span className="font-sans text-[0.98rem] font-bold text-ink group-hover:text-accent-ink transition-colors block leading-tight">
													{item.label}
												</span>
												<span className="text-[0.74rem] text-muted block mt-0.5">
													{item.desc}
												</span>
											</div>
										</div>

										<div className="flex items-center gap-2">
											<span className="mono text-[0.64rem] text-muted-2 uppercase tracking-wider px-2 py-0.5 rounded bg-surface-card border border-line hidden sm:inline-block">
												{item.tag}
											</span>
											<ArrowUpRight className="size-4 text-muted-2 group-hover:text-accent rtl:-rotate-90 transition-colors" />
										</div>
									</div>

									<div className="mt-2 pt-2 border-t border-line/40 flex items-center justify-between">
										<span className="mono text-[0.74rem] text-muted group-hover:text-ink transition-colors truncate">
											{item.val}
										</span>
										<span className="mono text-[0.66rem] text-accent-ink opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
											<span>CONNECT</span>
											<ArrowRight className="size-3 rtl:rotate-180" />
										</span>
									</div>
								</a>
							);
						})}

						{/* Telemetry Status Strip */}
						<div className="p-3.5 rounded-xl bg-surface/80 border border-line flex items-center justify-between text-muted mono text-[0.7rem]">
							<div className="flex items-center gap-2">
								<span className="size-2 rounded-full bg-accent animate-pulse" />
								<span>GLOBAL_AVAILABILITY: REMOTE</span>
							</div>
							<span className="text-accent-ink font-semibold">
								[CONTRACTS_OPEN]
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
