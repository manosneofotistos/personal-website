/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4efe6",
        ink: "#171717",
        muted: "#686157",
        line: "#d8cfc1",
        moss: "#496f5d",
        clay: "#9b634d",
        ivory: "#fbf8f1"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(55, 42, 28, 0.08)"
      }
    }
  },
  plugins: []
};
