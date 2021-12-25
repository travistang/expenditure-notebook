const CracoWorkboxPlugin = require("craco-workbox");

module.exports = {
  plugins: [
    {
      plugin: CracoWorkboxPlugin,
    },
  ],
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
