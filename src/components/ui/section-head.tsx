interface SectionHeadProps {
	title: string;
	num: string;
	tag?: string;
	className?: string;
}

export function SectionHead({
	title,
	num,
	tag,
	className = "",
}: SectionHeadProps) {
	return (
		<div
			className={`section-head flex items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 pb-3.5 sm:pb-4 border-b border-line ${className}`}
		>
			<div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
				<span className="mono text-[0.74rem] sm:text-[0.78rem] font-bold text-accent-ink tracking-wider shrink-0">
					{num}
				</span>
				<h2 className="section-title text-[clamp(1.15rem,3.8vw,1.9rem)] font-bold font-sans tracking-tight text-ink m-0">
					{title}
				</h2>
			</div>

			{tag && (
				<span className="mono text-[0.66rem] sm:text-[0.72rem] uppercase tracking-wider font-semibold text-accent-ink px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent-soft border border-accent-border shrink-0">
					{tag}
				</span>
			)}
		</div>
	);
}
