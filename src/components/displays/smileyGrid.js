import React from 'react'

import * as actions from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Smiley from '../classes/smiley'

class SmileyGrid extends React.Component {
    
    constructor (props) {
        super(props)
        this.allSmileys = this.allSmileys.bind(this)
    }
    
    allSmileys () {  
        return (
            this.props.order.map(index => <Smiley stringId={index}/>)
        )
    }   

    render () {
        return (
            <div>
                {this.allSmileys()}
            </div>
        )
    }
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