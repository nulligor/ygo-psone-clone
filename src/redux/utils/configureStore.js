import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import ReduxPromise from 'redux-promise';

// import createLogger from "redux-logger";
// const loggerMiddleware = createLogger();

let instance = null;

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function configureStore(initialState) {
  if(instance === null) {
    instance = createStoreWithMiddleware(rootReducer, initialState);
    //instance = createStore(rootReducer, initialState, applyMiddleware(loggerMiddleware));
  }
  return instance
}


