import { FadeIn } from "@/lib/animations";
import { Container } from "@/components/ui/Section";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-soma-gray-100">
      <Container>
        <FadeIn>
          {label && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-soma-gray-400 mb-6">
              {label}
            </p>
          )}
          <h1 className="text-display-1 font-semibold text-soma-black mb-6 max-w-4xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-soma-gray-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}
