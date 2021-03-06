// Modules
import { call, put, select, takeEvery } from "redux-saga/effects";

// Actions
import * as tp from "../action-types";

// Service
import { postToCart } from "../service";

// Selectors
import { addToCartSelector } from "../store/selectors";

// Generators
export function* addToCart() {
  try {

    const cartValue = yield select(addToCartSelector);
    const response = yield call(postToCart, cartValue);

    yield put({ type: tp.UPDATE_CART, payload: response.data });
    
  } catch (error) {
    console.error('error on cart saga')
  }
}

// Watchers
export function* watchAddToCart() {
  yield takeEvery(tp.ADD_TO_CART, addToCart);
}