import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className = "", children, interactive = false, ...props }, ref) => {
		const baseStyles =
			"bg-surface border border-line p-6 md:p-8 rounded-(--radius) transition-all duration-150";
		const interactiveStyles = interactive
			? "hover:bg-surface-hover hover:border-line-active cursor-pointer"
			: "";

		return (
			<div
				ref={ref}
				className={`${baseStyles} ${interactiveStyles} ${className}`}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Card.displayName = "Card";
