// Modules
import { call, put, takeEvery } from "redux-saga/effects";

// Actions
import * as tp from "../action-types";


// Service
import {
  getProductList,
  getSelectedProduct
} from "../service";

// Generators
export function* getAllProducts() {
  try {
    const response = yield call(getProductList)
    yield put({ type: tp.LOAD_PRODUCTS_SUCCESS, payload:response.data });
    yield put({ type: tp.SAVE_SEARCH_PRODUCTS, payload:response.data });
    yield put({ type: tp.SAVE_SEARCH_TERM, payload: null });

    
    
  } catch (error) {
    console.error('error on product saga', error)
  }
}


export function* getSelectProductDetail({payload}) {
  try {

    const response = yield call(getSelectedProduct, payload)
    yield put({ type: tp.SELECTED_PRODUCT_LOAD_SUCCESS, payload:response.data });
    
  } catch (error) {
    console.error('error on product saga', error)
  }
}


// Watchers
export function* watchLoadProducts() {
  yield takeEvery(tp.LOAD_PRODUCTS, getAllProducts);
}

export function* watchSelectProductDetail() {
  yield takeEvery(tp.SELECTED_PRODUCT, getSelectProductDetail);
}

// // Watchers
// export function* watchLoadProducts() {
//   yield takeEvery(tp.LOAD_PRODUCTS, get);
// }