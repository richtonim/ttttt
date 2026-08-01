import { SiteLayout } from "@/components/layout/site-layout";
import { HomePage } from "@/components/pages/home-page";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "NextLayer — AI Agents, Knowledge and Workflow Infrastructure",
  description: "Build AI agents, connect company knowledge, automate workflows, and manage multiple AI models through one secure platform.",
  path: "/",
  locale: "pt",
});

export default function Page() {
  const dict = getDictionary("pt");
  return (
    <SiteLayout locale="pt">
      <HomePage locale="pt" dict={dict} />
    </SiteLayout>
  );
}
