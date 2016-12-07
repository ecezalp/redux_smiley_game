import { combineReducers } from 'redux';
import orderReducer from './order_reducer'
import smileysReducer from './smileys_reducer'

 const rootReducer =  combineReducers({
  smileys: smileysReducer,
  order: orderReducer
})

export default rootReducer;
