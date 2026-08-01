import { SiteLayout } from "@/components/layout/site-layout";
import { HomePage } from "@/components/pages/home-page";
import { getDictionary } from "@/lib/i18n";

export default function Page() {
  const dict = getDictionary("en");
  return (
    <SiteLayout locale="en">
      <HomePage locale="en" dict={dict} />
    </SiteLayout>
  );
}
