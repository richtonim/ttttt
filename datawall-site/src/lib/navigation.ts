export const footerNav = {
  Platform: [
    { label: "AI Data Security", href: "/platform/ai-data-security/" },
    { label: "Privacy Governance", href: "/platform/privacy-governance/" },
    { label: "Access Control", href: "/platform/access-control/" },
    { label: "Threat Detection", href: "/platform/threat-detection/" },
    { label: "Data Asset Map", href: "/platform/data-map/" },
    { label: "Compliance", href: "/platform/compliance/" },
  ],
  Solutions: [
    { label: "Enterprise AI", href: "/solutions/enterprise-ai/" },
    { label: "Financial Services", href: "/solutions/financial-services/" },
    { label: "Healthcare Data", href: "/solutions/healthcare/" },
    { label: "SaaS Platforms", href: "/solutions/saas/" },
    { label: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure/" },
    { label: "Regulated Industries", href: "/solutions/regulated-industries/" },
  ],
  Security: [
    { label: "Zero Trust", href: "/security/zero-trust/" },
    { label: "Encryption", href: "/security/encryption/" },
    { label: "Role-based Access", href: "/security/rbac/" },
    { label: "Audit Trails", href: "/security/audit-trails/" },
    { label: "Privacy by Design", href: "/security/privacy-by-design/" },
    { label: "Compliance Automation", href: "/security/compliance-automation/" },
  ],
  Developers: [
    { label: "API Reference", href: "/developers/api/" },
    { label: "SDK", href: "/developers/sdk/" },
    { label: "Webhooks", href: "/developers/webhooks/" },
    { label: "Integrations", href: "/developers/integrations/" },
  ],
  Company: [
    { label: "About", href: "/company/about/" },
    { label: "Careers", href: "/company/careers/" },
    { label: "News", href: "/company/news/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;

export const mainNav = [
  { label: "Platform", href: "/platform/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Security", href: "/security/" },
  { label: "Developers", href: "/developers/" },
  { label: "Company", href: "/company/" },
] as const;
