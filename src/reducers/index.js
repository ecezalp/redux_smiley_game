import { combineReducers } from 'redux';
import orderReducer from './order_reducer'
import smileysReducer from './smileys_reducer'
import clickedReducer from './clicked_reducer'
import buttonReducer from './button_reducer'

 const rootReducer =  combineReducers({
  target: smileysReducer,
  order: orderReducer,
  clickedArray: clickedReducer,
  button: buttonReducer,
})

export default rootReducer;
