import React from 'react'

import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Smiley from '../classes/smiley'
import { numConverter, classNameChanger } from '../../helpers'

class SmileyGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            order: this.props.order,
            target: this.props.target,
            clickedArray: this.props.clickedArray
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    smileyCells() {
        var cells = []
        this.props.order.forEach(element => cells.push(
            <div className={"cell"}>
                <div onClick={() => this.clickHandler(element)} className={this.shadeDeterminer(element)}>
                    {new Smiley(element)}
                </div>
            </div>
        ))
        return cells
    }

    smileyRows() {
        var cells = this.smileyCells()
        var rows = []
        while (cells.length > 0) {
            rows.push(
                <div className={"row"}>
                    {cells.splice(0, 16)}
                </div>
            )
        }
        return rows
    }

    shadeDeterminer(name){
        // this.props.clickedArray.includes(name) ? 'default opened' : 'default'
       if (this.props.clickedArray.includes(name)){
           return 'default opened'
       }
       else {
           return 'default'
       }
    }

    clickHandler(name) {
        this.props.actions.clickHandler(name)
    }

    winTest() {
        if (this.props.clickedArray.includes(this.state.target)){
           return <h1> YOU WIN !!! </h1>
       }
    }

    render() {
        return (
            <div>
                <div className="win">
                    {this.winTest()}
                 </div>
                <div className={"table"}>
                    {this.smileyRows()}
                </div>  
            </div>
        )
    }
};

function mapStateToProps(state, ownProps) {
    if (state.order && state.target && state.clickedArray) {
        return {
            order: state.order,
            target: state.target,
            clickedArray: state.clickedArray
        }
    }
    else {
        return { order: [], target: [], clickedArray: [] }
    }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(SmileyGrid)