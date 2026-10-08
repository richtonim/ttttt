export interface FlashDigest {
  id: string;
  title: string;
  summary: string;
  source: 'GitHub' | 'ArXiv' | 'HuggingFace' | 'AI Lab' | 'X';
  timestamp: string;
  latencyMs: number;
  tags: string[];
  url: string;
}

export interface ModelTelemetry {
  id: string;
  name: string;
  provider: string;
  releaseDate: string;
  contextWindow: number;
  parameters: string;
  benchmark: { name: string; score: number }[];
  status: 'released' | 'preview' | 'rumored';
  latencyMs: number;
}

export const flashDigests: FlashDigest[] = [
  {
    id: 'fd-001',
    title: 'OpenAI ships o3-mini with 4× reasoning throughput',
    summary: 'New compact reasoning model targets agentic workflows. API latency reduced to 280ms p50 on standard tier.',
    source: 'AI Lab',
    timestamp: '2026-02-04T12:18:42Z',
    latencyMs: 142,
    tags: ['reasoning', 'api', 'agents'],
    url: '#',
  },
  {
    id: 'fd-002',
    title: 'Meta releases Llama 4 Scout — 10M context window',
    summary: 'Open-weight model family debuts with native multimodal support and 128K effective retrieval on long docs.',
    source: 'HuggingFace',
    timestamp: '2026-02-04T12:15:08Z',
    latencyMs: 198,
    tags: ['open-source', 'multimodal', 'llama'],
    url: '#',
  },
  {
    id: 'fd-003',
    title: 'DeepSeek-R2 paper drops on ArXiv — MoE at 671B',
    summary: 'Sparse mixture-of-experts architecture claims SOTA on MATH-500 while activating only 37B params per token.',
    source: 'ArXiv',
    timestamp: '2026-02-04T12:11:33Z',
    latencyMs: 167,
    tags: ['moe', 'research', 'math'],
    url: '#',
  },
  {
    id: 'fd-004',
    title: 'Anthropic Claude 4 Opus enters public preview',
    summary: 'Extended thinking mode with tool-use orchestration. SWE-bench Verified: 72.4% (+8.1pp vs prior).',
    source: 'AI Lab',
    timestamp: '2026-02-04T12:08:19Z',
    latencyMs: 155,
    tags: ['claude', 'coding', 'preview'],
    url: '#',
  },
  {
    id: 'fd-005',
    title: 'vLLM 0.6.0 — PagedAttention 2.0 cuts TTFT 40%',
    summary: 'Major inference engine release with speculative decoding and native FP8 kernels for Blackwell GPUs.',
    source: 'GitHub',
    timestamp: '2026-02-04T12:04:51Z',
    latencyMs: 189,
    tags: ['inference', 'vllm', 'gpu'],
    url: '#',
  },
  {
    id: 'fd-006',
    title: 'Google Gemini 2.5 Flash: sub-100ms TTFT on Edge',
    summary: 'Distilled variant optimized for on-device deployment. 3B active params, 89% of Pro quality on MMLU.',
    source: 'AI Lab',
    timestamp: '2026-02-04T12:01:27Z',
    latencyMs: 134,
    tags: ['gemini', 'edge', 'distillation'],
    url: '#',
  },
];

export const modelTelemetry: ModelTelemetry[] = [
  {
    id: 'mt-001',
    name: 'Claude 4 Opus',
    provider: 'Anthropic',
    releaseDate: '2026-02-04',
    contextWindow: 200000,
    parameters: '—',
    benchmark: [
      { name: 'SWE-bench', score: 72.4 },
      { name: 'MMLU', score: 91.2 },
      { name: 'HumanEval', score: 94.1 },
    ],
    status: 'preview',
    latencyMs: 312,
  },
  {
    id: 'mt-002',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    releaseDate: '2026-02-04',
    contextWindow: 10000000,
    parameters: '109B MoE',
    benchmark: [
      { name: 'MMLU', score: 88.7 },
      { name: 'GSM8K', score: 92.3 },
      { name: 'MATH', score: 76.8 },
    ],
    status: 'released',
    latencyMs: 245,
  },
  {
    id: 'mt-003',
    name: 'o3-mini',
    provider: 'OpenAI',
    releaseDate: '2026-02-04',
    contextWindow: 200000,
    parameters: '—',
    benchmark: [
      { name: 'AIME 2025', score: 87.3 },
      { name: 'GPQA', score: 78.9 },
      { name: 'MMLU', score: 89.5 },
    ],
    status: 'released',
    latencyMs: 280,
  },
  {
    id: 'mt-004',
    name: 'DeepSeek-R2',
    provider: 'DeepSeek',
    releaseDate: '2026-02-04',
    contextWindow: 128000,
    parameters: '671B MoE',
    benchmark: [
      { name: 'MATH-500', score: 94.2 },
      { name: 'MMLU', score: 90.1 },
      { name: 'HumanEval', score: 91.7 },
    ],
    status: 'rumored',
    latencyMs: 198,
  },
  {
    id: 'mt-005',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    releaseDate: '2026-02-03',
    contextWindow: 1000000,
    parameters: '3B active',
    benchmark: [
      { name: 'MMLU', score: 84.6 },
      { name: 'MATH', score: 81.2 },
      { name: 'HumanEval', score: 88.4 },
    ],
    status: 'released',
    latencyMs: 95,
  },
];

export const pricingPlans = [
  {
    id: 'observer',
    name: 'Observer',
    price: 0,
    period: 'forever',
    description: 'Read-only access to public Flash Digests with 15-minute delay.',
    features: [
      'Public digest feed (15min delay)',
      'Daily email roundup',
      'Basic model release alerts',
      'Community Discord access',
    ],
    cta: 'Get Started',
    highlighted: false,
    requiresWhitelist: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: '/month',
    description: 'Real-time intelligence for individual developers and researchers.',
    features: [
      'Sub-second Flash Digests',
      'Live model telemetry dashboard',
      'Custom alert rules (20)',
      'API access (10K req/day)',
      'ArXiv & GitHub deep links',
      'Benchmark comparison tools',
    ],
    cta: 'Request Access',
    highlighted: true,
    requiresWhitelist: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    period: '/month',
    description: 'Full telemetry suite for AI teams and investment firms.',
    features: [
      'Everything in Pro',
      'Unlimited alert rules',
      'API access (unlimited)',
      'Custom agent pipelines',
      'Slack & webhook integrations',
      'Dedicated account manager',
      'SLA 99.99% uptime',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    requiresWhitelist: true,
  },
];
