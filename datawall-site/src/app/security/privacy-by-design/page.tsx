import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { securityPages } from '@/lib/pages';

const page = securityPages['privacy-by-design'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
