import { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  href?: string;
}

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand/50",
  secondary:
    "bg-white text-foreground border border-border hover:bg-surface-soft focus-visible:ring-brand/30",
  ghost: "text-foreground hover:bg-surface-soft focus-visible:ring-brand/30",
  link: "text-brand hover:text-brand-dark underline-offset-4 hover:underline p-0 h-auto",
};

const sizes = {
  default: "h-11 px-5 text-sm font-medium",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-button transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100",
      variants[variant],
      variant !== "link" && sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
