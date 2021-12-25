const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: colors.green,
      red: colors.red,
      primary: {
        50: colors.gray[50],
        100: colors.gray[100],
        200: colors.gray[200],
        300: colors.gray[300],
        400: colors.gray[400],
        500: colors.gray[500],
        600: colors.gray[600],
        700: colors.gray[700],
        800: colors.gray[800],
        900: colors.gray[900],
      },
      secondary: colors.orange,
      color: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
