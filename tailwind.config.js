module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
      "background-secondary":
        "rgb(var(--color-background-secondary) / <alpha-value>)",
      font: "rgb(var(--color-text) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
