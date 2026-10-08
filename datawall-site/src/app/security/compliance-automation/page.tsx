import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { securityPages } from '@/lib/pages';

const page = securityPages['compliance-automation'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
