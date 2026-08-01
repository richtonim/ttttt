import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "SDKs",
  description: "Official Entropy SDKs for Python, TypeScript, Go and Rust with full type safety and comprehensive documentation.",
  path: "/developers/sdks/",
});

const sdks = [
  { title: "Python SDK", description: "pip install entropy-sdk — Full async support with pandas integration for data analysis." },
  { title: "TypeScript SDK", description: "npm install @entropy/sdk — Type-safe client with React hooks and Node.js support." },
  { title: "Go SDK", description: "go get github.com/entropy-autos/sdk-go — High-performance client for backend services." },
  { title: "Rust SDK", description: "cargo add entropy-sdk — Zero-copy streaming with tokio async runtime support." },
];

export default function SDKsPage() {
  return (
    <>
      <PageHero label="SDKs" title="Official client libraries." description="Get started quickly with our official SDKs, available for all major programming languages." />
      <ContentSection><FeatureGrid items={sdks} /></ContentSection>
    </>
  );
}
