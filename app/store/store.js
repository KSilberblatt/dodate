import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
// import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(preloadedState = {}) {
  return (
      createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    )
  );
}

// export default function configureStore() {
//   let store = createStore(app, applyMiddleware(promiseMiddleware()))
//   return store
// }
