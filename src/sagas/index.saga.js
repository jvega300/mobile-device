import { all } from "redux-saga/effects";

import { watchLoadProducts } from "./product.saga";


export default function* rootSaga() {
  try {
    yield all([
      watchLoadProducts()
    ]);
  } catch (error) {
    // error management depending on production or dev environments
    console.log("ERROR SAGAS MAIN", error);
  }
}
