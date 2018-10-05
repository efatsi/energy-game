import React from 'react'
import NodeView from './node'

class Node {
  constructor(energy, active = false) {
    this.energy = energy
    this.active = active
    this.recipients = []
  }

  setRecipient(node) {
    this.recipients.push(node)
  }

  tick() {
    if (this.energy == 0) {
      this.active = false
    }

    if (this.active) {
      this.energy -= 1

      this.recipients.forEach(recipient => {
        recipient.energy += 1 / this.recipients.length
      })
    }
  }

  toggle() {
    this.active = !this.active
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)

    let node1 = new Node(10, -1)
    let node2 = new Node(0)
    let node3 = new Node(12)

    node1.setRecipient(node2)
    node2.setRecipient(node3)
    node3.setRecipient(node1)

    this.nodes = [node1, node2, node3]
  }

  componentDidMount() {
    setInterval(() => {
      this.nodes.forEach(node => node.tick())
      this.forceUpdate()
    }, 300)
  }

  render() {
    return (
      <main>
        <h1>Energy Prototype</h1>

        {this.renderNodes()}
      </main>
    )
  }

  renderNodes() {
    return this.nodes.map((node, i) => {
      return (
        <NodeView
          key={i}
          id={i}
          active={node.active}
          onClick={() => node.toggle()}
          energy={node.energy}
        />
      )
    })
  }
}

export default Application
