import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DEVELOPER_FEATURES } from "@/lib/constants";

const CODE_EXAMPLE = `const vehicle = await soma.vehicles.get("vehicle_2048");

const prediction = await soma.ai.predict({
  vehicle,
  model: "maintenance-risk",
  horizon: "30d"
});

console.log(prediction.riskScore);`;

export function Developers() {
  return (
    <Section className="bg-soma-gray-50">
      <SectionTitle
        title={
          <>
            Built for developers.
            <br />
            Ready for production.
          </>
        }
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <FadeIn>
          <div className="bg-soma-black rounded-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-soma-gray-500">
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <span className="ml-2 font-mono text-[10px] text-soma-gray-400">
                example.js
              </span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="font-mono text-sm text-soma-gray-100 leading-relaxed">
                {CODE_EXAMPLE}
              </code>
            </pre>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul className="space-y-4 mb-10">
            {DEVELOPER_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-soma-gray-400"
              >
                <span className="w-1 h-1 rounded-full bg-soma-accent flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/developers/">Read Documentation</Button>
            <Button href="/developers/api-access/" variant="secondary">
              Get API Access
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
