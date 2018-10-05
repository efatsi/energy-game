import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import { environment } from 'config'

class Application extends Presenter {
  render() {
    return (
      <main>
        <h1>Hello, world!</h1>
        <p>Application is running in {environment} mode.</p>
      </main>
    )
  }
}

export default Application
