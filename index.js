// Begin using ES6
import 'babel-core/polyfill';

// Render the component onto the page

import React from 'react';
// This will connect the Redux with our React
import { Provider } from 'react-redux';
// Bring in the core React App
import App from './containers/App';
// Configure the store
import configureStore from './store/configureStore';

const store = configureStore();
const rootEl = document.querySelector('#root');

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootEl
);

