import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-berry-rose focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          {
            // Variants
            "bg-berry-crimson text-white hover:bg-berry-deep shadow-md hover:shadow-lg shadow-berry-crimson/10":
              variant === "primary",
            "bg-berry-light text-berry-deep hover:bg-berry-rose/20":
              variant === "secondary",
            "border-2 border-berry-deep bg-transparent text-berry-deep hover:bg-cream-dark/30":
              variant === "outline",
            "bg-transparent text-taupe hover:text-berry-deep hover:bg-berry-light/30":
              variant === "ghost",

            // Sizes
            "text-xs px-4 py-2": size === "sm",
            "text-sm px-6 py-3": size === "md",
            "text-base px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
