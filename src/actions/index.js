import { getBinary, shuffle, buttonHelper } from '../helpers'
import Smiley from '../components/classes/smiley.js'


export function createTargetSmiley() { 
    const targetSmileyName = getBinary(Math.floor(Math.random() * 256));
    return {
        type: 'CREATE_TARGET_SMILEY',
        payload: targetSmileyName
    };
}

export function createOrderArray() {
  let orderArray = [...Array(256).keys()].map(key => getBinary(parseInt(key)));
  shuffle(orderArray);
  return {
      type: 'CREATE_ORDER_ARRAY',
      payload: orderArray
  };
}

export function createClickedArray(name) {
    return {
        type: 'CREATE_CLICKED_ARRAY',
        payload: []
    };
}

export function clickHandler(name) {
    return {
        type: 'ADD_SMILEY_TO_CLICKED_ARRAY',
        payload: name
    };
}

export function buttonFilter(index, order, target) {
    const toBeAdded = order.filter(item => item[index] !== target[index]);
     return {
        type: 'ADD_FILTERED_TO_CLICKED_ARRAY',
        payload: toBeAdded
    };
}

export function disableButtons(){
    return {
        type: 'DISABLE_BUTTONS',
        payload: true
    }
}

//  // dispatch filtering action with passed prop    for button.js
// dispatch action current smileyID becomes "this"   for smiley. js
// set target smiley across app    from targetsmiley.js