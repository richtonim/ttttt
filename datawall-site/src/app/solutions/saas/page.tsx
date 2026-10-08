import { InnerPage, createPageMetadata } from '@/components/InnerPage';
import { solutionPages } from '@/lib/pages';

const page = solutionPages['saas'];

export const metadata = createPageMetadata(page);

export default function Page() {
  return <InnerPage page={page} />;
}
