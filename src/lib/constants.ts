export const SITE_NAME = "Qualia";
export const SITE_URL = "https://qualia.lat";
export const SITE_DESCRIPTION =
  "Qualia builds AI systems that understand context, perception and human intent. Intelligence, deeply understood.";
export const SITE_TAGLINE = "Intelligence, deeply understood.";

export const NAV_LINKS = [
  { href: "/platform/", label: "Platform" },
  { href: "/research/", label: "Research" },
  { href: "/developers/", label: "Developers" },
  { href: "/company/", label: "Company" },
] as const;

export const FOOTER_LINKS = {
  Platform: [
    { href: "/platform/", label: "Overview" },
    { href: "/platform/#capabilities", label: "Capabilities" },
    { href: "/pricing/", label: "Pricing" },
  ],
  Research: [
    { href: "/research/", label: "Publications" },
    { href: "/research/#areas", label: "Research Areas" },
    { href: "/research/#labs", label: "Labs" },
  ],
  Developers: [
    { href: "/developers/", label: "Documentation" },
    { href: "/developers/#api", label: "API Reference" },
    { href: "/developers/#sdk", label: "SDK" },
  ],
  Company: [
    { href: "/company/", label: "About" },
    { href: "/careers/", label: "Careers" },
    { href: "/contact/", label: "Contact" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { href: "https://linkedin.com/company/qualia-ai", label: "LinkedIn" },
  { href: "https://x.com/qualia_ai", label: "X" },
  { href: "https://github.com/qualia-ai", label: "GitHub" },
] as const;

export const CAPABILITIES = [
  {
    number: "01",
    title: "Multimodal Understanding",
    description:
      "Unify language, vision, audio and sensor data into a single coherent perception layer.",
  },
  {
    number: "02",
    title: "Contextual Intelligence",
    description:
      "Reason across time, environment and user history to deliver decisions that truly fit.",
  },
  {
    number: "03",
    title: "Adaptive AI Agents",
    description:
      "Deploy autonomous agents that learn, adapt and collaborate across complex workflows.",
  },
  {
    number: "04",
    title: "Predictive Decision Systems",
    description:
      "Anticipate outcomes and recommend actions before problems emerge.",
  },
] as const;

export const USE_CASES = [
  {
    title: "Intelligent Products",
    description: "Embed perception and reasoning directly into next-generation products.",
  },
  {
    title: "Enterprise Automation",
    description: "Automate complex business processes with context-aware AI agents.",
  },
  {
    title: "Personalized Experiences",
    description: "Deliver experiences that adapt to individual intent and preference.",
  },
  {
    title: "Research and Discovery",
    description: "Accelerate scientific discovery with multimodal analysis at scale.",
  },
  {
    title: "Autonomous Systems",
    description: "Power robotics, vehicles and IoT with real-time intelligent decision-making.",
  },
] as const;

export const ARCHITECTURE_STEPS = [
  { label: "Data", description: "Ingest structured and unstructured streams" },
  { label: "Perception", description: "Extract meaning from multimodal signals" },
  { label: "Context", description: "Build situational awareness over time" },
  { label: "Reasoning", description: "Apply logic, memory and prediction" },
  { label: "Action", description: "Execute decisions with precision" },
] as const;

export const METRICS = [
  { value: "<50ms", label: "Inference Latency" },
  { value: "99.2%", label: "Model Accuracy" },
  { value: "2.4B+", label: "Data Points Processed" },
  { value: "99.99%", label: "System Uptime" },
] as const;

export const TRUST_PILLARS = [
  {
    title: "Privacy by Design",
    description: "Data minimization and encryption built into every layer of the stack.",
  },
  {
    title: "Explainable Decisions",
    description: "Transparent reasoning paths for every AI-generated outcome.",
  },
  {
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with SOC 2 compliance and zero-trust architecture.",
  },
  {
    title: "Human Control",
    description: "Humans remain in the loop with configurable oversight and intervention.",
  },
  {
    title: "Responsible AI",
    description: "Bias detection, fairness auditing and ethical guidelines at the core.",
  },
] as const;

export const DEVELOPER_FEATURES = [
  "REST & GraphQL API",
  "SDK (Python, TypeScript, Go)",
  "AI Agents Framework",
  "Webhooks & Events",
  "Model Deployment",
  "Real-time Monitoring",
] as const;
