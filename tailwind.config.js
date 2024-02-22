/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      main: '#925CB4',
      // ...
    }
  },
  plugins: [require("daisyui")],
}

