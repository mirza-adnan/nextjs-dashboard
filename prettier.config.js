const styleguide = require('@vercel/style-guide/prettier');
styleguide.singleQuote = false;

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
