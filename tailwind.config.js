/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { local: '"Kanit"' },
      colors: {
        bgprimary: "#e7e7f0",
        bghero: "#222e35",
        bgdarkgreen: "#0C1301",
        bgdark: "#0a1014",
        bgchat: "#111b21",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
