import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Webhooks",
  description: "Real-time event notifications via webhooks for vehicle alerts, maintenance triggers and fleet events.",
  path: "/developers/webhooks/",
});

const events = [
  { title: "vehicle.alert", description: "Triggered when a vehicle exceeds risk thresholds or enters a geofence." },
  { title: "maintenance.predicted", description: "Fired when predictive maintenance models detect component degradation." },
  { title: "fleet.anomaly", description: "Notifies when fleet-wide anomalies are detected in utilization or efficiency." },
  { title: "autonomous.disengagement", description: "Logged when an autonomous vehicle requires human intervention." },
];

export default function WebhooksPage() {
  return (
    <>
      <PageHero label="Webhooks" title="Real-time event delivery." description="Receive instant notifications for vehicle events, maintenance alerts and fleet anomalies." />
      <ContentSection><FeatureGrid items={events} /></ContentSection>
    </>
  );
}
