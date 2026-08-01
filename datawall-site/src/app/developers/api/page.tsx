import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { developerPages } from '@/lib/pages';

const page = developerPages['api'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
