import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "360px", // Smaller screens
        "sm": "480px", // Small screens
        "md": "768px", // Medium screens
        "lg": "1024px", // Large screens
        "xl": "1280px", // Extra large screens
        "2xl": "1440px", // 2X large screens
        "3xl": "1920px", // Custom large screen
      },
      fontFamily: {
        neuePlak: ["var(--font-neue-plak)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
