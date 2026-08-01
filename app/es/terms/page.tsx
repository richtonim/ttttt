import { SiteLayout } from "@/components/layout/site-layout";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "NextLayer terms of service and acceptable use policy.",
  path: "/terms",
});

export default function Page() {
  return (
    <SiteLayout locale="es">
      <LegalPage title="Terms of Service">
        <p>
          These Terms of Service govern your use of the NextLayer website and platform. This is placeholder legal content and should be reviewed by legal counsel before production launch.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Acceptance of Terms</h2>
        <p className="mt-2">
          By accessing or using NextLayer services, you agree to be bound by these terms. If you do not agree, do not use our services.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Early Access</h2>
        <p className="mt-2">
          Platform access during early access is provided on an invitation-only basis. Features, pricing, and availability may change without notice during this period.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Acceptable Use</h2>
        <p className="mt-2">
          You agree not to use NextLayer services for unlawful purposes, to generate harmful content, or to violate the rights of others. Detailed acceptable use guidelines will be published before general availability.
        </p>
        <h2 className="mt-8 text-lg font-medium text-foreground">Limitation of Liability</h2>
        <p className="mt-2">
          NextLayer services are provided during early access on an &quot;as is&quot; basis. Specific liability terms will be defined in the production terms of service.
        </p>
      </LegalPage>
    </SiteLayout>
  );
}
