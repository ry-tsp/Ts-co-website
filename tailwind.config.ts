import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm-plex)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        courier: ["var(--font-courier)", "monospace"],
      },
      colors: {
        oxblood: "#6b1a1a",
        ink: "#1a1008",
        "oxblood-tint": "#f7efef",
      },
      letterSpacing: {
        widest2: "0.14em",
        widest3: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
