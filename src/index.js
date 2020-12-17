import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons';

import axios from 'axios';

// Redux setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Redux thunk import
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
