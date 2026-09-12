/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#20201d",
        moss: "#53624d",
        clay: "#a8694b",
        linen: "#ffffff",
        pearl: "#ffffff",
        border: "#ded8cc"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(32, 32, 29, 0.08)"
      }
    }
  },
  plugins: []
};
