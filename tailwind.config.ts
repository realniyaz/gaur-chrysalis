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
        luxury: {
          gold: "#dfc7a1",
          goldHover: "#d1b48c",
          darkBg: "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
};
export default config;