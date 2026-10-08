import {
  Bot,
  GitBranch,
  BookOpen,
  Workflow,
  Eye,
  Shield,
  Headphones,
  Library,
  FileSearch,
  TrendingUp,
  BarChart3,
  Code2,
  FileText,
  Terminal,
  Package,
  Play,
  Plug,
  ScrollText,
  Activity,
  HelpCircle,
  Newspaper,
  Users,
  Handshake,
  Mail,
} from "lucide-react";

export const platformNavItems = [
  {
    title: "Agent Studio",
    href: "/platform/agent-studio",
    description: "Design, test, and deploy intelligent agents.",
    icon: Bot,
  },
  {
    title: "Model Gateway",
    href: "/platform/model-gateway",
    description: "Access multiple AI models through one API.",
    icon: GitBranch,
  },
  {
    title: "Knowledge Layer",
    href: "/platform/knowledge-layer",
    description: "Ground AI responses in your company data.",
    icon: BookOpen,
  },
  {
    title: "AI Workflows",
    href: "/platform/workflows",
    description: "Automate complex processes with AI.",
    icon: Workflow,
  },
  {
    title: "Observability",
    href: "/platform/observability",
    description: "Monitor quality, latency, usage, and cost.",
    icon: Eye,
  },
  {
    title: "Security",
    href: "/security",
    description: "Enterprise governance and access controls.",
    icon: Shield,
  },
];

export const solutionsNavItems = [
  {
    title: "Customer Support",
    href: "/solutions/customer-support",
    description: "Resolve questions and route complex cases.",
    icon: Headphones,
  },
  {
    title: "Knowledge Assistant",
    href: "/solutions/knowledge-assistant",
    description: "Give employees reliable internal answers.",
    icon: Library,
  },
  {
    title: "Document Intelligence",
    href: "/solutions/document-intelligence",
    description: "Extract, classify, and summarize documents.",
    icon: FileSearch,
  },
  {
    title: "Sales Automation",
    href: "/solutions/sales-automation",
    description: "Research leads and update CRM records.",
    icon: TrendingUp,
  },
  {
    title: "Data Analysis",
    href: "/solutions/data-analysis",
    description: "Turn questions into business insights.",
    icon: BarChart3,
  },
  {
    title: "Developer Tools",
    href: "/solutions/developer-platform",
    description: "Add AI infrastructure without rebuilding.",
    icon: Code2,
  },
];

export const developersNavItems = [
  { title: "Documentation", href: "/docs", description: "Guides and tutorials.", icon: FileText },
  { title: "API Reference", href: "/developers#api", description: "REST API endpoints.", icon: Terminal },
  { title: "SDKs", href: "/developers#sdks", description: "JavaScript and Python SDKs.", icon: Package },
  { title: "Playground", href: "/developers#playground", description: "Test APIs interactively.", icon: Play },
  { title: "Integrations", href: "/integrations", description: "Connect your stack.", icon: Plug },
  { title: "Changelog", href: "/developers#changelog", description: "Latest platform updates.", icon: ScrollText },
  { title: "System Status", href: "/developers#status", description: "Platform availability.", icon: Activity },
];

export const resourcesNavItems = [
  { title: "Blog", href: "/blog", description: "Insights and best practices.", icon: Newspaper },
  { title: "Guides", href: "/docs", description: "Step-by-step tutorials.", icon: BookOpen },
  { title: "Customer Stories", href: "/blog", description: "Example use cases.", icon: Users },
  { title: "Templates", href: "/templates", description: "Agent and workflow templates.", icon: Workflow },
  { title: "AI Model Directory", href: "/integrations", description: "Supported model providers.", icon: GitBranch },
  { title: "Help Center", href: "/contact", description: "Get support.", icon: HelpCircle },
];

export const companyNavItems = [
  { title: "About", href: "/about", description: "Our mission and vision.", icon: Users },
  { title: "Careers", href: "/careers", description: "Join the team.", icon: Users },
  { title: "Partners", href: "/contact", description: "Partner with NextLayer.", icon: Handshake },
  { title: "Contact", href: "/contact", description: "Get in touch.", icon: Mail },
  { title: "Security", href: "/security", description: "Security and governance.", icon: Shield },
];

export const mainNavItems = [
  { label: "Platform", items: platformNavItems },
  { label: "Solutions", items: solutionsNavItems },
  { label: "Developers", items: developersNavItems, href: "/developers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", items: resourcesNavItems },
  { label: "Company", items: companyNavItems },
];
