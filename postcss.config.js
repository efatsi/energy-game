/**
 * All postcss configuration should live within this file. It is
 * pulled in by the postcss-loader when Webpack starts up.
 */

module.exports = {
  plugins: {
    // https://github.com/postcss/postcss-import#options
    'postcss-import': {},
    // http://cssnext.io/usage/
    'postcss-cssnext': {
      features: {
        nesting: true,
        customProperties: true
      }
    }
  }
}
