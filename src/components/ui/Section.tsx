import { FadeIn } from "@/lib/animations";

interface SectionTitleProps {
  label?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`max-w-4xl ${alignClass} ${className}`}>
      {label && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-soma-gray-400 mb-6">
          {label}
        </p>
      )}
      <h2 className="text-display-2 font-semibold text-soma-black mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-soma-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 ${
        dark ? "bg-soma-black text-white" : "bg-white"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}
