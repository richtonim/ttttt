import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        soma: {
          black: "#0A0A0A",
          white: "#FAFAFA",
          gray: {
            50: "#F5F5F5",
            100: "#EBEBEB",
            200: "#D4D4D4",
            300: "#A3A3A3",
            400: "#737373",
            500: "#525252",
          },
          accent: "#00D4FF",
          accentGreen: "#00FF88",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "IBM Plex Mono", "monospace"],
      },
      fontSize: {
        "hero-desktop": ["clamp(3.25rem,8vw,9.375rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "hero-tablet": ["clamp(4.5rem,10vw,5.625rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "hero-mobile": ["clamp(3.25rem,12vw,4.25rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-1": ["clamp(3rem,6vw,6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2rem,4vw,4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
