import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from "./components/displays/welcome"
import SmileyGrid from "./components/displays/smileyGrid"

// // create target smiley
// function createTargetSmiley () {
//   var num = get_binary(Math.floor(Math.random() * 256));
//   let targetSmiley = new Smiley(num)
//   return targetSmiley
// }


// // assign target smiley to global variable
// var targetSmiley = createTargetSmiley()

// // create unduplicated randomized binary array (0..255) for smiley display order
// function createOrderArray () {
//   let orderArray = [...Array(256).keys()].map(key => get_binary(parseInt(key)))
//   shuffle(orderArray)
//   return orderArray
// }

// //transform grid coordinates into array placement
// function numConverter (x, y) {
//   num = (y * 16) + x
//   return num
// }

// function onMount() {
//   var root = document.getElementById("root");

//   orderArray = createOrderArray()

//   for (var x = 0; x < 16; x += 1) {
//     for (var y = 0; y < 16; y += 1) {

//       var tempSmiley = new Smiley(orderArray[numConverter(x,y)])

//       var filename = tempSmiley.image
//       var div = document.createElement("div");
//         div.className = "default";
//       var img = document.createElement("img");
//         img.src = filename;
//       div.appendChild(img);
//       root.appendChild(div);

//       div.addEventListener("click", function(e) {
//         if (this.className.match(/opened/)) {
//           this.className = "default";

//           if (tempSmiley.name == targetSmiley.name) {
//             alert("You Win!");
//           }

//         }
//         else {
//           this.className = "default opened";
//         }
//       });
//     }
//     br = document.createElement("br");
//     root.appendChild(br);
//   }
// }

// onMount();

// <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>





class App extends Component {
  render() {
    return (
      <div className="app">
        <Welcome />
        <SmileyGrid />
      </div> 
    );
  }
}

export default App;
