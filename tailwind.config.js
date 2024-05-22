/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { local: '"Kanit"' },
      colors: { bgprimary: "#e7e7f0" },
    },
  },
  plugins: [],
};
