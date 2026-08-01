import { PageHero, ContentSection } from '@/components/PageHero';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'News',
  description: 'Stay informed about product launches, security research, and company milestones.',
  path: '/company/news/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow='Company' title='News' subtitle='Latest updates from Datawall.' />
      <ContentSection title='Overview'>
        <p>Stay informed about product launches, security research, and company milestones.</p>
      </ContentSection>
    </>
  );
}
