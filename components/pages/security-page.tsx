import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const securityFeatures = [
  "Data encryption in transit and at rest",
  "Role-based access control (RBAC)",
  "Comprehensive audit logs",
  "Private deployment options",
  "Configurable data retention policies",
  "Sensitive data and PII filtering",
  "Single sign-on (SSO) support",
  "Regional data storage options",
  "Content safety controls",
  "Team and workspace permissions",
];

export function SecurityPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Security</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Enterprise AI without compromising on security, privacy, or control.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 rounded-card border border-border bg-white p-4 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{f}
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="brand">Security roadmap</Badge>
            <Badge variant="muted">Compliance-ready architecture</Badge>
            <Badge variant="muted">Designed for enterprise governance</Badge>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            Security capabilities shown on this page should be updated to reflect the final production implementation and legal policies. NextLayer does not claim SOC 2, ISO 27001, HIPAA, or GDPR certification at this time.
          </p>
          <Button href={getLocalizedPath("/contact", locale)} className="mt-6">Contact our team</Button>
        </Container>
      </Section>
    </>
  );
}
