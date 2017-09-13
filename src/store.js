import { createStore } from 'redux';
import reducer from './ducks/counter';

let store = createStore(reducer);

export default store;



// import { createStore, applyMiddleware } from 'redux'; //Notice redux, not react-redux
// import reducer from './ducks/counter';
// import promiseMiddleware from 'redux-promise-middleware';

// let createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware()
// )(createStore);

// let store = createStoreWithMiddleware(reducer);