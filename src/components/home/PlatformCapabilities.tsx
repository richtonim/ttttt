import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { PLATFORM_CAPABILITIES } from "@/lib/constants";

export function PlatformCapabilities() {
  return (
    <Section className="border-t border-soma-gray-100">
      <SectionTitle
        title={
          <>
            One intelligence layer.
            <br />
            Every vehicle system.
          </>
        }
        className="mb-20"
      />

      <div className="divide-y divide-soma-gray-100">
        {PLATFORM_CAPABILITIES.map((cap, i) => (
          <FadeIn key={cap.number} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16">
              <div className="md:col-span-2">
                <span className="font-mono text-sm text-soma-gray-300">
                  {cap.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-soma-black mb-4">
                  {cap.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-soma-gray-400 mb-3 leading-relaxed">
                  {cap.description}
                </p>
                <p className="text-sm text-soma-gray-300 font-mono">
                  {cap.tagline}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
