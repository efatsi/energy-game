/**
 * An acceptance test visits the page using a real browser. There
 * is very little it can know about the internals of the application.
 * @jest-environment jest-environment-puppeteer
 */

import { visit } from 'test-helpers'

describe('Example Acceptance Test', function() {
  it('works', async () => {
    await visit('/')
  })
})
