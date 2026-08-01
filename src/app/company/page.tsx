import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Company",
  description:
    "About Qualia — a 2026 AI startup building systems that understand context, perception and human intent.",
  path: "/company/",
});

const values = [
  {
    title: "Understanding over processing",
    description:
      "We believe the future of AI lies not in processing more data, but in understanding it more deeply.",
  },
  {
    title: "Human-centered intelligence",
    description:
      "Every system we build is designed to augment human capability, not replace human judgment.",
  },
  {
    title: "Responsible by default",
    description:
      "Privacy, transparency and ethical AI aren't features — they're foundational requirements.",
  },
  {
    title: "Open collaboration",
    description:
      "We publish research, contribute to open standards and partner with the global AI community.",
  },
];

const timeline = [
  { year: "2026", event: "Qualia founded with a mission to build AI that truly understands" },
  { year: "2026", event: "Launched perception engine v1.0 with multimodal capabilities" },
  { year: "2026", event: "Released agent orchestration platform for enterprise customers" },
  { year: "2026", event: "Opened research lab focused on contextual reasoning" },
];

export default function CompanyPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">Company</p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              Intelligence,
              <br />
              deeply understood.
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl">
              Qualia is a 2026 AI startup on a mission to build systems that understand context,
              perception and human intent — not just process data, but truly comprehend it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Our values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="p-8 bg-white border border-qualia-gray-200 rounded-2xl">
                <span className="text-xs text-qualia-accent font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-qualia-black mt-4 mb-3">{value.title}</h3>
                <p className="text-body text-qualia-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Our journey</h2>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.event} className="flex gap-8 items-start">
                <span className="text-2xl font-semibold text-qualia-accent tabular-nums shrink-0 w-20">
                  {item.year}
                </span>
                <p className="text-body text-qualia-gray-600 pt-1">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-qualia-black text-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold mb-6">Join us</h2>
          <p className="text-body-lg text-qualia-gray-400 max-w-xl mx-auto mb-8">
            We&apos;re building the future of AI understanding. Come be part of it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/careers/" className="bg-white text-qualia-black hover:bg-qualia-gray-100">
              View Careers
            </Button>
            <Button href="/contact/" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
