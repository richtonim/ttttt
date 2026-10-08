import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { platformPages } from '@/lib/pages';

const page = platformPages['access-control'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
