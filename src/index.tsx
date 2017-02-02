import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './configureStore'
import createRoutes from './createRoutes'

let reduxState = {}
if (window.__REDUX_STATE__) {
  reduxState = JSON.parse(window.__REDUX_STATE__);
}

const store = configureStore(reduxState)

ReactDOM.render((
  <Provider store={store}>
    {createRoutes(browserHistory)}
  </Provider>
), document.getElementById('root'))
