import React from 'react'
import {connect} from 'react-redux'
import Smiley from '../classes/smiley'

class TargetSmileyDisplayer extends React.Component {
    render () {
      let targetSmiley = new Smiley(this.props.target)
      return (
        <div>
          {targetSmiley}
        </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  if (state.target) { 
    let target = state.target
    return {target: target}
  }
  else {
    return {target: {}}
  }
}

 const componentCreator = connect(mapStateToProps)
 export default componentCreator(TargetSmileyDisplayer)