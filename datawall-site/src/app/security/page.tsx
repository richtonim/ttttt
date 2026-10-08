import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FadeIn } from '@/components/FadeIn';
import { createMetadata } from '@/lib/seo';
import { securityPages } from '@/lib/pages';

export const metadata = createMetadata({
  title: 'Security',
  description: 'Built on zero trust principles with end-to-end protection.',
  path: '/security/',
});

const pages = [
  { label: securityPages['zero-trust'].title, href: securityPages['zero-trust'].path },
  { label: securityPages['encryption'].title, href: securityPages['encryption'].path },
  { label: securityPages['rbac'].title, href: securityPages['rbac'].path },
  { label: securityPages['audit-trails'].title, href: securityPages['audit-trails'].path },
  { label: securityPages['privacy-by-design'].title, href: securityPages['privacy-by-design'].path },
  { label: securityPages['compliance-automation'].title, href: securityPages['compliance-automation'].path },
];

export default function IndexPage() {
  return (
    <>
      <PageHero title='Security' subtitle='Enterprise-grade security architecture.' cta={{ label: 'Book a Demo', href: '/demo/' }} />
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
