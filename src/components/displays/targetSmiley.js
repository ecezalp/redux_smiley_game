import React from 'react'
import Smiley from '../classes/smiley'

export default function TargetSmiley () {

    // function createTargetSmiley () {
    //     var num = get_binary(Math.floor(Math.random() * 256));
    //     let targetSmiley = new Smiley(num)
    //     return targetSmiley
    // }

    // function assignTargetSmiley () {
    //     target = createTargetSmiley()
    //     // dispatch action to assign target smiley globally
    // }

    function test () {
        let testSmiley = Smiley("00000000")
        return testSmiley
    }

    return (
        <div className="target">
           {test()}
        </div>
    )
}