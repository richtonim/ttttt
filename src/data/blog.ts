export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'spatial-computing-2026',
    title: 'Spatial Computing in 2026: From Screens to Habitable Models',
    excerpt:
      'Why architects and PropTech teams are moving from static renders to real-time spatial intelligence engines.',
    date: '2026-01-14',
    readTime: '6 min',
    category: 'Spatial Computing',
    content: [
      'In early 2026, spatial computing stopped being a headset story and became a production workflow story. Firms no longer ask whether a room can be visualized — they ask whether a space can be reasoned about: materials, lighting, circulation, and cost all at once.',
      'INTERIORPUP.AI was built for that shift. Natural language and floor-plan inputs become structured 3D interiors with BIM-grade material fidelity, not mood-board approximations.',
      'The competitive edge is latency and topology. Millisecond generation means design exploration becomes conversational. Furniture softscape topology means layouts remain editable and exportable into professional pipelines.',
      'For PropTech, this unlocks listing previews, renovation scenarios, and investor walkthroughs without waiting on traditional visualization cycles.',
    ],
  },
  {
    slug: 'nerf-gaussian-splatting-interiors',
    title: 'NeRF & 3D Gaussian Splatting for Interior Intelligence',
    excerpt:
      'How implicit fields and Gaussian representations power photoreal interiors without sacrificing editability.',
    date: '2026-02-03',
    readTime: '7 min',
    category: '3D AI',
    content: [
      'Neural Radiance Fields and 3D Gaussian Splatting redefined how machines represent space. Photorealism is no longer the bottleneck — controllability is.',
      'INTERIORPUP combines generative spatial priors with structured scene graphs. That means you get the visual richness of modern 3D AI while retaining walls, openings, materials, and furniture as discrete, addressable entities.',
      'Lighting simulation rides on the same graph: soft daylight, artificial accents, and material response are computed as part of the generation pass, not bolted on afterward.',
      'The result is a hybrid representation: fast to preview, precise enough for design decisions, and ready for downstream BIM / CAD handoff.',
    ],
  },
  {
    slug: 'bim-grade-ai-materials',
    title: 'What “BIM-Grade” Materials Mean for AI Interiors',
    excerpt:
      'Texture maps are not enough. Specular response, finish metadata, and manufacturer-ready attributes matter.',
    date: '2026-02-21',
    readTime: '5 min',
    category: 'Materials',
    content: [
      'Many generative tools invent pretty surfaces. Professionals need named finishes, reflectance behavior, and attributes that survive a specification package.',
      'Our material stack attaches semantic tags and physical cues to every generated surface — wood species families, metal finishes, textile categories — so designers can refine rather than rebuild.',
      'Pair that with furniture topology and you get spaces that look right and remain operationally useful for procurement and renovation planning.',
      'Whitelist partners are already testing manufacturer libraries and custom finish packs inside early studio seats.',
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
