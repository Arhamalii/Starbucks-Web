/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#FA4A0C",
        primary: "#252B42",
        main: "#fff",
        headingColor: "#333",
      },
      screens: {
        mob: "470px",
      },
    },
  },
  plugins: [],
};
