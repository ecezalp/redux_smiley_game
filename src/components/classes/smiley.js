import React from 'react';

export default function Smiley(props) {
  var name = props
  var image = "./images/" + name + ".png"

  return (
    <div className={`${name} grid-element`}>
        <img src={require(image)} />
    </div>
  )

}

