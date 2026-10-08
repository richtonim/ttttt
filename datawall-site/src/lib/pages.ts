export type PageContent = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  description: string;
  features: { title: string; description: string }[];
  path: string;
};

export const platformPages: Record<string, PageContent> = {
  "ai-data-security": {
    title: "AI Data Security",
    subtitle: "Protect every layer of your AI data pipeline.",
    eyebrow: "Platform",
    description:
      "Datawall provides continuous protection for training datasets, model artifacts, inference outputs, and automated workflows. Monitor data flows in real time, enforce policies at every touchpoint, and prevent unauthorized access or exfiltration before it happens.",
    features: [
      { title: "Pipeline Monitoring", description: "End-to-end visibility across data ingestion, training, and deployment stages." },
      { title: "Model Artifact Protection", description: "Secure model weights, checkpoints, and configuration files with encryption and access controls." },
      { title: "Inference Guardrails", description: "Filter sensitive outputs and prevent data leakage through AI responses." },
      { title: "Automated Policy Enforcement", description: "Apply security policies dynamically based on data classification and risk scores." },
    ],
    path: "/platform/ai-data-security/",
  },
  "privacy-governance": {
    title: "Privacy Governance",
    subtitle: "Automate privacy compliance across your AI operations.",
    eyebrow: "Platform",
    description:
      "Manage consent, data subject rights, privacy impact assessments, and cross-border data transfers from a unified governance layer. Datawall helps you maintain privacy compliance without slowing down AI innovation.",
    features: [
      { title: "Automated Classification", description: "Identify personal, sensitive, and regulated data across all systems automatically." },
      { title: "Consent Management", description: "Track and enforce consent preferences across data processing activities." },
      { title: "Privacy Impact Assessments", description: "Generate PIAs and DPIAs with AI-assisted risk analysis and documentation." },
      { title: "Data Subject Rights", description: "Automate access, deletion, and portability requests with full audit trails." },
    ],
    path: "/platform/privacy-governance/",
  },
  "access-control": {
    title: "Intelligent Access Control",
    subtitle: "Context-aware permissions for the AI era.",
    eyebrow: "Platform",
    description:
      "Move beyond static role assignments with dynamic access control that considers user behavior, data sensitivity, device trust, and real-time risk signals. Datawall ensures the right people access the right data at the right time.",
    features: [
      { title: "Dynamic Policies", description: "Access decisions adapt to context — location, time, device, and behavioral signals." },
      { title: "Least Privilege Automation", description: "Automatically adjust permissions based on actual usage patterns and need." },
      { title: "Just-in-Time Access", description: "Grant temporary elevated access with approval workflows and automatic expiration." },
      { title: "Cross-System Federation", description: "Unified access policies across cloud, on-prem, SaaS, and AI platforms." },
    ],
    path: "/platform/access-control/",
  },
  "threat-detection": {
    title: "Real-time Threat Detection",
    subtitle: "Detect and respond to threats in milliseconds.",
    eyebrow: "Platform",
    description:
      "Datawall's ML-powered threat engine analyzes data access patterns, model behavior, and network activity to identify anomalies, insider threats, and external attacks before they cause damage.",
    features: [
      { title: "Behavioral Analytics", description: "Establish baselines and detect deviations across users, services, and AI models." },
      { title: "Threat Intelligence", description: "Correlate internal signals with global threat feeds for proactive defense." },
      { title: "Automated Response", description: "Contain threats automatically with configurable playbooks and escalation paths." },
      { title: "Incident Investigation", description: "Full forensic timeline with data lineage for rapid root cause analysis." },
    ],
    path: "/platform/threat-detection/",
  },
  "data-map": {
    title: "Data Asset Map",
    subtitle: "See every data asset across your organization.",
    eyebrow: "Platform",
    description:
      "Interactive visualization of your entire data landscape — sources, flows, transformations, and dependencies. Understand where sensitive data lives and how it moves through your AI pipelines.",
    features: [
      { title: "Auto-Discovery", description: "Continuously scan and catalog data across cloud, databases, lakes, and AI systems." },
      { title: "Lineage Tracking", description: "Trace data from source to model output with full transformation history." },
      { title: "Dependency Mapping", description: "Understand impact of changes and vulnerabilities across connected systems." },
      { title: "Interactive Visualization", description: "Explore your data topology with intuitive, real-time dashboards." },
    ],
    path: "/platform/data-map/",
  },
  "sensitive-data": {
    title: "Sensitive Data Identification",
    subtitle: "Automatically detect and classify sensitive information.",
    eyebrow: "Platform",
    description:
      "Datawall uses advanced pattern recognition and ML classification to identify PII, PHI, financial records, credentials, and proprietary data across structured and unstructured sources.",
    features: [
      { title: "Multi-Format Detection", description: "Scan databases, files, APIs, logs, and model outputs for sensitive content." },
      { title: "Custom Classifiers", description: "Train custom detection models for your organization's unique data types." },
      { title: "Confidence Scoring", description: "Prioritize findings with accuracy scores and false-positive reduction." },
      { title: "Continuous Rescanning", description: "Monitor for new sensitive data as your systems evolve." },
    ],
    path: "/platform/sensitive-data/",
  },
  "risk-scoring": {
    title: "AI Risk Scoring",
    subtitle: "Quantify risk across your AI infrastructure.",
    eyebrow: "Platform",
    description:
      "Assign dynamic risk scores to datasets, models, users, and workflows based on sensitivity, exposure, compliance status, and threat intelligence. Prioritize remediation with data-driven insights.",
    features: [
      { title: "Composite Risk Models", description: "Combine multiple risk factors into actionable, prioritized scores." },
      { title: "Model Risk Assessment", description: "Evaluate bias, drift, and security vulnerabilities in deployed models." },
      { title: "Trend Analysis", description: "Track risk evolution over time and measure improvement from interventions." },
      { title: "Executive Dashboards", description: "Board-ready risk summaries with drill-down capabilities." },
    ],
    path: "/platform/risk-scoring/",
  },
  "access-monitoring": {
    title: "User Access Monitoring",
    subtitle: "Complete visibility into who accesses what.",
    eyebrow: "Platform",
    description:
      "Track every data access event with full context — who, what, when, where, and why. Detect policy violations, privilege escalation, and unauthorized access attempts in real time.",
    features: [
      { title: "Session Recording", description: "Detailed access logs with query-level granularity and user attribution." },
      { title: "Policy Violation Alerts", description: "Instant notifications when access patterns breach defined policies." },
      { title: "Access Reviews", description: "Automated periodic reviews with AI-suggested permission adjustments." },
      { title: "Integration Hub", description: "Aggregate access logs from IAM, databases, APIs, and AI platforms." },
    ],
    path: "/platform/access-monitoring/",
  },
  "anomaly-detection": {
    title: "Anomaly Behavior Detection",
    subtitle: "Identify unusual patterns before they become incidents.",
    eyebrow: "Platform",
    description:
      "Machine learning models analyze user behavior, data access patterns, and system activity to detect anomalies that traditional rule-based systems miss.",
    features: [
      { title: "Behavioral Baselines", description: "Learn normal patterns for users, services, and data flows automatically." },
      { title: "Multi-Signal Correlation", description: "Combine access, network, and application signals for higher accuracy." },
      { title: "Insider Threat Detection", description: "Identify compromised accounts and malicious insiders through behavior analysis." },
      { title: "Adaptive Learning", description: "Models improve continuously as your environment evolves." },
    ],
    path: "/platform/anomaly-detection/",
  },
  compliance: {
    title: "Compliance & Incident Analysis",
    subtitle: "Unified compliance status and security event investigation.",
    eyebrow: "Platform",
    description:
      "Monitor regulatory compliance across GDPR, HIPAA, SOC 2, PCI DSS, and more. Investigate security incidents with unified timelines, data lineage, and automated reporting.",
    features: [
      { title: "Compliance Dashboards", description: "Real-time status across all applicable frameworks and controls." },
      { title: "Automated Evidence Collection", description: "Gather audit evidence continuously without manual effort." },
      { title: "Incident Timeline", description: "Reconstruct security events with correlated logs and data flows." },
      { title: "Regulatory Reporting", description: "Generate compliance reports and breach notifications automatically." },
    ],
    path: "/platform/compliance/",
  },
};

export const solutionPages: Record<string, PageContent> = {
  "enterprise-ai": {
    title: "Enterprise AI",
    subtitle: "Secure AI at enterprise scale.",
    eyebrow: "Solutions",
    description: "Protect large-scale AI deployments including LLMs, ML pipelines, and automated decision systems with governance controls designed for enterprise complexity.",
    features: [
      { title: "LLM Security", description: "Guard against prompt injection, data leakage, and model abuse." },
      { title: "MLOps Integration", description: "Embed security into CI/CD pipelines and model registries." },
      { title: "Multi-Team Governance", description: "Centralized policies with team-level customization." },
      { title: "Executive Reporting", description: "AI risk dashboards for leadership and board oversight." },
    ],
    path: "/solutions/enterprise-ai/",
  },
  "financial-services": {
    title: "Financial Services",
    subtitle: "Data protection for regulated financial institutions.",
    eyebrow: "Solutions",
    description: "Meet PCI DSS, SOX, and financial regulatory requirements while enabling AI-driven analytics, fraud detection, and customer intelligence.",
    features: [
      { title: "Transaction Data Protection", description: "Secure financial data across analytics and AI workloads." },
      { title: "Regulatory Compliance", description: "Automated controls for PCI DSS, SOX, and regional regulations." },
      { title: "Fraud Detection Security", description: "Protect ML models and training data used in fraud prevention." },
      { title: "Audit Readiness", description: "Continuous evidence collection for regulatory examinations." },
    ],
    path: "/solutions/financial-services/",
  },
  healthcare: {
    title: "Healthcare Data",
    subtitle: "HIPAA-compliant AI data protection.",
    eyebrow: "Solutions",
    description: "Protect patient data across clinical AI, research platforms, and health analytics while maintaining HIPAA compliance and enabling medical innovation.",
    features: [
      { title: "PHI Protection", description: "Automated detection and protection of protected health information." },
      { title: "Clinical AI Security", description: "Secure diagnostic models, imaging AI, and clinical decision support." },
      { title: "Research Data Governance", description: "De-identification and access controls for research datasets." },
      { title: "BAA Compliance", description: "Business associate agreement support with full audit capabilities." },
    ],
    path: "/solutions/healthcare/",
  },
  saas: {
    title: "SaaS Platforms",
    subtitle: "Multi-tenant data security for SaaS providers.",
    eyebrow: "Solutions",
    description: "Protect customer data across multi-tenant architectures with tenant isolation, data residency controls, and SOC 2 compliance automation.",
    features: [
      { title: "Tenant Isolation", description: "Enforce strict data boundaries between customer environments." },
      { title: "SOC 2 Automation", description: "Continuous compliance monitoring and evidence collection." },
      { title: "Customer Data Portability", description: "Secure data export and deletion for customer offboarding." },
      { title: "API Security", description: "Monitor and protect data flowing through platform APIs." },
    ],
    path: "/solutions/saas/",
  },
  "cloud-infrastructure": {
    title: "Cloud Infrastructure",
    subtitle: "Secure data across multi-cloud environments.",
    eyebrow: "Solutions",
    description: "Unified data protection across AWS, Azure, GCP, and hybrid environments with cloud-native integrations and infrastructure-level security controls.",
    features: [
      { title: "Multi-Cloud Visibility", description: "Single pane of glass across all cloud data stores and services." },
      { title: "Cloud-Native Integration", description: "Deep integrations with cloud IAM, KMS, and security services." },
      { title: "Data Residency", description: "Enforce geographic data boundaries and transfer controls." },
      { title: "Infrastructure Scanning", description: "Detect misconfigurations and exposed data in cloud resources." },
    ],
    path: "/solutions/cloud-infrastructure/",
  },
  "regulated-industries": {
    title: "Regulated Industries",
    subtitle: "Compliance-first data security.",
    eyebrow: "Solutions",
    description: "Purpose-built for industries with stringent regulatory requirements including government, energy, telecommunications, and critical infrastructure.",
    features: [
      { title: "Framework Mapping", description: "Pre-built controls for NIST, ISO 27001, FedRAMP, and industry standards." },
      { title: "Air-Gap Support", description: "Deploy in isolated environments with offline operation capabilities." },
      { title: "Classification Handling", description: "Support for classified and controlled unclassified information." },
      { title: "Supply Chain Security", description: "Monitor and secure third-party data access and integrations." },
    ],
    path: "/solutions/regulated-industries/",
  },
};

export const securityPages: Record<string, PageContent> = {
  "zero-trust": {
    title: "Zero Trust Architecture",
    subtitle: "Never trust, always verify.",
    eyebrow: "Security",
    description: "Datawall implements zero trust principles across your entire data and AI infrastructure — verifying every access request regardless of source or location.",
    features: [
      { title: "Identity Verification", description: "Multi-factor authentication and continuous identity validation." },
      { title: "Micro-Segmentation", description: "Granular network and data segmentation with policy enforcement." },
      { title: "Device Trust", description: "Endpoint verification and device health assessment." },
      { title: "Least Privilege", description: "Minimal access rights with just-in-time elevation." },
    ],
    path: "/security/zero-trust/",
  },
  encryption: {
    title: "End-to-end Encryption",
    subtitle: "Protect data at every stage.",
    eyebrow: "Security",
    description: "Military-grade encryption for data at rest, in transit, and in use. Customer-managed keys, hardware security modules, and homomorphic encryption support.",
    features: [
      { title: "AES-256 at Rest", description: "Industry-standard encryption for all stored data and backups." },
      { title: "TLS 1.3 in Transit", description: "Secure all data movement between systems and services." },
      { title: "Customer-Managed Keys", description: "Full control over encryption keys with BYOK and HYOK options." },
      { title: "Confidential Computing", description: "Process encrypted data without decryption for sensitive workloads." },
    ],
    path: "/security/encryption/",
  },
  rbac: {
    title: "Role-based Access",
    subtitle: "Granular permissions, simply managed.",
    eyebrow: "Security",
    description: "Flexible role-based access control with attribute-based extensions, supporting complex organizational hierarchies and cross-functional teams.",
    features: [
      { title: "Custom Roles", description: "Define roles aligned with your organizational structure." },
      { title: "Attribute-Based Access", description: "Combine roles with dynamic attributes for fine-grained control." },
      { title: "Delegation", description: "Temporary permission delegation with approval workflows." },
      { title: "Directory Integration", description: "Sync with Active Directory, Okta, and other identity providers." },
    ],
    path: "/security/rbac/",
  },
  "audit-trails": {
    title: "Complete Audit Trails",
    subtitle: "Immutable record of every action.",
    eyebrow: "Security",
    description: "Tamper-proof audit logs capturing every data access, policy change, and security event with cryptographic integrity verification.",
    features: [
      { title: "Immutable Logs", description: "Cryptographically signed logs that cannot be altered or deleted." },
      { title: "Comprehensive Coverage", description: "Log every API call, data access, and configuration change." },
      { title: "Long-Term Retention", description: "Configurable retention policies meeting regulatory requirements." },
      { title: "Search & Export", description: "Powerful search and export for investigations and audits." },
    ],
    path: "/security/audit-trails/",
  },
  "privacy-by-design": {
    title: "Privacy by Design",
    subtitle: "Privacy built into every layer.",
    eyebrow: "Security",
    description: "Privacy principles embedded in platform architecture — data minimization, purpose limitation, and privacy-preserving analytics by default.",
    features: [
      { title: "Data Minimization", description: "Collect and retain only necessary data with automatic expiration." },
      { title: "Purpose Limitation", description: "Enforce data usage boundaries based on collection purpose." },
      { title: "Pseudonymization", description: "Replace identifiers with pseudonyms for analytics workloads." },
      { title: "Differential Privacy", description: "Add statistical noise to protect individual records in aggregates." },
    ],
    path: "/security/privacy-by-design/",
  },
  "compliance-automation": {
    title: "Compliance Automation",
    subtitle: "Continuous compliance, zero manual effort.",
    eyebrow: "Security",
    description: "Automate compliance monitoring, evidence collection, and reporting across GDPR, HIPAA, SOC 2, PCI DSS, ISO 27001, and custom frameworks.",
    features: [
      { title: "Control Monitoring", description: "Continuous assessment of security controls against frameworks." },
      { title: "Gap Analysis", description: "Identify and prioritize compliance gaps with remediation guidance." },
      { title: "Automated Reporting", description: "Generate audit-ready reports on demand." },
      { title: "Policy Templates", description: "Pre-built policy templates for major regulatory frameworks." },
    ],
    path: "/security/compliance-automation/",
  },
};

export const developerPages: Record<string, PageContent> = {
  api: {
    title: "API Reference",
    subtitle: "RESTful APIs for complete platform control.",
    eyebrow: "Developers",
    description: "Comprehensive REST API for data discovery, policy management, threat response, and compliance reporting. OpenAPI 3.0 specification with interactive documentation.",
    features: [
      { title: "RESTful Design", description: "Predictable, resource-oriented API following REST best practices." },
      { title: "OpenAPI 3.0", description: "Full specification with code generation support." },
      { title: "Rate Limiting", description: "Generous limits with burst support for high-volume operations." },
      { title: "Versioning", description: "Stable API versions with clear deprecation policies." },
    ],
    path: "/developers/api/",
  },
  sdk: {
    title: "SDK",
    subtitle: "Native libraries for rapid integration.",
    eyebrow: "Developers",
    description: "Official SDKs for Python, Node.js, Go, and Java with type-safe interfaces, automatic retries, and comprehensive error handling.",
    features: [
      { title: "Multi-Language", description: "Python, Node.js, Go, and Java SDKs with consistent interfaces." },
      { title: "Type Safety", description: "Full type definitions and IDE autocompletion support." },
      { title: "Async Support", description: "Non-blocking operations for high-performance applications." },
      { title: "Testing Tools", description: "Mock clients and test fixtures for development and CI." },
    ],
    path: "/developers/sdk/",
  },
  webhooks: {
    title: "Webhooks",
    subtitle: "Real-time event notifications.",
    eyebrow: "Developers",
    description: "Receive instant notifications for security events, policy violations, compliance changes, and system alerts via signed webhook deliveries.",
    features: [
      { title: "Event Types", description: "Subscribe to threat, access, compliance, and system events." },
      { title: "Signed Payloads", description: "HMAC-SHA256 signatures for payload verification." },
      { title: "Retry Logic", description: "Automatic retries with exponential backoff for failed deliveries." },
      { title: "Event Filtering", description: "Configure filters to receive only relevant events." },
    ],
    path: "/developers/webhooks/",
  },
  integrations: {
    title: "Integrations",
    subtitle: "Connect with your existing security stack.",
    eyebrow: "Developers",
    description: "Pre-built integrations with SIEM platforms, cloud providers, identity systems, and security tools for seamless data flow and unified operations.",
    features: [
      { title: "SIEM Connectors", description: "Splunk, Elastic, Sentinel, and QRadar integrations." },
      { title: "Cloud Platforms", description: "Native integrations with AWS, Azure, and GCP security services." },
      { title: "Identity Providers", description: "Okta, Azure AD, and custom SAML/OIDC support." },
      { title: "Ticketing Systems", description: "Jira, ServiceNow, and PagerDuty incident integration." },
    ],
    path: "/developers/integrations/",
  },
};
