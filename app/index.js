import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main"
require("./style.css");
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Main />
  </Provider>
  , document.getElementById('app')
);
