import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'

const team = [
  { name: 'Alex Chen', role: 'CEO & Co-founder', bio: 'Previously led AI infrastructure at a Fortune 500 tech company.' },
  { name: 'Sarah Mitchell', role: 'CTO & Co-founder', bio: 'Former principal engineer building large-scale ML systems.' },
  { name: 'James Park', role: 'VP Engineering', bio: 'Built distributed systems serving billions of requests daily.' },
  { name: 'Elena Rodriguez', role: 'Head of Product', bio: 'Product leader with deep experience in developer platforms.' },
]

const values = [
  { title: 'Infrastructure First', description: 'We build the invisible foundation that makes AI products possible.' },
  { title: 'Developer Obsessed', description: 'Every decision starts with the developer experience in mind.' },
  { title: 'Radical Transparency', description: 'Open about our roadmap, pricing, and technical decisions.' },
  { title: 'Relentless Quality', description: 'Enterprise-grade reliability from day one, not as an afterthought.' },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Substratum — the AI infrastructure company founded in 2026 to build the intelligence layer beneath every application."
        path="/about"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Building the Foundation of AI
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Substratum was founded in 2026 with a singular mission: to provide the infrastructure layer
              that enables every team to build intelligent applications. We believe the most transformative
              AI products are built on foundations that are invisible, reliable, and endlessly extensible.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="glass-card-hover p-6">
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="section-padding scroll-mt-24">
        <div className="container-max mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Leadership Team</h2>
            <p className="text-muted">Experienced builders from world-class technology companies.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="glass-card p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-muted">{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="section-padding bg-surface scroll-mt-24">
        <div className="container-max mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm text-muted leading-relaxed mb-8">
              At Substratum, we take your privacy seriously. We collect only the data necessary to provide
              our services, never sell your personal information, and maintain strict data protection standards
              compliant with GDPR, CCPA, and SOC 2 requirements. For full details, contact legal@substratum.pro.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="terms" className="section-padding scroll-mt-24">
        <div className="container-max mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-sm text-muted leading-relaxed mb-8">
              By using Substratum services, you agree to our terms of service which govern the use of our
              platform, API, and related services. Our terms ensure fair use, protect intellectual property,
              and establish clear guidelines for acceptable use of AI infrastructure. Contact legal@substratum.pro for inquiries.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="security" className="section-padding bg-surface scroll-mt-24">
        <div className="container-max mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-sm text-muted leading-relaxed">
              Security is foundational to everything we build. Substratum maintains SOC 2 Type II compliance,
              end-to-end encryption, regular penetration testing, and a dedicated security team. We support
              private deployment, VPC isolation, and air-gapped environments for enterprise customers.
              Report security issues to security@substratum.pro.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
