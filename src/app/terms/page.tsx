import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Entropy terms of service. Read our terms and conditions for using the Entropy platform.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" description="Last updated: January 1, 2026" />
      <ContentSection>
        <div className="max-w-3xl space-y-8 text-white/50 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Entropy platform, you agree to be bound by these Terms of Service. Access is limited to whitelisted partners and authorized users.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Platform Usage</h2>
            <p>You may use the Entropy platform solely for authorized business purposes related to vehicle intelligence, fleet management, and autonomous mobility. You are responsible for maintaining the security of your account credentials.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Processing</h2>
            <p>You retain ownership of your vehicle data. By using our platform, you grant Entropy a license to process this data to provide our services, including AI model training and inference, as described in our Privacy Policy.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Service Level</h2>
            <p>Entropy commits to 99.99% platform uptime for Enterprise customers. Specific SLA terms are outlined in your service agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p>Entropy provides AI decision support tools and is not liable for autonomous vehicle operations. Users maintain ultimate responsibility for vehicle safety and regulatory compliance.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
            <p>For questions about these terms, contact <a href="mailto:legal@entropy.autos" className="text-accent-blue hover:underline">legal@entropy.autos</a>.</p>
          </section>
        </div>
      </ContentSection>
    </>
  );
}
