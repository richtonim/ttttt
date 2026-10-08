import { PageLayout } from "@/components/PageLayout";
import { WhitelistGate } from "@/components/WhitelistGate";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Log in",
  description: "Log in to the Qualia platform. Access is limited to whitelisted partners.",
  path: "/login/",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-md mx-auto px-6">
          <div className="p-8 lg:p-10 border border-qualia-gray-200 rounded-2xl">
            <WhitelistGate mode="login" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
