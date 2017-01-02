import React from 'react'

import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ButtonGroup} from 'react-bootstrap'

import FilterButton from '../classes/button'

class ButtonList extends React.Component {
    constructor(props){
        super(props)
        this.filterFunction = this.filterFunction.bind(this)
    }

    filterFunction(index) {
        this.props.actions.buttonFilter(index, this.props.order, this.props.target)
        this.props.actions.disableButtons()
    }

    buttonMapper(){
        const buttonHelper = ["Color", "Eyebrows", "Glasses", "Moustache", "Beard", "Hat", "Tongue", "Piercing"]
        return buttonHelper.map((item, i) =>  <FilterButton filterFunc={this.filterFunction} name={item} index={i} buttonState={this.props.button} />)
    }

    render() {
        return (
            <div className="buttons">
                <ButtonGroup>
                    {this.buttonMapper()}
                </ButtonGroup>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    if (state.order && state.target) {
        return {
            order: state.order,
            target: state.target, 
            button: state.button
        }
    }
    else {
        return { order: [], target: [] }
    }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(ButtonList)