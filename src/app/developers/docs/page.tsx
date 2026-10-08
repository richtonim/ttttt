import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Documentation",
  description: "Complete documentation for the Entropy platform including guides, tutorials, API reference and best practices.",
  path: "/developers/docs/",
});

const sections = [
  { title: "Getting Started", items: ["Quick Start Guide", "Authentication", "Your First API Call", "Sandbox Environment"] },
  { title: "Core Concepts", items: ["Vehicle Data Model", "Fleet Management", "AI Decision Engine", "Real-time Streaming"] },
  { title: "Guides", items: ["Fleet Onboarding", "Predictive Maintenance Setup", "Custom Dashboards", "Edge AI Deployment"] },
  { title: "Reference", items: ["API Reference", "SDK Documentation", "Webhook Events", "Error Codes"] },
];

export default function DocsPage() {
  return (
    <>
      <PageHero label="Documentation" title="Everything you need to build." description="Comprehensive guides, tutorials and reference documentation for the Entropy platform." />
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/50 hover:text-accent-blue transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
