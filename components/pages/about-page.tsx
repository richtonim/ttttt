import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const values = [
  { title: "Build with clarity", desc: "Simple tools for complex AI systems." },
  { title: "Stay model independent", desc: "No vendor lock-in, ever." },
  { title: "Protect customer control", desc: "Your data, your policies, your choice." },
  { title: "Design for reliability", desc: "Production-grade from day one." },
  { title: "Move with purpose", desc: "Ship meaningful AI, not experiments." },
];

export function AboutPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            Building the intelligent layer for modern business
          </h1>
        </Container>
      </Section>
      <Section variant="soft">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-medium">Our story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            AI is becoming part of every product and every workflow. But building reliable AI systems still requires fragmented tools, model-specific integrations, and complex infrastructure. NextLayer was created to give teams one flexible layer for building, operating, and scaling AI.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <h2 className="font-display text-xl font-medium">Mission</h2>
              <p className="mt-3 text-muted-foreground">Make reliable AI infrastructure accessible to every team.</p>
            </Card>
            <Card>
              <h2 className="font-display text-xl font-medium">Vision</h2>
              <p className="mt-3 text-muted-foreground">A future where every company can safely connect intelligence to its data, products, and workflows.</p>
            </Card>
          </div>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="font-medium">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="text-center">
          <h2 className="font-display text-2xl font-medium">Team</h2>
          <Card className="mx-auto mt-6 max-w-md">
            <p className="text-muted-foreground">Team information coming soon</p>
          </Card>
        </Container>
      </Section>
      <Section variant="soft">
        <Container className="text-center">
          <Button href={getLocalizedPath("/careers", locale)}>View careers</Button>
        </Container>
      </Section>
    </>
  );
}
