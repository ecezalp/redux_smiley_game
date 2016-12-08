import { getBinary, shuffle } from '../helpers'

export function createTargetSmiley() {
    let num = getBinary(Math.floor(Math.random() * 256));
    const targetSmiley = new Smiley(num)
    return {
        type: 'CREATE_TARGET_SMILEY',
        payload: targetSmiley
    }
}

export function createOrderArray () {
  let orderArray = [...Array(256).keys()].map(key => getBinary(parseInt(key)))
  shuffle(orderArray)
  return {
      type: 'CREATE_ORDER_ARRAY',
      payload: orderArray
  }
}

//  // dispatch filtering action with passed prop    for button.js
// dispatch action current smileyID becomes "this"   for smiley. js
// set target smiley across app    from targetsmiley.js