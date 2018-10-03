import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import manageGame from './reducers/manage_game'
// import manageUsers from './reducers/manage_users'
import thunk from 'redux-thunk';
import rootReducer from './reducers/combine_reducers'

const store = createStore(manageGame, undefined, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
