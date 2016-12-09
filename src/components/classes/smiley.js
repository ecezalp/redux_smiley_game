import React from 'react';
import classNameChanger from '../../helpers';

export default function Smiley (props) {
  let name = props
  var image = "./images/" + name + ".png"
  
      return (
            <img src={require(image)} />
      )

}

