/**
 * Configures the jest-puppeteer environment for acceptance testing
 * https://github.com/smooth-code/jest-puppeteer#jest-puppeteerconfigjs
 */

const PORT = process.env.port || 3000

module.exports = {
  launch: {
    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
    headless: process.env.DEBUG
  },
  server: {
    command: `yarn static-server build -p ${PORT}`,
    port: PORT
  }
}
