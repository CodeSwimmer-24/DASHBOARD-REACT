/* eslint-disable import/no-import-module-exports */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState: { ... } = {}): any {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(createReducer({}), initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  return store;
}
