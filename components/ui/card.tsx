import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-white p-6 shadow-card",
        "transition-all duration-200 motion-safe:hover:-translate-y-0.5",
        "motion-safe:hover:border-brand-light motion-safe:hover:shadow-card",
        className
      )}
      {...props}
    />
  );
}
