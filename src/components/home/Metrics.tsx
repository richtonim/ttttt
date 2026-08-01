import { AnimatedCounter, FadeIn } from "@/lib/animations";
import { Section } from "@/components/ui/Section";
import { METRICS } from "@/lib/constants";

export function Metrics() {
  return (
    <Section dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {METRICS.map((metric, i) => (
          <FadeIn key={metric.label} delay={i * 0.1}>
            <div className="text-center md:text-left">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-soma-gray-400">
                {metric.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
