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
        navy: {
          50: "#F4F6FA",
          100: "#E4E9F2",
          200: "#C5CFE0",
          300: "#9DAEC9",
          400: "#5E769E",
          500: "#2C4D70",
          600: "#1B3A5C",
          700: "#102844",
          800: "#0B1B33",
          900: "#060F1F",
        },
        gold: {
          50: "#FBF7EC",
          100: "#F4E9C8",
          200: "#E9D293",
          300: "#DBBA5E",
          400: "#CDA748",
          500: "#C9A24B",
          600: "#A8842F",
          700: "#856621",
        },
        cream: "#FAF8F3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
