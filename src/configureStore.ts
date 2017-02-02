import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const configureStore = (initialState: any) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
