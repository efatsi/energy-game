import React from 'react'
import Presenter from 'microcosm/addons/presenter'

class Wire extends Presenter {
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
          <div style={nameStyles}>
            Wire {this.props.id}
          </div>
          <div style={{height: '110px', width: '10px', backgroundColor: '#333', position: 'relative'}}>
            {this.renderElectron()}
          </div>
        </div>
      </div>
    )
  }

  renderElectron() {
    if (this.props.element.charge) {
      let elementStyles = {
        height: '10px',
        width: '10px',
        position: 'absolute',
        top: this.props.element.charge + 'px',
        backgroundColor: '#444'
      }

      return (
        <div style={elementStyles}/>
      )
    } else {
      return
    }
  }
}

export default Wire
