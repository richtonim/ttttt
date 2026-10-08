import { FadeIn } from "@/lib/animations";
import { Section } from "@/components/ui/Section";

export function Vision() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn>
          <h2 className="text-display-1 font-semibold text-soma-black mb-8">
            We believe every vehicle should become more intelligent with every
            journey.
          </h2>
          <p className="text-lg md:text-xl text-soma-gray-400 leading-relaxed">
            SOMA is building the intelligence infrastructure that connects
            vehicles, AI models and mobility operations into one continuously
            learning system.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[4/3] bg-soma-gray-50 overflow-hidden">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              fill="none"
              aria-hidden="true"
            >
              {/* Road perspective */}
              <path
                d="M 200 300 L 120 150 L 80 0 M 200 300 L 280 150 L 320 0"
                stroke="#EBEBEB"
                strokeWidth="1"
              />
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={i}
                  x1={160 - i * 10}
                  y1={300 - i * 37}
                  x2={240 + i * 10}
                  y2={300 - i * 37}
                  stroke="#EBEBEB"
                  strokeWidth="0.5"
                />
              ))}
              {/* Vehicle silhouette */}
              <rect
                x="175"
                y="200"
                width="50"
                height="25"
                rx="4"
                fill="#0A0A0A"
                opacity="0.1"
              />
              {/* Data nodes */}
              {[
                { x: 100, y: 80 },
                { x: 300, y: 60 },
                { x: 150, y: 40 },
                { x: 250, y: 100 },
              ].map((pos, i) => (
                <circle
                  key={i}
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill="#00D4FF"
                  opacity="0.4"
                />
              ))}
            </svg>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
