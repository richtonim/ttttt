import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudies() {
  return (
    <Section className="border-t border-soma-gray-100">
      <SectionTitle
        title={
          <>
            Intelligence that moves
            <br />
            business forward.
          </>
        }
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-soma-gray-100">
        {CASE_STUDIES.map((study, i) => (
          <FadeIn key={study.title} delay={i * 0.1}>
            <div className="bg-white p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-soma-black mb-4">
                {study.title}
              </h3>
              <p className="text-sm text-soma-gray-400 leading-relaxed mb-8 flex-grow">
                {study.description}
              </p>
              <div className="space-y-3 pt-6 border-t border-soma-gray-100">
                {study.results.map((result) => (
                  <p
                    key={result}
                    className="font-mono text-xs text-soma-black flex items-center gap-2"
                  >
                    <span className="text-soma-accent">→</span>
                    {result}
                  </p>
                ))}
              </div>
              <p className="font-mono text-[10px] text-soma-gray-300 mt-6 uppercase tracking-wider">
                Illustrative results — replace with verified data before launch
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
