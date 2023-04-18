/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        red: colors.red,
        amber: colors.amber,
        slate: colors.slate,
        cyan: colors.cyan,
        green: colors.green,
      }
    },
  },
  plugins: [],
}

