import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { TRUST_ITEMS } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Security",
  description:
    "Cognis security — privacy by design, explainable AI, enterprise security certifications, role-based access, and audit trails.",
  path: "/security/",
});

const complianceItems = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Available" },
  { name: "CCPA", status: "Compliant" },
];

export default function SecurityPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Security"
            title="Security without compromise."
            description="Enterprise-grade security architecture designed from the ground up for organizations that demand the highest standards of data protection and governance."
          />
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} id={item.title.toLowerCase().replace(/\s+/g, "-")} className="border border-border p-8">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="compliance">
        <Container>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Compliance & Certifications</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {complianceItems.map((item) => (
              <div key={item.name} className="bg-background p-6 flex justify-between items-center">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm font-mono text-accent">{item.status}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="privacy" dark>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Privacy</h2>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">
            Data minimization, encryption at rest (AES-256) and in transit (TLS 1.3), regional data
            residency options, and zero-retention inference modes for sensitive workloads.
          </p>
        </Container>
      </Section>

      <Section id="access">
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Access Control</h2>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">
            SSO via SAML 2.0 and OIDC, SCIM provisioning, multi-factor authentication, and
            granular role-based permissions at the organization, team, and resource level.
          </p>
        </Container>
      </Section>

      <Section id="audit" dark>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight">Audit Trails</h2>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">
            Immutable, tamper-evident logs of every API call, agent action, model invocation, and
            administrative change. Export to SIEM systems with standard formats.
          </p>
        </Container>
      </Section>
    </PageLayout>
  );
}
