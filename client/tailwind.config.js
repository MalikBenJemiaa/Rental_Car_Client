/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
    display: ["responsive", "focus", "dropdown"]
  },
  plugins: [require("tailwindcss-dropdown")]

}