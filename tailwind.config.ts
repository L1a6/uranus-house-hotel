import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        small: "470px",
        medium: "730px",
        desktop: "1365px",
        largesceen: "1700px",
        fourk: "2400px",
      },
      colors: {
        primary: "#0C1D35",
        secondary: "#C9A050",
        cream: {
          DEFAULT: "#FAF7F2",
          100: "#F0EBE1",
          200: "#E8DDD1",
        },
        navy: {
          light: "#1A3260",
          DEFAULT: "#0C1D35",
          dark: "#060F1C",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
        "scale-up": "scaleUp 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both",
        "spin-slow": "spin 40s linear infinite",
        float: "float 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scaleY(0.4)", transformOrigin: "100% 0" },
          "100%": { transform: "scaleY(1)", transformOrigin: "100% 0" },
        },
        float: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
