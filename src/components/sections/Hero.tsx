import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleBackground from '../ParticleBackground'
import { ArrowRightIcon } from '../Icons'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />

      <div className="container-max mx-auto section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              AI Infrastructure Platform — Est. 2026
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The Intelligence{' '}
            <span className="gradient-text">Beneath Everything.</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Model orchestration, intelligent agents, data infrastructure, and scalable compute
            for the next generation of AI products.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link to="/platform" className="btn-primary gap-2">
              Explore the Platform
              <ArrowRightIcon />
            </Link>
            <Link to="/documentation" className="btn-secondary gap-2">
              View Documentation
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          aria-hidden="true"
        >
          <div className="glass-card p-1">
            <div className="bg-[#0d0d0d] rounded-xl p-6 font-mono text-xs sm:text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-muted">substratum — system status</span>
              </div>
              <div className="space-y-1.5 text-muted">
                <p><span className="text-accent">▸</span> Model Layer<span className="text-green-400"> .... operational</span></p>
                <p><span className="text-accent">▸</span> Agent Runtime<span className="text-green-400"> .... 12,847 agents active</span></p>
                <p><span className="text-accent">▸</span> Data Pipeline<span className="text-green-400"> .... 2.4B requests processed</span></p>
                <p><span className="text-accent">▸</span> API Gateway<span className="text-green-400"> .... 47ms avg latency</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
