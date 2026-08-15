import * as React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className = "", variant = "primary", size = "md", children, ...props },
		ref,
	) => {
		const baseStyles =
			"inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

		const variants = {
			primary: "bg-accent text-[#131313] hover:opacity-90 active:opacity-85",
			secondary:
				"bg-transparent text-white border border-white hover:bg-white/10 active:bg-white/15",
			outline:
				"bg-transparent text-zinc-400 border border-zinc-800 hover:border-white hover:text-white",
			ghost:
				"bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/30 active:bg-zinc-900/50",
		};

		const sizes = {
			sm: "h-8 px-3.5 text-[10px]",
			md: "h-10 px-5",
			lg: "h-12 px-7 text-sm",
		};

		const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

		return (
			<button ref={ref} className={combinedClassName} {...props}>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
