import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FadeIn } from '@/components/FadeIn';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Company',
  description: 'Datawall is a 2026-founded enterprise AI data security company.',
  path: '/company/',
});

const pages = [
  { label: 'About', href: '/company/about/', desc: 'Our mission and story' },
  { label: 'Careers', href: '/company/careers/', desc: 'Join our team' },
  { label: 'News', href: '/company/news/', desc: 'Latest updates' },
  { label: 'Contact', href: '/contact/', desc: 'Get in touch' },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero title='Company' subtitle='Securing the intelligence behind every business.' />
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid gap-4 sm:grid-cols-2'>
            {pages.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.05}>
                <Link href={p.href} className='group block border border-white/10 p-8 transition-all hover:border-electric/30'>
                  <h2 className='text-xl font-medium text-white group-hover:text-electric'>{p.label}</h2>
                  <p className='mt-2 text-muted'>{p.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
