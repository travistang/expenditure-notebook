const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: colors.green,
      red: colors.red,
      primary: {
        50: "#3290da",
        100: "#2886d0",
        200: "#1e7cc6",
        300: "#1472bc",
        400: "#0a68b2",
        500: "#005ea8",
        600: "#00549e",
        700: "#004a94",
        800: "#00408a",
        900: "#003680",
      },
      secondary: colors.orange,
      color: colors.coolGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
