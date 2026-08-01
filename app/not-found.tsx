import { SiteLayout } from "@/components/layout/site-layout";
import { NotFoundPage } from "@/components/pages/not-found-page";

export default function NotFound() {
  return (
    <SiteLayout locale="en">
      <NotFoundPage locale="en" />
    </SiteLayout>
  );
}
