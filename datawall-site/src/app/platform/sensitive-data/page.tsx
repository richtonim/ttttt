import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { platformPages } from '@/lib/pages';

const page = platformPages['sensitive-data'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
