import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?:
		| "solid"
		| "outline"
		| "success"
		| "neutral"
		| "framework"
		| "language"
		| "database"
		| "infrastructure";
	children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ className = "", variant = "outline", children, ...props }, ref) => {
		const baseStyles =
			"inline-flex items-center gap-1.5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider font-semibold border select-none rounded-md";

		const variants = {
			outline: "bg-transparent text-zinc-400 border-zinc-800",
			solid: "bg-secondary-container text-zinc-400 border-zinc-750",
			success: "bg-secondary-container text-zinc-200 border-zinc-750",
			neutral: "bg-transparent text-zinc-550 border-zinc-800",
			framework: "bg-secondary-container text-zinc-400 border-zinc-750",
			language: "bg-secondary-container text-zinc-400 border-zinc-750",
			database: "bg-secondary-container text-zinc-400 border-zinc-750",
			infrastructure: "bg-secondary-container text-zinc-400 border-zinc-750",
		};

		const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

		return (
			<span ref={ref} className={combinedClassName} {...props}>
				{variant === "success" && (
					<span className="size-1.5 rounded-full bg-accent animate-pulse" />
				)}
				{children}
			</span>
		);
	},
);

Badge.displayName = "Badge";
