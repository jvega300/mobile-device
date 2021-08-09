// File to test
import rootSaga from "./index.saga";

// Sagas
import { all } from "redux-saga/effects";


import { watchLoadProducts, watchSelectProductDetail } from "./product.saga";
import { watchSearch } from "./search.saga";
import { watchAddToCart } from "./cart.saga";

describe("Global watcher", () => {
  it("Watches", () => {
    const generator = rootSaga();
    const next = generator.next().value;
    expect(next).toEqual(
      all([
        watchLoadProducts(),
        watchSearch(),
        watchSelectProductDetail(),
        watchAddToCart()
      ])
    );
  });
});
