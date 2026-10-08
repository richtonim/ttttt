import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Book a Demo",
  description: "Schedule a personalized demo of the Cognis cognitive intelligence platform.",
  path: "/demo/",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
