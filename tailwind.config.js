/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    colors: {
      // primary: '#5c6ac4',
      // secondary: '#ecc94b',
      
      main: '#925CB4',
      // // ...
    }
  },
  theme: {
    extend: {},

  },
}

