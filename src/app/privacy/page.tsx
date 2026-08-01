import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Entropy privacy policy. Learn how we collect, use and protect your data.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" description="Last updated: January 1, 2026" />
      <ContentSection>
        <div className="max-w-3xl space-y-8 text-white/50 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly, including account registration data, vehicle telemetry (when authorized), and communications with our team. We also collect usage data and technical information about how you interact with our platform.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use collected information to provide and improve our services, process vehicle data for AI decision-making, communicate with you about your account, and ensure platform security and compliance.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
            <p>We implement enterprise-grade security measures including encryption at rest and in transit, access controls, and regular security audits. We maintain SOC 2 Type II and ISO 27001 certifications.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You may also request data portability or object to certain processing activities. Contact us at privacy@entropy.autos to exercise these rights.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Contact</h2>
            <p>For privacy-related inquiries, contact our Data Protection Officer at <a href="mailto:privacy@entropy.autos" className="text-accent-blue hover:underline">privacy@entropy.autos</a>.</p>
          </section>
        </div>
      </ContentSection>
    </>
  );
}
