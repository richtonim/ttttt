import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-white text-black hover:bg-white/90 border border-white",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
  ghost:
    "bg-transparent text-white/70 hover:text-white border border-transparent",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  large: "px-8 py-4 text-base",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "default",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
