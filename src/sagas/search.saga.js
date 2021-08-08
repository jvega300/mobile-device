// Modules
import { put, select, takeEvery } from "redux-saga/effects";

// Actions
import * as tp from "../action-types";

// Selectors
import { productSelector } from "../store/selectors";

// Generators
export function* searchProducts(data) {
  try {

    const allProducts = yield select(productSelector);
    const filteredSearchArray = allProducts.filter(value => value.brand.toLowerCase().includes(data.payload.toLowerCase()) || value.model.toLowerCase().includes(data.payload.toLowerCase()))
    yield put({ type: tp.SAVE_SEARCH_PRODUCTS, payload: filteredSearchArray });
    yield put({ type: tp.SAVE_SEARCH_TERM, payload: data.payload });

  } catch (error) {
    console.error('error on search saga')
  }
}


// Watchers
export function* watchSearch() {
  yield takeEvery(tp.DO_SEARCH, searchProducts);  
}