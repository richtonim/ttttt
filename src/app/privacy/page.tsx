import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "SOMA Autos privacy policy. Learn how we collect, use, and protect your data.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" description="Last updated: January 1, 2026" />
      <Section>
        <div className="max-w-3xl space-y-8">
          {[
            {
              title: "Introduction",
              content: "SOMA Autos (\"SOMA,\" \"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website soma.autos or use our platform and services.",
            },
            {
              title: "Information We Collect",
              content: "We may collect personal information that you voluntarily provide, including name, email address, company name, and job title when you contact us, register for an account, or request API access. We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, and usage data through cookies and similar technologies.",
            },
            {
              title: "How We Use Your Information",
              content: "We use collected information to provide and maintain our services, respond to inquiries, send administrative communications, improve our platform, comply with legal obligations, and protect against fraudulent or unauthorized activity.",
            },
            {
              title: "Data Sharing",
              content: "We do not sell your personal information. We may share information with service providers who assist in operating our platform, when required by law, or in connection with a business transaction such as a merger or acquisition.",
            },
            {
              title: "Data Security",
              content: "We implement appropriate technical and organizational measures to protect your personal information, including encryption, access controls, and regular security assessments.",
            },
            {
              title: "Your Rights",
              content: "Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to object to or restrict certain processing. Contact us at privacy@soma.autos to exercise these rights.",
            },
            {
              title: "Contact",
              content: "For questions about this Privacy Policy, contact us at privacy@soma.autos or SOMA Autos, San Francisco, CA, United States.",
            },
          ].map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <h2 className="text-xl font-semibold text-soma-black mb-3">{section.title}</h2>
              <p className="text-soma-gray-400 leading-relaxed">{section.content}</p>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
