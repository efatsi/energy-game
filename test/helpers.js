/**
 * This module makes it easy to jump to any page of the application
 * with a real browser. If you need to configure startup behavior for
 * every single acceptance test, this is the place to do it.
 */

import { format, parse, resolve } from 'url'

const URL_PARAMS = parse(process.env.PUBLIC_PATH || '')

const BASE_URL = format({
  ...URL_PARAMS,
  protocol: URL_PARAMS.protocol || 'http',
  hostname: URL_PARAMS.hostname || 'localhost',
  pathname: URL_PARAMS.pathname || '/',
  port: URL_PARAMS.port || process.env.PORT || 3000
})

export async function visit(path, config) {
  await page.goto(resolve(BASE_URL, path))

  return page
}

// Microcosm Presenter Action Helper
// https://github.com/vigetlabs/microcosm/blob/master/docs/testing/presenters.md
export function mockSend(send = jest.fn()) {
  send.context = { send }

  send.childContextTypes = {
    send: () => {}
  }

  return send
}
