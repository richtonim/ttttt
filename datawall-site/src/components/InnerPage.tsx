import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, ContentSection, FeatureGrid } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import type { PageContent } from "@/lib/pages";

export function createPageMetadata(page: PageContent): Metadata {
  return createMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export function InnerPage({ page }: { page: PageContent }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        cta={{ label: "Book a Demo", href: "/demo/" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact/" }}
      />
      <ContentSection title="Overview">
        <p>{page.description}</p>
      </ContentSection>
      <FeatureGrid features={page.features} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="subsection-title font-medium text-white">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            See how Datawall can secure your {page.title.toLowerCase()} infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demo/" className="btn-primary">Book a Demo</Link>
            <Link href="/contact/" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
