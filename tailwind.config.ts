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
        surface: "#0B0F12",
        elevated: "#101820",
        line: "rgba(255,255,255,0.10)",
        ice: "#BDEEFF",
        accent: "#78DFFF",
        metal: "#6F777C",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 44px rgba(120, 223, 255, 0.18)",
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
