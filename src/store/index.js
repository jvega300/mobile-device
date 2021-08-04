// Modules
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createBrowserHistory } from "history";

import { routerMiddleware, connectRouter } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import storage from "redux-persist/lib/storage";

// Sagas
import sagas from "../sagas/index.saga";
import reducers from "../reducers";

// Setup
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// All reducer
const createRootReducer = reducerHistory =>
  combineReducers({
    router: connectRouter(reducerHistory),
    ...reducers
  });

// Setup redux persist
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet
};
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

const middlewares = [routerMiddleware(history), sagaMiddleware];

// Check when to log store actions
/* istanbul ignore next */
if (
  process.env.NODE_ENV === "development" &&
  !process.env.TESTMODE &&
  !process.env.REACT_APP_STORE_LOGGER_OFF
) {
  middlewares.push(logger);
}

// Allow debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup the store
const configureStore = preloadedState =>
  createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
const store = configureStore();
const persistor = persistStore(store);

// Add sagas
sagaMiddleware.run(sagas);

export { store, history, persistor };
