import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Logistics & Delivery",
  description: "Last-mile routing, driver coaching, delivery SLA optimization and real-time proof-of-delivery for logistics fleets.",
  path: "/solutions/logistics/",
});

const features = [
  { title: "Last-mile Routing", description: "Dynamic route optimization with real-time traffic, weather and delivery window constraints." },
  { title: "Driver Coaching", description: "In-cab feedback and post-trip analysis to improve safety scores and fuel efficiency." },
  { title: "SLA Management", description: "Real-time SLA tracking with proactive alerts and automated customer notifications." },
  { title: "Proof of Delivery", description: "Digital POD with photo capture, e-signature and automated exception handling." },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHero label="Logistics & Delivery" title="Deliver smarter." description="Optimize last-mile delivery with AI-powered routing, driver coaching and real-time SLA management." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
