import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { INSIGHTS } from "@/lib/constants";

export function InsightsPreview() {
  return (
    <Section className="border-t border-soma-gray-100">
      <SectionTitle
        title="Ideas shaping intelligent mobility."
        className="mb-16"
      />

      <div className="divide-y divide-soma-gray-100">
        {INSIGHTS.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            <Link
              href={`/insights/${article.slug}/`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 hover:bg-soma-gray-50 transition-colors duration-300 -mx-6 px-6"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-soma-gray-300 mb-2">
                  {article.category} — {article.date}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-soma-black group-hover:text-soma-gray-500 transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 text-soma-gray-300 group-hover:text-soma-black group-hover:translate-x-1 transition-all duration-300 mt-4 md:mt-0 flex-shrink-0" />
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/insights/"
          className="font-mono text-sm text-soma-gray-400 hover:text-soma-black transition-colors inline-flex items-center gap-2"
        >
          View all insights
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
