/**
 * Jest configuration
 * https://facebook.github.io/jest/docs/en/configuration.html#testurl-string
 */

module.exports = {
  testURL: 'http://localhost:3000',
  setupFiles: ['raf/polyfill'],
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './test/setup',
  collectCoverageFrom: ['src/**/*.js?(x)', 'lib/**/*.js?(x)'],
  moduleDirectories: ['.', './src', './node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'css'],
  moduleNameMapper: {
    '^config$': '<rootDir>/config/test.js',
    'test-helpers': '<rootDir>/test/helpers.js'
  },
  testMatch: ['**/test/**/*.test.js?(x)'],
  // This is sort of like loaders in Webpack. When a module is imported, how
  // should Jest transform the contents? This is usful for "shimming" webpack
  // loaders.
  transform: {
    // Standard javascript babel transpilation
    '^.+\\.jsx?$': 'babel-jest',
    // Shim the file/url webpack loader
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './test/environment/file-transform.js'
  },
  preset: 'jest-puppeteer'
}
