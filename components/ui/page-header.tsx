import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ badge, title, subtitle, className, children, ...props }: PageHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)} {...props}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-muted-foreground">
          {badge}
        </span>
      )}
      <h1 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">{subtitle}</p>
      )}
      {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
    </div>
  );
}
