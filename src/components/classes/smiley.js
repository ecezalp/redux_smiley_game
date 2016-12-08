import React from 'react'

class Smiley extends React.Component {
  constructor (stringId) {
    super(stringId)
    this.name = stringId
    this.image = "../images/" + stringId + ".png"
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
            {this.image}
          </div>
      )
  }
}