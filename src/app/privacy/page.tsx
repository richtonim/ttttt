import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Cognis privacy policy — how we collect, use, and protect your data.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionHeader
            label="Legal"
            title="Privacy Policy"
            description={`Last updated: January 1, ${SITE.year}`}
          />

          <div className="prose prose-invert max-w-none space-y-8 text-muted">
            <section>
              <h2 className="text-xl font-medium text-foreground">Introduction</h2>
              <p className="mt-4 leading-relaxed">
                {SITE.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our platform and services at {SITE.domain}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Information We Collect</h2>
              <p className="mt-4 leading-relaxed">
                We collect information you provide directly (account details, contact information),
                usage data (API calls, agent interactions), and technical data (IP addresses, device information)
                necessary to operate and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">How We Use Your Information</h2>
              <p className="mt-4 leading-relaxed">
                We use collected information to provide and maintain our services, process transactions,
                send communications, improve our platform, and ensure security. We do not sell your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Data Security</h2>
              <p className="mt-4 leading-relaxed">
                We implement industry-standard security measures including encryption at rest and in transit,
                access controls, and regular security audits. See our{" "}
                <a href="/security/" className="text-accent hover:underline">Security page</a> for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground">Contact</h2>
              <p className="mt-4 leading-relaxed">
                For privacy-related inquiries, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a>.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
