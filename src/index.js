import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

import * as actions from './actions';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

store.dispatch(actions.createOrderArray())
store.dispatch(actions.createTargetSmiley())
store.dispatch(actions.createClickedArray())

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);
