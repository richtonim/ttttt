import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join Cognis — build the future of cognitive intelligence. Open roles in engineering, research, product, and go-to-market.",
  path: "/careers/",
});

const openings = [
  {
    title: "Senior ML Engineer",
    team: "Engineering",
    location: "Remote / San Francisco",
  },
  {
    title: "Research Scientist — Reasoning",
    team: "Research",
    location: "Remote / New York",
  },
  {
    title: "Product Designer",
    team: "Product",
    location: "Remote",
  },
  {
    title: "Solutions Engineer",
    team: "Go-to-Market",
    location: "Remote / London",
  },
  {
    title: "DevRel Engineer",
    team: "Developers",
    location: "Remote",
  },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Careers"
            title="Build the future of intelligence."
            description="Join a team of researchers, engineers, and builders creating the next generation of cognitive AI platforms."
          />
        </Container>
      </Section>

      <Section dark>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Why Cognis</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {[
              { title: "Hard problems", text: "Work on frontier challenges in reasoning, agents, and enterprise AI." },
              { title: "Small team, big impact", text: "Every person shapes the product, culture, and direction." },
              { title: "Remote-first", text: "Work from anywhere with quarterly team gatherings." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Open positions</h2>
          <div className="mt-8 divide-y divide-border">
            {openings.map((job) => (
              <div key={job.title} className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-muted mt-1">{job.team} · {job.location}</p>
                </div>
                <Button href="/contact/" variant="secondary" size="sm">Apply</Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
