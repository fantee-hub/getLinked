import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "prizes-bg": "url('../public/assets/images/prizes-bg.png')",
      },
      fontFamily: {
        "tt-clashDisplay": ["var(--font-tt-clashDisplay)", "sans-serif"],
        montserrat: ["var(--font-montserrat)"],
        unica: ["var(--font-unica)"],
      },
    },
  },
  plugins: [],
};
export default config;
