/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "spring-wood": "#E5E1DD",
      }
    },
  },
  plugins: [],
}
