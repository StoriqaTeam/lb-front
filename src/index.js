import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './containers/App'
import configureStore, {history} from './store/configureStore'
import {loadState, saveState} from './store/localStorage'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


const persistedState = loadState(),
store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter> 
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>  
      </Provider>,
      document.getElementById('app')
    );
  });
}
