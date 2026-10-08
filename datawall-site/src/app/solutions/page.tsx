import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FadeIn } from '@/components/FadeIn';
import { createMetadata } from '@/lib/seo';
import { solutionPages } from '@/lib/pages';

export const metadata = createMetadata({
  title: 'Solutions',
  description: 'Purpose-built solutions for every industry and use case.',
  path: '/solutions/',
});

const pages = [
  { label: solutionPages['enterprise-ai'].title, href: solutionPages['enterprise-ai'].path },
  { label: solutionPages['financial-services'].title, href: solutionPages['financial-services'].path },
  { label: solutionPages['healthcare'].title, href: solutionPages['healthcare'].path },
  { label: solutionPages['saas'].title, href: solutionPages['saas'].path },
  { label: solutionPages['cloud-infrastructure'].title, href: solutionPages['cloud-infrastructure'].path },
  { label: solutionPages['regulated-industries'].title, href: solutionPages['regulated-industries'].path },
];

export default function IndexPage() {
  return (
    <>
      <PageHero title='Solutions' subtitle='Industry-specific data security for the AI era.' cta={{ label: 'Book a Demo', href: '/demo/' }} />
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {pages.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.05}>
                <Link href={p.href} className='group block border border-white/10 p-8 transition-all hover:border-electric/30 hover:bg-white/[0.02]'>
                  <h2 className='text-xl font-medium text-white group-hover:text-electric'>{p.label}</h2>
                  <span className='mt-4 inline-block text-sm text-muted group-hover:text-electric'>Learn more &rarr;</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
