import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Entropy is a 2026 AI automotive startup transforming vehicle data into intelligent decisions for safer, faster autonomous mobility.",
  path: "/company/",
});

export default function CompanyPage() {
  return (
    <>
      <PageHero label="Company" title="Turning complexity into motion." description="Founded in 2026, Entropy is building the intelligence layer for the future of mobility — transforming vehicle data into decisions that make transportation safer, faster and more autonomous." />
      <ContentSection title="Our mission">
        <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
          We believe the future of transportation is intelligent. Every vehicle generates millions of signals every second — 
          our mission is to transform that complexity into clear, actionable decisions that power safer roads, 
          more efficient fleets and truly autonomous mobility.
        </p>
        <div className="mt-12 flex gap-4">
          <Button href="/company/careers/" variant="primary">Join our team</Button>
          <Button href="/contact/" variant="secondary">Get in touch</Button>
        </div>
      </ContentSection>
    </>
  );
}
