import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "rgb(var(--accent-primary-rgb))",
          secondary: "rgb(var(--accent-secondary-rgb))",
          tertiary: "rgb(var(--accent-tertiary-rgb))",
          contrast: "rgb(var(--accent-contrast-rgb))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,var(--glass-shadow-strength))',
      },
    },
  },
  plugins: [],
} satisfies Config;
