import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Company",
  description:
    "About Cognis — a 2026 AI startup building the next generation of cognitive intelligence platforms for enterprise automation.",
  path: "/company/",
});

export default function CompanyPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Company"
            title="Thinking forward, together."
            description="Founded in 2026, Cognis is on a mission to transform how organizations understand, reason about, and act on their knowledge."
          />
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
              <p className="mt-6 text-muted leading-relaxed">
                We believe the next era of enterprise software will be defined by systems that don&apos;t
                just process data — they understand it. Cognis builds the cognitive layer that enables
                organizations to move from information overload to intelligent action.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight">Our vision</h2>
              <p className="mt-6 text-muted leading-relaxed">
                A world where every organization has access to AI that reasons transparently,
                acts autonomously, and remains accountable. Where human judgment is augmented,
                not replaced — and where knowledge truly becomes action.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Values</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            {[
              { title: "Rigor", text: "We pursue truth through evidence, testing, and intellectual honesty." },
              { title: "Transparency", text: "Our AI explains itself. Our company communicates openly." },
              { title: "Trust", text: "Security and privacy are foundational, not optional." },
              { title: "Impact", text: "We measure success by the decisions we enable, not features we ship." },
            ].map((v) => (
              <div key={v.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-medium">{v.title}</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="blog" dark>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Blog</h2>
          <p className="mt-4 text-muted">Insights on cognitive AI, enterprise automation, and the future of intelligent systems.</p>
          <div className="mt-8 space-y-6">
            {[
              { title: "Introducing Cognis: Intelligence that thinks forward", date: "January 2026" },
              { title: "The case for explainable AI in enterprise", date: "February 2026" },
              { title: "Building cognitive agents at scale", date: "March 2026" },
            ].map((post) => (
              <article key={post.title} className="border-b border-border pb-6">
                <time className="text-sm font-mono text-accent">{post.date}</time>
                <h3 className="mt-2 text-lg font-medium">{post.title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <p className="text-muted">Interested in joining us?</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button href="/careers/">View Careers</Button>
            <Button href="/contact/" variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
