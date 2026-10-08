import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { TechFlow } from "@/components/sections/TechFlow";
import { UseCases } from "@/components/sections/UseCases";
import { DataMetrics } from "@/components/sections/DataMetrics";
import { Security } from "@/components/sections/Security";
import { Developers } from "@/components/sections/Developers";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CoreCapabilities />
      <PlatformShowcase />
      <TechFlow />
      <UseCases />
      <DataMetrics />
      <Security />
      <Developers />
      <FinalCTA />
    </>
  );
}
