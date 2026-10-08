import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { PlatformCapabilities } from "@/components/home/PlatformCapabilities";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Technology } from "@/components/home/Technology";
import { Solutions } from "@/components/home/Solutions";
import { Workflow } from "@/components/home/Workflow";
import { Metrics } from "@/components/home/Metrics";
import { Security } from "@/components/home/Security";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Developers } from "@/components/home/Developers";
import { Vision } from "@/components/home/Vision";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <PlatformCapabilities />
      <ProductShowcase />
      <Technology />
      <Solutions />
      <Workflow />
      <Metrics />
      <Security />
      <CaseStudies />
      <Developers />
      <Vision />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
