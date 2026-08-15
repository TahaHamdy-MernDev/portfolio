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
			outline: "bg-transparent text-muted border-line",
			solid: "bg-surface text-ink border-line",
			success: "bg-accent-soft text-accent-ink border-accent-border",
			neutral: "bg-surface-card text-muted border-line",
			framework: "bg-surface text-ink border-accent/40",
			language: "bg-surface text-ink border-line",
			database: "bg-surface text-ink border-line",
			infrastructure: "bg-surface text-muted border-line",
		};

		const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

		return (
			<span ref={ref} className={combinedClassName} {...props}>
				{variant === "success" && (
					<span className="size-1.5 rounded-full bg-status-live animate-pulse" />
				)}
				{children}
			</span>
		);
	},
);

Badge.displayName = "Badge";
