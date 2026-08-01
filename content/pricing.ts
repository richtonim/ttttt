export const pricingPlans = [
  {
    id: "developer",
    name: "Developer",
    price: "$0",
    period: "/ month",
    description: "Get started and explore the platform.",
    features: [
      "10,000 AI requests",
      "1 workspace",
      "3 agents",
      "Basic analytics",
      "Community support",
    ],
    cta: "Start free",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "Usage-based",
    period: "",
    description: "Scale your AI products with advanced features.",
    features: [
      "Unlimited agents",
      "Advanced workflows",
      "Knowledge integrations",
      "Team collaboration",
      "Usage analytics",
      "Email support",
    ],
    cta: "Start building",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom pricing",
    period: "",
    description: "Enterprise controls and dedicated support.",
    features: [
      "SSO and RBAC",
      "Audit logs",
      "Private networking",
      "Custom data retention",
      "Priority support",
      "SLA options",
    ],
    cta: "Contact sales",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
];

export const pricingComparison = [
  { feature: "AI requests", developer: "10,000/mo", pro: "Usage-based", enterprise: "Custom" },
  { feature: "Workspaces", developer: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Agents", developer: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Workflows", developer: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { feature: "Knowledge integrations", developer: "—", pro: "✓", enterprise: "✓" },
  { feature: "Team collaboration", developer: "—", pro: "✓", enterprise: "✓" },
  { feature: "SSO & RBAC", developer: "—", pro: "—", enterprise: "✓" },
  { feature: "Audit logs", developer: "—", pro: "—", enterprise: "✓" },
  { feature: "Private networking", developer: "—", pro: "—", enterprise: "✓" },
  { feature: "Support", developer: "Community", pro: "Email", enterprise: "Priority" },
];

export const pricingFaqs = [
  {
    question: "What counts as an AI request?",
    answer:
      "An AI request is a single call to an agent, workflow step, or model through the NextLayer API. Placeholder limits should be updated before production launch.",
  },
  {
    question: "Are model provider costs included?",
    answer:
      "Model provider costs are typically billed separately based on usage. NextLayer provides cost tracking and optimization tools. Final pricing details will be published before launch.",
  },
  {
    question: "Can I bring my own API keys?",
    answer:
      "Yes. You can connect your own model provider API keys through the Model Gateway. Configuration options may vary by plan.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Plan changes will be supported as the platform launches. Contact our team for early access pricing details.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The Developer plan provides free access to explore the platform. Pro and Enterprise plans will include trial options — details coming soon.",
  },
  {
    question: "Do you offer private deployments?",
    answer:
      "Private deployment options are available for Enterprise customers. Contact sales to discuss your requirements.",
  },
  {
    question: "How is data stored?",
    answer:
      "Data storage policies and regional options will be documented in our security and privacy policies before production launch.",
  },
  {
    question: "Do you use customer data for model training?",
    answer:
      "NextLayer does not use customer data to train models. Data handling practices are detailed in our Privacy Policy.",
  },
];
