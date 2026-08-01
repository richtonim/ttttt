import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { securityPages } from '@/lib/pages';

const page = securityPages['rbac'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
