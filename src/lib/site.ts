export const SITE = {
  name: "Cognis",
  domain: "cognis.click",
  url: "https://cognis.click",
  tagline: "Intelligence that thinks forward.",
  subtitle:
    "Cognis transforms knowledge, context and data into autonomous decisions.",
  description:
    "Cognis is a next-generation AI platform for cognitive intelligence, AI agents, knowledge reasoning, and enterprise automation.",
  year: 2026,
  email: "hello@cognis.click",
  social: {
    linkedin: "https://linkedin.com/company/cognis-ai",
    x: "https://x.com/cognis_ai",
    github: "https://github.com/cognis-ai",
  },
} as const;

export const WHITELISTED_EMAILS = [
  "demo@cognis.click",
  "admin@cognis.click",
  "partner@cognis.click",
  "enterprise@cognis.click",
  "founder@cognis.click",
] as const;

export const NAV_LINKS = [
  { label: "Platform", href: "/platform/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Developers", href: "/developers/" },
  { label: "Security", href: "/security/" },
] as const;

export const FOOTER_LINKS = {
  Platform: [
    { label: "AI Agents", href: "/platform/#agents" },
    { label: "Knowledge Graph", href: "/platform/#knowledge" },
    { label: "Automation", href: "/platform/#automation" },
    { label: "Observability", href: "/platform/#observability" },
  ],
  Solutions: [
    { label: "Business Operations", href: "/solutions/#operations" },
    { label: "Customer Intelligence", href: "/solutions/#customer" },
    { label: "Research & Analysis", href: "/solutions/#research" },
    { label: "Decision Support", href: "/solutions/#decisions" },
  ],
  Developers: [
    { label: "API Reference", href: "/developers/#api" },
    { label: "SDK", href: "/developers/#sdk" },
    { label: "Webhooks", href: "/developers/#webhooks" },
    { label: "Agent Builder", href: "/developers/#agent-builder" },
  ],
  Security: [
    { label: "Privacy", href: "/security/#privacy" },
    { label: "Compliance", href: "/security/#compliance" },
    { label: "Access Control", href: "/security/#access" },
    { label: "Audit Trails", href: "/security/#audit" },
  ],
  Company: [
    { label: "About", href: "/company/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact", href: "/contact/" },
    { label: "Blog", href: "/company/#blog" },
  ],
} as const;

export const CORE_CAPABILITIES = [
  {
    number: "01",
    title: "Cognitive AI Agents",
    description:
      "Autonomous agents that perceive context, plan multi-step workflows, and execute with precision across your enterprise stack.",
  },
  {
    number: "02",
    title: "Knowledge Reasoning",
    description:
      "Deep reasoning over structured and unstructured knowledge — connecting facts, relationships, and intent in real time.",
  },
  {
    number: "03",
    title: "Enterprise Automation",
    description:
      "End-to-end process automation that adapts to changing conditions while maintaining governance and control.",
  },
  {
    number: "04",
    title: "Real-time Decision Systems",
    description:
      "Sub-second inference pipelines that transform live data streams into actionable decisions at scale.",
  },
] as const;

export const PLATFORM_FEATURES = [
  {
    id: "agents",
    title: "AI Agent Workflows",
    description: "Visual orchestration of multi-agent pipelines with branching logic and human checkpoints.",
  },
  {
    id: "knowledge",
    title: "Knowledge Graph",
    description: "Dynamic entity-relationship mapping that evolves as your organization learns.",
  },
  {
    id: "reasoning",
    title: "Real-time Reasoning",
    description: "Transparent inference traces showing how Cognis reaches each conclusion.",
  },
  {
    id: "automation",
    title: "Task Automation",
    description: "Live status tracking for automated workflows across systems and teams.",
  },
  {
    id: "observability",
    title: "Model Console",
    description: "Unified monitoring, latency analytics, and performance insights for every model.",
  },
] as const;

export const USE_CASES = [
  {
    id: "operations",
    title: "Business Operations",
    description: "Streamline internal processes with intelligent agents that handle exceptions and escalate when needed.",
  },
  {
    id: "customer",
    title: "Customer Intelligence",
    description: "Understand customer intent, predict needs, and deliver personalized experiences at scale.",
  },
  {
    id: "research",
    title: "Research and Analysis",
    description: "Accelerate discovery by synthesizing vast knowledge bases into actionable insights.",
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    description: "Connect disparate tools into cohesive, self-optimizing workflows.",
  },
  {
    id: "decisions",
    title: "Decision Support",
    description: "Augment human judgment with explainable recommendations backed by evidence.",
  },
] as const;

export const WORKFLOW_STEPS = [
  { step: "Connect", description: "Ingest data from any source" },
  { step: "Understand", description: "Parse context and intent" },
  { step: "Reason", description: "Apply knowledge and logic" },
  { step: "Decide", description: "Evaluate options and trade-offs" },
  { step: "Act", description: "Execute with full auditability" },
] as const;

export const TECH_MODULES = [
  {
    title: "Multi-model orchestration",
    description: "Route tasks to the optimal model with intelligent fallbacks and cost optimization.",
  },
  {
    title: "Retrieval and memory",
    description: "Persistent context windows with semantic retrieval across your knowledge base.",
  },
  {
    title: "Secure enterprise integrations",
    description: "Pre-built connectors for CRM, ERP, data warehouses, and custom APIs.",
  },
  {
    title: "Human-in-the-loop control",
    description: "Configurable approval gates and override mechanisms at every decision point.",
  },
  {
    title: "Real-time observability",
    description: "Full visibility into agent behavior, model performance, and system health.",
  },
] as const;

export const TRUST_ITEMS = [
  {
    title: "Privacy by Design",
    description: "Data minimization, encryption at rest and in transit, and zero-retention options.",
  },
  {
    title: "Explainable AI",
    description: "Every decision traceable with natural language explanations and evidence chains.",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II, ISO 27001, and continuous penetration testing.",
  },
  {
    title: "Role-based Access",
    description: "Granular permissions with SSO, SCIM provisioning, and MFA enforcement.",
  },
  {
    title: "Complete Audit Trails",
    description: "Immutable logs of every action, query, and model invocation.",
  },
] as const;
