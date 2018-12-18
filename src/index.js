import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import App from './containers/App';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
