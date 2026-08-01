import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Cognis terms of service — the legal agreement governing use of our platform and services.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionHeader
            label="Legal"
            title="Terms of Service"
            description={`Last updated: January 1, ${SITE.year}`}
          />

          <div className="space-y-8 text-muted">
            <section>
              <h2 className="text-xl font-medium text-foreground">Agreement to Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using {SITE.name} services at {SITE.domain}, you agree to be bound by these
                Terms of Service. If you do not agree, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Use of Services</h2>
              <p className="mt-4 leading-relaxed">
                You may use our services only for lawful purposes and in accordance with these Terms.
                Access to certain features requires whitelist approval. You are responsible for maintaining
                the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Intellectual Property</h2>
              <p className="mt-4 leading-relaxed">
                The {SITE.name} platform, including its software, models, documentation, and branding,
                is owned by {SITE.name} and protected by intellectual property laws. You retain ownership
                of your data and outputs generated through the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Limitation of Liability</h2>
              <p className="mt-4 leading-relaxed">
                To the maximum extent permitted by law, {SITE.name} shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Contact</h2>
              <p className="mt-4 leading-relaxed">
                Questions about these Terms? Contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
