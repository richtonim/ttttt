import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description: "Datawall enterprise pricing plans for AI data security and privacy governance.",
  path: "/pricing/",
});

export default function PricingPage() {
  return <PricingContent />;
}
