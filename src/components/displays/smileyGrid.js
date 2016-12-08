import React from 'react'

import * as actions from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Smiley from '../classes/smiley'

function SmileyGrid (props) {
    
    function allSmileys (props) {
        debugger
        props.order.map(index => new Smiley (index))
    }   

    return (
        <div>
            {allSmileys()}
        </div>
    )
}

function mapStateToProps(state, ownProps){
  if (state.order) {
         
    let oArray = state.order
    return {order: oArray}
  }
  else {
    return {order: []}
  }
}


function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(SmileyGrid)