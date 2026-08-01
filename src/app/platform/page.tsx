import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { PLATFORM_CAPABILITIES } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Platform",
  description:
    "The SOMA intelligence platform unifies vehicle data, AI models, and operational systems into one automotive-scale infrastructure.",
  path: "/platform/",
});

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        label="Platform"
        title="The intelligence layer for modern vehicles."
        description="SOMA unifies sensor data, operational information, and AI models into one intelligent automotive platform — from real-time vehicle intelligence to autonomous decisioning."
      />

      <Section>
        <div className="divide-y divide-soma-gray-100">
          {PLATFORM_CAPABILITIES.map((cap, i) => (
            <FadeIn key={cap.number} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 md:py-16">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-soma-gray-300">{cap.number}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-soma-black">{cap.title}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-soma-gray-400 leading-relaxed mb-3">{cap.description}</p>
                  <p className="font-mono text-sm text-soma-gray-300">{cap.tagline}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 flex flex-col sm:flex-row gap-4">
          <Button href="/contact/">Request a Demo</Button>
          <Button href="/developers/" variant="secondary">View Documentation</Button>
        </FadeIn>
      </Section>
    </>
  );
}
