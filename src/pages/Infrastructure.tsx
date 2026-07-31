import SEO from '../components/SEO'

const infraItems = [
  {
    category: 'Compute & Runtime',
    items: [
      { name: 'Distributed Agent Runtime', detail: 'Kubernetes-native execution with auto-scaling from 0 to 10,000 concurrent agents.' },
      { name: 'Edge Deployment', detail: 'Deploy agents at the edge for ultra-low latency data processing close to source.' },
      { name: 'GPU Acceleration', detail: 'Optional GPU pools for compute-intensive AI workloads and model inference.' },
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      { name: 'Zero-Trust Architecture', detail: 'Every agent interaction is authenticated, authorized, and encrypted end-to-end.' },
      { name: 'SOC 2 Type II Ready', detail: 'Infrastructure designed for enterprise compliance from day one.' },
      { name: 'Data Residency Controls', detail: 'Choose your data region — US, EU, APAC — with strict data sovereignty guarantees.' },
    ],
  },
  {
    category: 'Reliability & Scale',
    items: [
      { name: 'Multi-Region Failover', detail: 'Active-active deployment across 3+ regions with automatic traffic routing.' },
      { name: '99.9% Uptime SLA', detail: 'Enterprise-grade availability with financial SLA backing.' },
      { name: 'Disaster Recovery', detail: 'RPO < 1 minute, RTO < 5 minutes with automated backup and restore.' },
    ],
  },
  {
    category: 'Integration Layer',
    items: [
      { name: '500+ Connectors', detail: 'Pre-built integrations for Salesforce, SAP, Snowflake, AWS, GCP, and more.' },
      { name: 'Custom API Gateway', detail: 'Expose and consume any REST, GraphQL, or gRPC endpoint with built-in rate limiting.' },
      { name: 'Event Streaming', detail: 'Native Kafka, RabbitMQ, and webhook support for event-driven architectures.' },
    ],
  },
]

const techStack = [
  'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'gRPC', 'Terraform',
  'Prometheus', 'Grafana', 'OpenTelemetry', 'Vault', 'Istio', 'ArgoCD',
]

export default function Infrastructure() {
  return (
    <>
      <SEO
        title="Infrastructure"
        description="Mustly AI enterprise infrastructure — distributed agent runtime, zero-trust security, multi-region failover, and 500+ integrations."
        path="/infrastructure"
        keywords="enterprise infrastructure, AI runtime, zero-trust, multi-region, SOC 2"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-mint mb-3">INFRASTRUCTURE</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
              Enterprise-Grade from the Ground Up
            </h1>
            <p className="mt-6 text-lg text-navy/60 leading-relaxed">
              Mustly AI is built on battle-tested cloud-native infrastructure designed for the reliability, security, and scale that mission-critical automation demands.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {infraItems.map((group) => (
            <div key={group.category} className="card">
              <h2 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint" />
                {group.category}
              </h2>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <h3 className="font-semibold text-navy text-sm">{item.name}</h3>
                    <p className="text-sm text-navy/50 mt-1 leading-relaxed">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Built with proven open-source and cloud-native technologies for maximum reliability and transparency.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="card !bg-surface text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy">Architecture Diagram</h2>
            <p className="mt-2 text-navy/50 text-sm">Mustly Hub sits at the center of your data ecosystem</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              {['Data Sources', 'Mustly Hub', 'AI Agents', 'Enterprise Systems', 'Analytics'].map((node, i) => (
                <div key={node} className="flex items-center gap-2">
                  <div className={`px-4 py-2 rounded-lg text-sm font-semibold ${i === 1 ? 'bg-navy text-white' : 'bg-white border border-navy/10 text-navy'}`}>
                    {node}
                  </div>
                  {i < 4 && <span className="text-navy/20 hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
