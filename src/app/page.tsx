import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Section";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { UseCases } from "@/components/home/UseCases";
import { Workflow } from "@/components/home/Workflow";
import { TechModules } from "@/components/home/TechModules";
import { TrustSecurity } from "@/components/home/TrustSecurity";
import { DeveloperModule } from "@/components/home/DeveloperModule";
import { FinalCTA } from "@/components/home/FinalCTA";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <BrandIntro />
      <CoreCapabilities />
      <PlatformShowcase />
      <UseCases />
      <Workflow />
      <TechModules />
      <TrustSecurity />
      <DeveloperModule />
      <FinalCTA />
    </PageLayout>
  );
}
