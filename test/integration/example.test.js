/**
 * An integration test mounts all or part of the application into an
 * in-memory DOM (using JSDOM). This allows for higher level testing
 * of features without paying the penalty of spinning up a browser.
 */

import React from 'react'
import App from 'src/views/application'
import Repo from 'src/repo'
import { mount } from 'enzyme'

describe('Example Integration Test', function() {
  beforeEach(() => {
    this.wrapper = mount(<App repo={new Repo()} />)
  })

  /**
   * Use async/await when writing acceptance tests to avoid
   * needing to nest callbacks. This ensures readibility.
   */
  it('works', () => {
    let greeting = this.wrapper.text()

    expect(greeting).toContain('Hello, world!')
  })
})
