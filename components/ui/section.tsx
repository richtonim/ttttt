import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "soft" | "dark";
}

export function Section({ className, variant = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        variant === "soft" && "bg-surface-soft",
        variant === "dark" && "bg-surface-dark text-white",
        className
      )}
      {...props}
    />
  );
}
