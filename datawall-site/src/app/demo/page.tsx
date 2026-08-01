import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { DemoForm } from "./DemoForm";

export const metadata: Metadata = createMetadata({
  title: "Book a Demo",
  description: "Schedule a personalized demo of the Datawall AI data security platform.",
  path: "/demo/",
});

export default function DemoPage() {
  return <DemoForm />;
}
