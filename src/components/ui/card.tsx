import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, interactive = false, ...props }, ref) => {
    const baseStyles = "bg-zinc-950 border border-zinc-800 p-8 rounded-sm transition-colors duration-200";
    const interactiveStyles = interactive 
      ? "hover:bg-[#181818] hover:border-[#00E5A0] hover:shadow-[0_0_15px_rgba(0,229,160,0.1)] cursor-pointer" 
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
  }
);

Card.displayName = "Card";
