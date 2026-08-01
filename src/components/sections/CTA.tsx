import { Link } from 'react-router-dom'
import AnimateOnScroll from '../AnimateOnScroll'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" aria-hidden="true" />
      <div className="container-max mx-auto relative">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Build on a Stronger{' '}
            <span className="gradient-text">AI Foundation.</span>
          </h2>
          <p className="text-muted mb-8 text-lg">
            Join the next generation of AI builders. Start with our platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/developers" className="btn-primary">
              Start Building
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
