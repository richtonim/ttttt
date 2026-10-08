import { PageLayout } from "@/components/PageLayout";
import { WhitelistGate } from "@/components/WhitelistGate";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Register",
  description:
    "Create your Qualia account. Registration is currently limited to invited partners.",
  path: "/register/",
  noIndex: true,
});

export default function RegisterPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-md mx-auto px-6">
          <div className="p-8 lg:p-10 border border-qualia-gray-200 rounded-2xl">
            <WhitelistGate mode="register" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
