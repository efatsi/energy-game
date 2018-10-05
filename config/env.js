/**
 * This module sets up environment variables. Keep secret information
 * that does not belong in source control in environment variables.
 * Reference these values in config/config.js or other environments
 * using process.env:
 *
 * ```
 * export const value = process.env.VALUE
 * ```
 *
 * See https://12factor.net/config
 */

const dotenv = require('dotenv')
const path = require('path')

let noEnvConfig = dotenv.config({
  path: path.resolve(__dirname, '..', '.env')
}).error

if (noEnvConfig) {
  console.warn('')
  console.warn(
    'No .env file was found. Please copy the environment configuration file using:'
  )
  console.warn('')
  console.warn('    cp .env.example .env')
  console.warn('')
  console.warn("We'll use .env.example for now")

  dotenv.config({
    path: path.resolve(__dirname, '..', '.env.example')
  })
}
