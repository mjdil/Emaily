import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware};
import App from './components/App';
import reducers from './reducers';
const store =createStore( reducers, {}, applyMiddleware());
import reduxthunk from 'redux-thunk';

ReactDOM.render(
  <Provider store ={store}>App /</Provider>,
  document.querySelector('#root'));
