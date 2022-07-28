/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: {
          light: "#9DF3C4",
          normal: "#62D2A2",
          dark: "#1FAB89"
        },
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
      "display": ["Inter", "sans-serif"],
      "body": ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}
