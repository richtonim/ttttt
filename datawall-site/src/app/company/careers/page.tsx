import { PageHero, ContentSection } from '@/components/PageHero';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Careers',
  description: 'We are building a world-class team of security engineers, data scientists, and product builders. If you are passionate about AI security and want to w',
  path: '/company/careers/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow='Company' title='Careers' subtitle='Join us in securing the future of AI.' />
      <ContentSection title='Overview'>
        <p>We are building a world-class team of security engineers, data scientists, and product builders. If you are passionate about AI security and want to work on challenging problems at scale, we want to hear from you.</p>
      </ContentSection>
    </>
  );
}
