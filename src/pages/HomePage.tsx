import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import Capabilities from '../components/sections/Capabilities'
import Architecture from '../components/sections/Architecture'
import Products from '../components/sections/Products'
import UseCases from '../components/sections/UseCases'
import DeveloperExperience from '../components/sections/DeveloperExperience'
import Security from '../components/sections/Security'
import Metrics from '../components/sections/Metrics'
import Philosophy from '../components/sections/Philosophy'
import CTA from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Substratum — The Intelligence Beneath Everything"
        description="AI infrastructure and intelligent systems platform. Model orchestration, AI agents, data infrastructure, and scalable compute for next-generation AI products."
        path="/"
      />
      <Hero />
      <Capabilities />
      <Architecture />
      <Products />
      <UseCases />
      <DeveloperExperience />
      <Security />
      <Metrics />
      <Philosophy />
      <CTA />
    </>
  )
}
