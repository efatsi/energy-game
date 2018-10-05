'use strict'

const Webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const url = require('url')

// https://12factor.net/config
require('./config/env')

module.exports = function(_env, options) {
  let { mode, host, port } = options

  return {
    devtool: 'source-map',

    entry: {
      main: ['./src/styles/global.css', './src/setup.js', './src/main.js']
    },

    output: {
      path: path.resolve('build'),
      filename: `static/js/[name].[hash:8].js`,
      publicPath: url.parse(process.env.PUBLIC_PATH).href
    },

    plugins: [
      // Generates our main html page, scripts are automatically added
      new HTMLPlugin({
        template: 'public/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),

      // These environment variables must be set, otherwise webpack will error out.
      // We could provide defaults here, but we have a `.env` file for that. Fail
      // early to avoid unexpected behavior.
      new Webpack.EnvironmentPlugin(['NODE_ENV', 'PUBLIC_PATH']),

      // Extract CSS out of the main JavaScript payload. This is
      // disabled in development for hot reloading
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
        chunkFilename: 'static/css/[id].[hash:8].css'
      }),

      // Generates a more ergonomic build log in development
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`Ready on http://${host}:${port} in ${mode}`]
        }
      }),

      // Copy over static assets from the public directory
      new CopyPlugin([{ from: 'public', to: '' }])
    ],

    resolve: {
      alias: {
        config: path.resolve('config', mode),
        microcosm: mode === 'development' ? 'microcosm/strict' : 'microcosm'
      }
    },

    module: {
      // This causes webpack to error if an import is incorrect
      strictExportPresence: true,
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          include: [/src/, /lib/],
          use: [
            {
              loader: 'eslint-loader',
              options: {
                cache: true
              }
            }
          ]
        },
        {
          oneOf: [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                cacheDirectory: true,
                compact: true
              }
            },
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    loaders: 1,
                    minimize: mode !== 'development',
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader'
                }
              ]
            },
            {
              test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
              loader: 'file-loader',
              options: {
                name: 'static/images/[name].[hash:8].[ext]'
              }
            },
            {
              test: /\.(eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[hash:8].[ext]'
              }
            },
            // All other files are served as "media"
            {
              exclude: [/\.js$/, /\.html$/, /\.json$/],
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}
