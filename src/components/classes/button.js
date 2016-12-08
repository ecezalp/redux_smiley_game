import React from 'react'
import { Button } from 'react-bootstrap'

export default function Button (props) {

    function clickHandler () {
       // dispatch filtering action with passed prop       
    }

    return (
        <button onClick={()=> clickHandler()}> {props.name} </button>
    )
}