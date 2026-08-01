import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Analytics",
  description: "Advanced vehicle and fleet analytics with predictive insights, custom dashboards and automated reporting.",
  path: "/platform/analytics/",
});

const features = [
  { title: "Custom Dashboards", description: "Build dashboards tailored to your KPIs with drag-and-drop widgets and real-time data." },
  { title: "Predictive Insights", description: "ML-powered forecasts for maintenance, demand, energy consumption and fleet growth." },
  { title: "Automated Reports", description: "Scheduled reports delivered to stakeholders with export to PDF, CSV and API." },
  { title: "Anomaly Detection", description: "Automatic detection of unusual patterns in vehicle behavior, sensor data and fleet metrics." },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero label="Analytics" title="Data that drives decisions." description="Transform raw vehicle data into actionable insights with advanced analytics and predictive modeling." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
