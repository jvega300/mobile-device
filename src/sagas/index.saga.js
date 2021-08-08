import { all } from "redux-saga/effects";

import { watchLoadProducts, watchSelectProductDetail } from "./product.saga";
import { watchSearch } from "./search.saga";
import { watchAddToCart } from "./cart.saga";


export default function* rootSaga() {
  try {
    yield all([
      watchLoadProducts(),
      watchSearch(),
      watchSelectProductDetail(),
      watchAddToCart()
    ]);
  } catch (error) {
    // error management depending on production or dev environments
    console.log("ERROR SAGAS MAIN", error);
  }
}
