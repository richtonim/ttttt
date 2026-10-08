export const capabilities = [
  {
    title: 'Model Infrastructure',
    description: 'Unified orchestration for multi-model deployments with intelligent routing and load balancing.',
    icon: 'model',
  },
  {
    title: 'AI Agents',
    description: 'Autonomous agent runtime with tool use, memory, and multi-step reasoning capabilities.',
    icon: 'agent',
  },
  {
    title: 'Data Intelligence',
    description: 'Real-time data pipelines, vector storage, and knowledge graph integration at scale.',
    icon: 'data',
  },
  {
    title: 'Workflow Automation',
    description: 'Composable workflows connecting models, agents, and external systems seamlessly.',
    icon: 'workflow',
  },
  {
    title: 'Secure Deployment',
    description: 'Enterprise-grade security with private cloud, VPC, and compliance-ready infrastructure.',
    icon: 'secure',
  },
  {
    title: 'Observability',
    description: 'Full-stack monitoring, tracing, and analytics for every model call and agent action.',
    icon: 'observe',
  },
]

export const architectureLayers = [
  {
    name: 'Application Layer',
    description: 'User-facing apps, APIs, and integrations',
    color: '#9b8ff5',
  },
  {
    name: 'Agent Layer',
    description: 'Autonomous agents, tools, and orchestration',
    color: '#7c6df0',
  },
  {
    name: 'Model Layer',
    description: 'Multi-model routing, inference, and fine-tuning',
    color: '#6b5ce0',
  },
  {
    name: 'Data Layer',
    description: 'Vectors, knowledge bases, and real-time pipelines',
    color: '#5b4fd4',
  },
]

export const products = [
  {
    name: 'Substratum Core',
    description: 'The foundational platform layer for deploying and managing AI infrastructure at scale.',
    benefits: ['Unified control plane', 'Multi-tenant architecture', 'Auto-scaling compute'],
    slug: 'core',
  },
  {
    name: 'Agent Runtime',
    description: 'Production-ready environment for building, deploying, and monitoring AI agents.',
    benefits: ['Tool integration framework', 'Persistent memory', 'Human-in-the-loop'],
    slug: 'agent-runtime',
  },
  {
    name: 'Model Router',
    description: 'Intelligent request routing across multiple models with cost and latency optimization.',
    benefits: ['Multi-model support', 'Fallback strategies', 'Usage analytics'],
    slug: 'model-router',
  },
  {
    name: 'Knowledge Engine',
    description: 'Enterprise knowledge management with RAG pipelines and semantic search.',
    benefits: ['Vector indexing', 'Document processing', 'Real-time sync'],
    slug: 'knowledge-engine',
  },
  {
    name: 'Developer API',
    description: 'RESTful and streaming APIs with comprehensive SDKs for rapid integration.',
    benefits: ['Type-safe SDKs', 'Webhook events', 'OpenAPI spec'],
    slug: 'developer-api',
  },
]

export const useCases = [
  { title: 'AI SaaS', description: 'Power your SaaS product with scalable AI backends and multi-tenant isolation.' },
  { title: 'Enterprise Automation', description: 'Automate complex business processes with intelligent agent workflows.' },
  { title: 'Intelligent Support', description: 'Deploy context-aware AI agents for customer service at scale.' },
  { title: 'Developer Tools', description: 'Build AI-native developer tools with our comprehensive API platform.' },
  { title: 'Financial Analysis', description: 'Real-time data processing and model inference for financial intelligence.' },
  { title: 'Knowledge Management', description: 'Transform organizational knowledge into actionable AI-powered insights.' },
]

export const securityFeatures = [
  { title: 'Enterprise Security', description: 'SOC 2 Type II, GDPR, and HIPAA-ready infrastructure with end-to-end encryption.' },
  { title: 'Private Deployment', description: 'On-premise, VPC, and air-gapped deployment options for maximum control.' },
  { title: 'Low Latency', description: 'Global edge network with sub-100ms inference for real-time applications.' },
  { title: 'Scalable Architecture', description: 'Horizontally scalable from prototype to millions of requests per day.' },
  { title: 'Real-time Monitoring', description: 'Live dashboards, alerting, and distributed tracing across all services.' },
]

export const metrics = [
  { label: 'Requests Processed', value: 2.4, suffix: 'B+', decimals: 1 },
  { label: 'Active Agents', value: 150, suffix: 'K+', decimals: 0 },
  { label: 'Avg Response Time', value: 47, suffix: 'ms', decimals: 0, prefix: '' },
  { label: 'System Uptime', value: 99.99, suffix: '%', decimals: 2 },
]

export const blogPosts = [
  {
    title: 'Introducing Substratum: The Foundation for AI Infrastructure',
    excerpt: 'Today we launch Substratum — a new platform designed to be the intelligence layer beneath every AI application.',
    date: '2026-01-15',
    slug: 'introducing-substratum',
    category: 'Announcement',
  },
  {
    title: 'Building Production-Ready AI Agents',
    excerpt: 'A deep dive into our Agent Runtime architecture and best practices for deploying autonomous agents.',
    date: '2026-01-28',
    slug: 'building-production-ai-agents',
    category: 'Engineering',
  },
  {
    title: 'Multi-Model Routing: A Practical Guide',
    excerpt: 'How to optimize cost and latency when routing requests across multiple LLM providers.',
    date: '2026-02-10',
    slug: 'multi-model-routing-guide',
    category: 'Guide',
  },
  {
    title: 'Enterprise Security in the Age of AI',
    excerpt: 'Our approach to building secure, compliant AI infrastructure for regulated industries.',
    date: '2026-02-22',
    slug: 'enterprise-security-ai',
    category: 'Security',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'For developers exploring the platform',
    features: ['10K API requests/mo', '2 AI agents', 'Community support', 'Basic observability'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 299,
    period: 'month',
    description: 'For teams building production AI products',
    features: ['1M API requests/mo', '50 AI agents', 'Priority support', 'Advanced observability', 'Custom model routing'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    description: 'For organizations with advanced requirements',
    features: ['Unlimited requests', 'Unlimited agents', 'Dedicated support', 'Private deployment', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const codeExample = `import { Substratum } from '@substratum/sdk';

const client = new Substratum({
  apiKey: process.env.SUBSTRATUM_API_KEY,
});

// Deploy an AI agent
const agent = await client.agents.create({
  name: 'support-agent',
  model: 'gpt-4o',
  tools: ['search', 'email', 'crm'],
  memory: { type: 'persistent' },
});

// Run inference with routing
const response = await client.models.complete({
  prompt: 'Analyze quarterly revenue trends',
  route: 'cost-optimized',
  stream: true,
});

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}`
