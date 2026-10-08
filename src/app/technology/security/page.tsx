import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";
import { SECURITY_FEATURES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Security",
  description: "Enterprise-grade security with SOC 2 Type II, ISO 27001, GDPR compliance, explainable AI and complete audit trails.",
  path: "/technology/security/",
});

export default function SecurityPage() {
  return (
    <>
      <PageHero label="Security" title="Trust by design." description="Enterprise-grade security and compliance built into every layer of the Entropy platform." />
      <ContentSection>
        <FeatureGrid items={SECURITY_FEATURES} />
      </ContentSection>
    </>
  );
}
