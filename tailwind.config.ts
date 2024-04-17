import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BC8E6D",
        secondary: "#87806D",
        tertiary: "#E6D6C7",
        background: "#F5F5F5",
      },
      backgroundImage: {
        "pre-footer": "url('/img/hero-background.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
