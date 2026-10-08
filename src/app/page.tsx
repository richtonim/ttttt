import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Capabilities } from "@/components/sections/Capabilities";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { UseCases } from "@/components/sections/UseCases";
import { Architecture } from "@/components/sections/Architecture";
import { Metrics } from "@/components/sections/Metrics";
import { Trust } from "@/components/sections/Trust";
import { Developers } from "@/components/sections/Developers";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Capabilities />
        <PlatformShowcase />
        <UseCases />
        <Architecture />
        <Metrics />
        <Trust />
        <Developers />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
