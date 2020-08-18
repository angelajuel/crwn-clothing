/* store.js
    Add middleware to our store so that whenever actions get fired or dispatched, we can catch
    them and display them. The middleware is between the action and reducer. It has functions that receive
    actions in and do something with them and pass them out into the root reducer.
*/

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set up middleware
const middlewares = [logger];

// spread in all the methods in the middelwares array into the function call as individual arguments in applyMiddleware
const store= createStore(rootReducer, applyMiddleware(...middlewares));

export default store;