/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#151512",
        moss: "#595950",
        clay: "#3079c8",
        linen: "#f8f8f6",
        pearl: "#ffffff",
        border: "#e4e4df"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(21, 21, 18, 0.08)"
      }
    }
  },
  plugins: []
};
