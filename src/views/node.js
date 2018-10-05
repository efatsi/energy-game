import React from 'react'
import Presenter from 'microcosm/addons/presenter'

class Node extends Presenter {
  render() {
    let nameStyles = {
      marginRight: '10px',
      width: '55px',
      cursor: 'pointer'
    }

    if (this.props.active) {
      nameStyles.backgroundColor = '#333'
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={nameStyles} onClick={this.props.onClick}>
            Node {this.props.id}
          </div>
          {this.renderEnergy()}
        </div>
      </div>
    )
  }

  renderEnergy() {
    const blockStyle = {
      width: '10px',
      height: '10px',
      marginRight: '5px',
      backgroundColor: '#888'
    }
    let blocks = []

    for (var i = 0; i < this.props.energy; i++) {
      blocks.push(<div style={blockStyle} key={i} />)
    }

    return blocks
  }
}

export default Node
