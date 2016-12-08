import React from 'react'
import AlertContainer from 'react-alert'

export default class Alert extends React.Component {
    constructor (props) {
        super(props)
        this.alertOptions ={
            offset: 14,
            position: 'top left',
            theme: 'light',
            time: 5000,
            transition: 'scale'
        }
    }

    message () {
        msg.show(this.props.message)
    }

     render () {
         return (
             {message()}
         )
     }   
}