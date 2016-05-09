import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './components/app';
import routes from './routes';
import { Router, createHistory, browserHistory } from 'react-router';

const createStoreWithMiddleWare = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)} >
    <App/>
  </Provider>
  , document.querySelector('.container')
);
