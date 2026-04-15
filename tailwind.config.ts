import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07111f",
        panel: "#0c1729",
        primary: "#6ea8fe",
        secondary: "#8b5cf6"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,.35)"
      }
    }
  },
  plugins: []
};

export default config;
