import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light: "rgb(var(--light) / <alpha-value>)",
      dark: "rgb(var(--dark) / <alpha-value>)",
      primary: "rgb(var(--primary) / <alpha-value>)",
      secondary: "rgb(var(--secondary) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        inconsolata: ["var(--font-inconsolata)", "sans-serif"],
        marcellusSC: ["var(--font-marcellus-sc)", "serif"],
      },
      fontSize: {},
      padding: {},
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1280px",
      },
      spacing: {},
      borderRadius: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
      objectPosition: {},
    },
  },
  plugins: [],
} satisfies Config;
