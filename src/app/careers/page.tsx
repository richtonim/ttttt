import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Careers",
  description: "Join SOMA Autos and help build the intelligence infrastructure for the next generation of vehicles.",
  path: "/careers/",
});

const OPEN_ROLES = [
  {
    title: "Senior ML Engineer — Perception",
    team: "AI Research",
    location: "Remote / San Francisco",
    type: "Full-time",
  },
  {
    title: "Platform Engineer — Data Infrastructure",
    team: "Engineering",
    location: "Remote / Berlin",
    type: "Full-time",
  },
  {
    title: "Product Manager — Fleet Intelligence",
    team: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Solutions Architect — Automotive",
    team: "Customer Success",
    location: "Remote / Detroit",
    type: "Full-time",
  },
  {
    title: "Frontend Engineer — Console Platform",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

const BENEFITS = [
  "Competitive equity and compensation",
  "Remote-first culture",
  "Health, dental, and vision coverage",
  "Learning and development budget",
  "Latest hardware and tools",
  "Annual team retreats",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Careers"
        title="Build the future of automotive intelligence."
        description="Join a team of engineers, researchers, and product builders creating the intelligence infrastructure for modern mobility."
      />

      <Section>
        <FadeIn>
          <h2 className="text-2xl font-semibold text-soma-black mb-8">Open Positions</h2>
          <div className="divide-y divide-soma-gray-100 mb-16">
            {OPEN_ROLES.map((role) => (
              <div key={role.title} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-soma-black">{role.title}</h3>
                  <p className="text-sm text-soma-gray-400 mt-1">
                    {role.team} · {role.location} · {role.type}
                  </p>
                </div>
                <Button href="/contact/">Apply</Button>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-soma-black mb-6">Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-soma-gray-400">
                <span className="w-1 h-1 rounded-full bg-soma-accent" />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-soma-gray-400">
            Don&apos;t see a role that fits?{" "}
            <a href="/contact/" className="text-soma-black underline">Get in touch</a> — we&apos;re always looking for exceptional talent.
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
