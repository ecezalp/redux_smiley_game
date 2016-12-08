import React from 'react'
import Smiley from '../components/classes/smiley'

export default function targetSmiley () {

    function createTargetSmiley () {
        var num = get_binary(Math.floor(Math.random() * 256));
        let targetSmiley = new Smiley(num)
        return targetSmiley
    }

    function assignTargetSmiley () {
        target = createTargetSmiley()
        // dispatch action to assign target smiley globally
    }

    return (
        <div className="target">
            // target smiley from app state (img)
        </div>
    )
}