import { PageHero, ContentSection } from '@/components/PageHero';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'About Datawall',
  description: 'Founded in 2026, Datawall is building the next generation of AI data security infrastructure. We believe that as AI transforms how businesses operate,',
  path: '/company/about/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow='Company' title='About Datawall' subtitle='Protecting the intelligence behind every business.' />
      <ContentSection title='Overview'>
        <p>Founded in 2026, Datawall is building the next generation of AI data security infrastructure. We believe that as AI transforms how businesses operate, data protection must evolve to match — intelligent, automated, and always one step ahead.</p>
      </ContentSection>
    </>
  );
}
