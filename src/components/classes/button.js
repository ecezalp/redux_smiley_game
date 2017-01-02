import React from 'react'
import { Button } from 'react-bootstrap'

export default function FilterButton ({filterFunc, name, index, buttonState}) {
    return (
        <div className="button">
            <Button bsStyle='info' disabled={buttonState} onClick={() => filterFunc(index)}> {name} </Button>
        </div>
    )
}