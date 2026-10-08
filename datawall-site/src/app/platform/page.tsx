import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FadeIn } from '@/components/FadeIn';
import { createMetadata } from '@/lib/seo';
import { platformPages } from '@/lib/pages';

export const metadata = createMetadata({
  title: 'Platform',
  description: 'Discover how Datawall unifies data discovery, risk identification, permission management, and threat response.',
  path: '/platform/',
});

const pages = [
  { label: platformPages['ai-data-security'].title, href: platformPages['ai-data-security'].path },
  { label: platformPages['privacy-governance'].title, href: platformPages['privacy-governance'].path },
  { label: platformPages['access-control'].title, href: platformPages['access-control'].path },
  { label: platformPages['threat-detection'].title, href: platformPages['threat-detection'].path },
  { label: platformPages['data-map'].title, href: platformPages['data-map'].path },
  { label: platformPages['sensitive-data'].title, href: platformPages['sensitive-data'].path },
  { label: platformPages['risk-scoring'].title, href: platformPages['risk-scoring'].path },
  { label: platformPages['access-monitoring'].title, href: platformPages['access-monitoring'].path },
  { label: platformPages['anomaly-detection'].title, href: platformPages['anomaly-detection'].path },
  { label: platformPages['compliance'].title, href: platformPages['compliance'].path },
];

export default function IndexPage() {
  return (
    <>
      <PageHero title='Platform' subtitle='One intelligent control layer for enterprise data security.' cta={{ label: 'Book a Demo', href: '/demo/' }} />
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
