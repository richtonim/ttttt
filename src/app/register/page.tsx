import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WhitelistForm } from "@/components/ui/WhitelistForm";

export const metadata: Metadata = buildMetadata({
  title: "Register",
  description: "Create your Entropy account. Registration is limited to whitelisted partners.",
  path: "/register/",
});

export default function RegisterPage() {
  return (
    <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-md w-full px-6">
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <WhitelistForm mode="register" />
        </div>
      </div>
    </section>
  );
}
