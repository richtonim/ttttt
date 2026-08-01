import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { INSIGHTS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Ideas, research, and perspectives on automotive AI, vehicle intelligence, and the future of autonomous mobility from SOMA Autos.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        label="Insights"
        title="Ideas shaping intelligent mobility."
        description="Research, perspectives, and technical insights from the SOMA team on automotive AI and the future of mobility."
      />

      <Section>
        <div className="divide-y divide-soma-gray-100">
          {INSIGHTS.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.1}>
              <Link
                href={`/insights/${article.slug}/`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 hover:bg-soma-gray-50 transition-colors -mx-6 px-6"
              >
                <div className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-wider text-soma-gray-300 mb-3">
                    {article.category} — {article.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-soma-black group-hover:text-soma-gray-500 transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-soma-gray-400 leading-relaxed">{article.excerpt}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-soma-gray-300 group-hover:text-soma-black group-hover:translate-x-1 transition-all mt-6 md:mt-0 flex-shrink-0" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
