/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        League: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
