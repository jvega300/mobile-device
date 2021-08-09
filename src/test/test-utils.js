// Modules
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { render, configure } from "@testing-library/react";
import { Router } from "react-router";
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter
} from "connected-react-router";

import React from "react";

// Reducer
import reducers from "../reducers";

// Sagas
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas/index.saga";


const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });

configure({ testIdAttribute: "data-test-id" });
const sagaMiddleware = createSagaMiddleware();

export const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
};

export const renderWithRouteAndRedux = (ui, initialState = {}, urls = "/") => {
  const history = createMemoryHistory({ initialEntries: [urls] });

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(...[routerMiddleware(history), sagaMiddleware]))
  );
  sagaMiddleware.run(sagas);
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>
    ),
    store,
    history
  };
};

export * from "@testing-library/react";