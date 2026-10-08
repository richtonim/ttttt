export type IntegrationStatus = "available" | "beta" | "planned" | "request";

export interface Integration {
  name: string;
  description: string;
  category: string;
  status: IntegrationStatus;
}

export const integrationCategories = [
  "AI Models",
  "Data Sources",
  "Communication",
  "CRM",
  "Developer Tools",
  "Databases",
  "Cloud Storage",
  "Productivity",
];

export const integrations: Integration[] = [
  { name: "OpenAI", description: "GPT models via unified API.", category: "AI Models", status: "planned" },
  { name: "Anthropic", description: "Claude models via unified API.", category: "AI Models", status: "planned" },
  { name: "Google Gemini", description: "Gemini models via unified API.", category: "AI Models", status: "planned" },
  { name: "Mistral", description: "Mistral models via unified API.", category: "AI Models", status: "planned" },
  { name: "DeepSeek", description: "DeepSeek models via unified API.", category: "AI Models", status: "planned" },
  { name: "Groq", description: "Fast inference via Groq.", category: "AI Models", status: "planned" },
  { name: "Azure OpenAI", description: "Enterprise Azure deployment.", category: "AI Models", status: "planned" },
  { name: "AWS Bedrock", description: "AWS managed model access.", category: "AI Models", status: "planned" },
  { name: "Slack", description: "Deploy agents in Slack channels.", category: "Communication", status: "planned" },
  { name: "Microsoft Teams", description: "Deploy agents in Teams.", category: "Communication", status: "planned" },
  { name: "Google Drive", description: "Sync documents from Drive.", category: "Data Sources", status: "planned" },
  { name: "Notion", description: "Sync pages and databases.", category: "Data Sources", status: "planned" },
  { name: "Confluence", description: "Sync wiki content.", category: "Data Sources", status: "planned" },
  { name: "Dropbox", description: "Sync files from Dropbox.", category: "Cloud Storage", status: "planned" },
  { name: "GitHub", description: "Connect repositories and issues.", category: "Developer Tools", status: "planned" },
  { name: "PostgreSQL", description: "Query and sync database data.", category: "Databases", status: "planned" },
  { name: "MySQL", description: "Query and sync database data.", category: "Databases", status: "planned" },
  { name: "Salesforce", description: "CRM data sync and updates.", category: "CRM", status: "planned" },
  { name: "HubSpot", description: "CRM data sync and updates.", category: "CRM", status: "planned" },
  { name: "Webhooks", description: "Custom event integrations.", category: "Developer Tools", status: "beta" },
  { name: "REST API", description: "Universal HTTP integration.", category: "Developer Tools", status: "beta" },
];
