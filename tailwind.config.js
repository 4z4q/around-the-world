/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Sans Arabic", "sans-serif"],
      },
    },
    extend: {},
  },
  plugins: [],
};
