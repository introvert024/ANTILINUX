import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fedora: {
          DEFAULT: "#3c6eb4",
          light: "#51a2da",
          dark: "#294172",
        },
        gnome: {
          DEFAULT: "#4a86cf",
          dark: "#1e1e2e",
          darker: "#11111b",
          surface: "#181825",
          card: "#24273a",
        },
        accent: {
          neon: "#00e599",
          cyan: "#06b6d4",
          purple: "#a855f7",
          warning: "#f59e0b",
          danger: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
