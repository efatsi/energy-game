import React from 'react'
import ElementView from './element'

class Element {
  constructor(type, id, energy) {
    this.type   = type
    this.id     = id
    this.energy = energy

    this.recipient = null
  }

  setRecipient(node) {
    this.recipient = node
  }

  discharge() {
    this.energy -= 1
    this.recipient.energy += 1
  }
}

class Node extends Element {
  constructor(id, energy = 0, active = false) {
    super("node", id, energy)

    this.active = active
  }

  open() {
    return true
  }

  tick() {
    if (this.energy == 0) {
      this.active = false
    }

    if (this.active && this.recipient.open()) {
      this.discharge()
    }
  }

  toggle() {
    this.active = !this.active
  }
}

class Wire extends Element {
  constructor(id, energy = 0) {
    super("wire", id, energy)

    this.charge = 0
    this.chargeLimit = 100
  }

  open() {
    return this.charge == 0
  }

  tick() {
    if (this.energy > 0) {
      this.charge += 1

      if (this.charge >= this.chargeLimit) {
        this.discharge()
        this.charge = 0
      }
    }
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)

    let node1 = new Node(1, 10, false)
    let node2 = new Node(2)
    let node3 = new Node(3)

    let wire1 = new Wire(1, 0, true)
    let wire2 = new Wire(2, 0, true)

    node1.setRecipient(wire1)
    wire1.setRecipient(node2)
    node2.setRecipient(wire2)
    wire2.setRecipient(node3)

    // devmode - circle it all back
    node3.setRecipient(node1)

    this.elements = [node1, wire1, node2, wire2, node3]
  }

  componentDidMount() {
    setInterval(() => {
      this.elements.forEach(element => element.tick())
      this.forceUpdate()
    }, 10)
  }

  render() {
    return (
      <main>
        <h1>Energy Prototype</h1>

        {this.renderElements()}
      </main>
    )
  }

  renderElements() {
    return this.elements.map((element, i) => {
      return (
        <ElementView
          key={i}
          id={element.id}
          type={element.type}
          active={element.active}
          onClick={() => element.toggle()}
          energy={element.energy}
          element={element}
        />
      )
    })
  }
}

export default Application
