import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050607",
        surface: "#0A0C0E",
        elevated: "#111519",
        line: "rgba(255,255,255,0.10)",
        ice: "#F4F8FA",
        accent: "#D5E0E5",
        metal: "#7B858B",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(213, 224, 229, 0.16)",
      },
      backgroundImage: {
        "engine-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
