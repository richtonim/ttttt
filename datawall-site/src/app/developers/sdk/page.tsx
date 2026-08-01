import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { developerPages } from '@/lib/pages';

const page = developerPages['sdk'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
