/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ebony: "#0f0c0a",
        cocoa: "#2a1d18",
        gold: "#facc15",
        champagne: "#fef3c7",
        blush: "#f472b6",
        coral: "#fb923c",
        sand: "#f4e1c1"
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
