import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
}

export function Logo({ variant = "light", showText = true, className }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="NextLayer home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="20" width="24" height="4" rx="1" fill="#7157FF" opacity="0.4" />
        <rect x="6" y="14" width="20" height="4" rx="1" fill="#7157FF" opacity="0.65" />
        <rect x="8" y="8" width="16" height="4" rx="1" fill="#7157FF" />
        <path d="M8 8L16 4L24 8L16 12L8 8Z" fill={isDark ? "#FFFFFF" : "#5035E5"} opacity="0.9" />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-display text-lg font-medium tracking-tight",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          NextLayer
        </span>
      )}
    </Link>
  );
}
