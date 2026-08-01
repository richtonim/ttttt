import AnimateOnScroll from '../AnimateOnScroll'

export default function Philosophy() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden" aria-labelledby="philosophy-heading">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container-max mx-auto relative">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Our Philosophy</p>
          <h2 id="philosophy-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            The Foundation of Intelligence
          </h2>
          <blockquote className="text-lg sm:text-xl text-muted leading-relaxed italic">
            &ldquo;Just as bedrock supports everything above it, Substratum is the foundational layer
            that enables intelligent applications to run, scale, and evolve. We believe the most
            transformative AI products are built on infrastructure that is invisible, reliable,
            and endlessly extensible.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-sm font-bold">
              S
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Substratum Team</p>
              <p className="text-xs text-muted">Founded 2026</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
