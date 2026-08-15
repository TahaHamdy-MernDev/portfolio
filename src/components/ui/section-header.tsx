import * as React from "react";

export interface SectionHeaderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	tag: string;
	title: string;
	description?: string;
}

export const SectionHeader = React.forwardRef<
	HTMLDivElement,
	SectionHeaderProps
>(({ className = "", tag, title, description, ...props }, ref) => {
	return (
		<div ref={ref} className={`mb-12 space-y-3 ${className}`} {...props}>
			<div className="font-mono text-xs uppercase tracking-widest text-[#00E5A0] drop-shadow-[0_0_8px_rgba(0,229,160,0.3)]">
				{tag}
			</div>
			<h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 md:text-4xl uppercase font-display leading-none">
				{title}
			</h2>
			{description && (
				<p className="max-w-2xl text-sm text-zinc-400 font-sans leading-relaxed">
					{description}
				</p>
			)}
		</div>
	);
});

SectionHeader.displayName = "SectionHeader";
