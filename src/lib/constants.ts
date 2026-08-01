export const SITE_URL = "https://entropy.autos";
export const SITE_NAME = "Entropy";
export const SITE_TAGLINE = "Turn complexity into motion.";
export const SITE_DESCRIPTION =
  "Entropy transforms vehicle data into intelligent decisions for safer, faster and more autonomous mobility.";

export const WHITELISTED_EMAILS = [
  "demo@entropy.autos",
  "admin@entropy.autos",
  "partner@entropy.autos",
  "fleet@entropy.autos",
  "dev@entropy.autos",
];

export const NAV_LINKS = {
  platform: [
    { href: "/platform/", label: "Overview" },
    { href: "/platform/vehicle-data/", label: "Vehicle Data Platform" },
    { href: "/platform/fleet-intelligence/", label: "Fleet Intelligence" },
    { href: "/platform/analytics/", label: "Analytics" },
  ],
  solutions: [
    { href: "/solutions/", label: "Overview" },
    { href: "/solutions/manufacturers/", label: "Automotive Manufacturers" },
    { href: "/solutions/autonomous-vehicles/", label: "Autonomous Vehicles" },
    { href: "/solutions/electric-fleets/", label: "Electric Fleets" },
    { href: "/solutions/logistics/", label: "Logistics & Delivery" },
    { href: "/solutions/smart-mobility/", label: "Smart Mobility" },
  ],
  technology: [
    { href: "/technology/", label: "Overview" },
    { href: "/technology/ai-engine/", label: "AI Engine" },
    { href: "/technology/edge-computing/", label: "Edge Computing" },
    { href: "/technology/security/", label: "Security" },
  ],
  developers: [
    { href: "/developers/", label: "Overview" },
    { href: "/developers/api-reference/", label: "API Reference" },
    { href: "/developers/sdks/", label: "SDKs" },
    { href: "/developers/webhooks/", label: "Webhooks" },
    { href: "/developers/docs/", label: "Documentation" },
  ],
  company: [
    { href: "/company/", label: "About" },
    { href: "/company/careers/", label: "Careers" },
    { href: "/company/press/", label: "Press" },
    { href: "/contact/", label: "Contact" },
  ],
};

export const CORE_CAPABILITIES = [
  {
    number: "01",
    title: "Autonomous Intelligence",
    description:
      "Real-time perception and decision-making powered by edge AI, enabling vehicles to navigate complex environments with confidence.",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
  },
  {
    number: "02",
    title: "Vehicle Data Platform",
    description:
      "Unified ingestion, normalization and streaming of telematics, sensor and CAN bus data across your entire fleet.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    number: "03",
    title: "Predictive Maintenance",
    description:
      "Machine learning models detect component degradation before failure, reducing downtime and extending vehicle lifespan.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
  },
  {
    number: "04",
    title: "Fleet Optimization",
    description:
      "Route planning, energy management and utilization analytics that maximize efficiency across every mile driven.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
  },
];

export const PLATFORM_FEATURES = [
  {
    title: "Live Vehicle Map",
    description: "Real-time fleet positioning with geofencing and route overlays.",
    metric: "12,400+",
    unit: "vehicles tracked",
  },
  {
    title: "AI Risk Scoring",
    description: "Dynamic safety scores based on driving behavior and road conditions.",
    metric: "98.7%",
    unit: "accuracy",
  },
  {
    title: "Battery Health",
    description: "State-of-health monitoring with degradation forecasting.",
    metric: "±2%",
    unit: "prediction error",
  },
  {
    title: "Autonomous Events",
    description: "Disengagement logging, intervention analysis and ODD compliance.",
    metric: "<50ms",
    unit: "event latency",
  },
  {
    title: "Maintenance Alerts",
    description: "Predictive service scheduling with parts inventory integration.",
    metric: "34%",
    unit: "cost reduction",
  },
  {
    title: "Fleet Efficiency",
    description: "Energy consumption analytics and carbon footprint reporting.",
    metric: "22%",
    unit: "energy savings",
  },
];

export const TECH_FLOW = [
  { step: "Sense", description: "Capture sensor, telematics and environmental data" },
  { step: "Understand", description: "Fuse multi-modal inputs into unified context" },
  { step: "Predict", description: "Model outcomes with probabilistic AI" },
  { step: "Decide", description: "Generate optimal actions under constraints" },
  { step: "Act", description: "Execute decisions via vehicle and fleet APIs" },
];

export const USE_CASES = [
  {
    title: "Automotive Manufacturers",
    description: "Embed intelligence into production vehicles with OEM-grade data pipelines.",
    href: "/solutions/manufacturers/",
  },
  {
    title: "Autonomous Vehicles",
    description: "Safety-critical perception, planning and validation for AV programs.",
    href: "/solutions/autonomous-vehicles/",
  },
  {
    title: "Electric Fleets",
    description: "Range optimization, charging orchestration and battery lifecycle management.",
    href: "/solutions/electric-fleets/",
  },
  {
    title: "Logistics & Delivery",
    description: "Last-mile routing, driver coaching and delivery SLA optimization.",
    href: "/solutions/logistics/",
  },
  {
    title: "Smart Mobility",
    description: "MaaS platforms, ride-sharing intelligence and urban mobility analytics.",
    href: "/solutions/smart-mobility/",
  },
];

export const METRICS = [
  { value: "2.4M+", label: "Vehicles Connected" },
  { value: "18PB", label: "Data Processed Daily" },
  { value: "12ms", label: "Decision Latency" },
  { value: "99.99%", label: "System Uptime" },
];

export const SECURITY_FEATURES = [
  { title: "Enterprise Security", description: "SOC 2 Type II, ISO 27001 and GDPR compliance." },
  { title: "Real-time Monitoring", description: "24/7 anomaly detection across all data pipelines." },
  { title: "Explainable AI", description: "Transparent decision logs with full model interpretability." },
  { title: "Secure APIs", description: "OAuth 2.0, mTLS and role-based access control." },
  { title: "Human Control", description: "Override mechanisms and human-in-the-loop workflows." },
  { title: "Complete Audit Trails", description: "Immutable logs for every decision and data access." },
];

export const API_CODE = `import { Entropy } from '@entropy/sdk';

const client = new Entropy({
  apiKey: process.env.ENTROPY_API_KEY,
});

// Stream real-time vehicle telemetry
const stream = await client.vehicles.stream({
  fleetId: 'fleet_7x9k2m',
  signals: ['location', 'battery', 'sensors'],
});

stream.on('data', (event) => {
  const decision = client.ai.evaluate({
  vehicleId: event.vehicleId,
  context: event.signals,
  });
  console.log(decision.action, decision.confidence);
});`;
