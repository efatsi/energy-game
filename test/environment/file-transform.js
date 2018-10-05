/**
 * We import images as string URLs in Webpack, and inline SVG. This transform
 * reproduces that behavior in Jest.
 */

const { resolve } = require('url')
const { basename, extname } = require('path')

module.exports = {
  process(src, filename, config, transformOptions) {
    switch (extname(filename)) {
      case '.svg':
        return 'module.exports=' + JSON.stringify(src)
      default:
        var location = resolve('/assets/', basename(filename))

        return 'module.exports=' + JSON.stringify(location)
    }
  }
}
