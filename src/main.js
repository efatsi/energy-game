import React from 'react'
import DOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/application'
import Repo from './repo'

const repo = new Repo()
const el = document.getElementById('root')

function render() {
  return DOM.render(
    <AppContainer>
      <App repo={repo} />
    </AppContainer>,
    el
  )
}

render()

if (module.hot) {
  module.hot.accept(render)
}
