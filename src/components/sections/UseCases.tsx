import { useCases } from '../../data/content'
import AnimateOnScroll from '../AnimateOnScroll'

export default function UseCases() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="usecases-heading">
      <div className="container-max mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Use Cases</p>
          <h2 id="usecases-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Powering Innovation Across Industries
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            From startups to enterprises, teams build on Substratum to deliver intelligent experiences at scale.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, i) => (
            <AnimateOnScroll key={useCase.title} delay={i * 0.08}>
              <div className="glass-card-hover p-5 h-full">
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{useCase.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
