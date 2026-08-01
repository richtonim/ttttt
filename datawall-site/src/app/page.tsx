import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { UseCases } from "@/components/home/UseCases";
import { MetricsSection } from "@/components/home/MetricsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { DevelopersSection } from "@/components/home/DevelopersSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <CoreCapabilities />
      <PlatformShowcase />
      <WorkflowSection />
      <UseCases />
      <MetricsSection />
      <TrustSection />
      <DevelopersSection />
      <FinalCTA />
    </>
  );
}
