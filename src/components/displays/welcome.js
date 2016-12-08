import React from 'react'
import Alert from '../classes/alert'

export default function Welcome () {

    const welcomeMessagesArray = ["WELCOME TO OUR GAME", "TRY TO FIND THE TARGET SMILEY FROM THE GRID BY CLICKING", "YOU CAN APPLY A FILTER ONCE AT THE START OF THE GAME"]
 
    function messageIterator () {
        welcomeMessagesArray.map(welcome => <Alert message={welcome}/>)
    }

    return (
        <div className="welcome">
            {messageIterator()}
        </div>
    )
}