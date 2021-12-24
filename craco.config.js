// const CracoWorkboxPlugin = require("craco-workbox");

module.exports = {
  // { plugin: CracoWorkboxPlugin },
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
