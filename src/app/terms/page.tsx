import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "SOMA Autos terms of service. Read the terms governing use of our platform and services.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of Service" description="Last updated: January 1, 2026" />
      <Section>
        <div className="max-w-3xl space-y-8">
          {[
            {
              title: "Agreement to Terms",
              content: "By accessing or using the SOMA Autos website and platform (\"Services\"), you agree to be bound by these Terms of Service. If you do not agree, do not use our Services.",
            },
            {
              title: "Description of Services",
              content: "SOMA provides an AI-powered automotive intelligence platform that processes vehicle data, deploys AI models, and delivers real-time operational intelligence for automotive manufacturers, fleet operators, and mobility platforms.",
            },
            {
              title: "Account Registration",
              content: "Access to certain features requires registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Registration is currently limited to whitelisted partners.",
            },
            {
              title: "Acceptable Use",
              content: "You agree not to misuse our Services, including attempting to gain unauthorized access, interfering with platform operations, reverse engineering our software, or using the Services for any unlawful purpose.",
            },
            {
              title: "Intellectual Property",
              content: "All content, features, and functionality of the Services are owned by SOMA Autos and protected by intellectual property laws. You may not copy, modify, or distribute our content without prior written consent.",
            },
            {
              title: "Limitation of Liability",
              content: "To the maximum extent permitted by law, SOMA Autos shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services.",
            },
            {
              title: "Governing Law",
              content: "These Terms are governed by the laws of the State of California, United States. Any disputes shall be resolved in the courts of San Francisco County, California.",
            },
            {
              title: "Contact",
              content: "For questions about these Terms, contact legal@soma.autos.",
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
