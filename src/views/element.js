import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Node from './node'
import Wire from './wire'


class Element extends Presenter {
  render() {
    if (this.props.type == "node") {
      return <Node {...this.props} />
    } else {
      return <Wire {...this.props} />
    }
  }
}

export default Element
