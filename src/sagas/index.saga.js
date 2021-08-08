import { all } from "redux-saga/effects";

import { watchLoadProducts } from "./product.saga";
import { watchSearch } from "./search.saga";



export default function* rootSaga() {
  try {
    yield all([
      watchLoadProducts(),
      watchSearch(),

    ]);
  } catch (error) {
    // error management depending on production or dev environments
    console.log("ERROR SAGAS MAIN", error);
  }
}
