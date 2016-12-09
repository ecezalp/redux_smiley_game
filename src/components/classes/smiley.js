import React from 'react'
import classNameChanger from '../../helpers'

class Smiley extends React.Component {
  constructor (props) {
    super(props)
    debugger
    this.name = props.stringId
    this.image = "../images/" + props.stringId + ".png"
    this.status = "default"
    this.clickHander = this.clickHander.bind(this)
  }

  clickHandler () {
      // dispatch action current smileyID becomes this
      classNameChanger()
  }

  render () {
      return (
          <div className={this.status} onClick={()=>this.clickHandler}>
            <img src={this.image} />
          </div>
      )
  }
}

