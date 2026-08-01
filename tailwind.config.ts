import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#111318",
        muted: {
          DEFAULT: "#969CA6",
          foreground: "#626873",
        },
        border: {
          DEFAULT: "#E7E9ED",
          dark: "rgba(255,255,255,0.12)",
        },
        brand: {
          DEFAULT: "#7157FF",
          light: "#EEEAFE",
          dark: "#5035E5",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F7F9",
          dark: "#0B0D10",
        },
        success: "#16A36A",
        warning: "#F59E0B",
        error: "#DC3545",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", "sans-serif"],
        display: ["var(--font-space-grotesk)", "PingFang SC", "Noto Sans SC", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        button: "10px",
        card: "16px",
        panel: "24px",
      },
      boxShadow: {
        card: "0 10px 40px rgba(15, 18, 25, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
