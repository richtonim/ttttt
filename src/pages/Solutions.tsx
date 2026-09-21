import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const solutions = [
  {
    title: 'Data Cleansing & ETL',
    desc: 'Automate data ingestion, validation, transformation, and loading across heterogeneous sources. AI agents detect anomalies, fix inconsistencies, and maintain data quality at scale.',
    metrics: ['90% reduction in manual data work', 'Real-time pipeline monitoring', 'Auto-schema detection'],
    color: 'mint',
  },
  {
    title: 'Compliance & Audit Automation',
    desc: 'Continuous compliance monitoring with AI-driven audit trails. Automatically flag regulatory violations, generate reports, and maintain immutable records for SOC 2, GDPR, and HIPAA.',
    metrics: ['24/7 automated compliance checks', 'Immutable audit logs', 'One-click regulatory reports'],
    color: 'sky',
  },
  {
    title: 'Intelligent Customer Fulfillment',
    desc: 'End-to-end order processing, inventory reconciliation, and customer communication powered by intelligent agents that adapt to exceptions in real-time.',
    metrics: ['Sub-second order processing', 'Exception auto-resolution', 'Multi-channel orchestration'],
    color: 'mint',
  },
  {
    title: 'Cross-System Data Flow',
    desc: 'Seamlessly route data between CRM, ERP, data warehouses, and third-party APIs. Mustly Hub acts as the intelligent middleware layer your stack is missing.',
    metrics: ['500+ native connectors', 'Bi-directional sync', 'Conflict resolution AI'],
    color: 'sky',
  },
]

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Mustly AI solutions for data cleansing, compliance automation, intelligent fulfillment, and cross-system data flow."
        path="/solutions"
        keywords="data cleansing, compliance automation, customer fulfillment, ETL automation, enterprise solutions"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-mint mb-3">SOLUTIONS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
              Automate Your Most Critical Processes
            </h1>
            <p className="mt-6 text-lg text-navy/60 leading-relaxed">
              Mustly AI targets the workflows that keep your business running — the ones too important to leave manual and too complex for simple scripts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-8">
          {solutions.map((sol, i) => (
            <div key={sol.title} className={`card flex flex-col lg:flex-row gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy">{sol.title}</h2>
                <p className="mt-4 text-navy/60 leading-relaxed">{sol.desc}</p>
                <ul className="mt-6 space-y-2">
                  {sol.metrics.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-navy/70">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={sol.color === 'mint' ? 'text-mint' : 'text-sky'}>
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`lg:w-64 shrink-0 rounded-xl p-6 flex items-center justify-center ${sol.color === 'mint' ? 'bg-mint/5' : 'bg-sky/5'}`}>
                <div className="text-center">
                  <div className={`text-5xl font-bold ${sol.color === 'mint' ? 'text-mint' : 'text-sky'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xs text-navy/40 mt-2 font-semibold tracking-wider">SOLUTION</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy">Need a Custom Solution?</h2>
          <p className="mt-4 text-navy/60">
            Our team works with enterprise clients to design bespoke agent workflows tailored to your unique operational requirements.
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">Talk to Our Team</Link>
        </div>
      </section>
    </>
  )
}
