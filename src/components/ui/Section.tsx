import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
};

export function Section({ children, id, className, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 lg:py-40",
        dark ? "bg-surface" : "bg-background",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {label && (
        <p className="mb-4 text-sm font-mono uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
