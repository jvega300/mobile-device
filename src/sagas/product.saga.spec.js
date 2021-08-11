import { takeEvery, select, call, put } from "redux-saga/effects";
import {
  watchLoadProducts,
  watchSelectProductDetail,
  getAllProducts,
  getSelectProductDetail
} from "./product.saga";

import * as tp from "../action-types";

import { getProductList, getSelectedProduct } from "../service";

import { 
  
 } from "../store/selectors";


describe("Product Suite, watchLoadProducts", () => {
  
  const data = {
    data:"data"
  };

  it("Should call watchLoadProducts generator", () => {
    const generator = watchLoadProducts();
    const next = generator.next().value;
    expect(next).toEqual(takeEvery(tp.LOAD_PRODUCTS, getAllProducts));
  });

  it("Should run secuence", () => {
    const action = { type: tp.LOAD_PRODUCTS };
    const generator = getAllProducts(action);
    
    expect(generator.next().value).toEqual(call(getProductList));
    expect(generator.next({data}).value).toEqual(put({ type: tp.LOAD_PRODUCTS_SUCCESS, payload: data }))
    expect(generator.next({data}).value).toEqual(put({ type: tp.SAVE_SEARCH_PRODUCTS, payload: data}))
    expect(generator.next({data}).value).toEqual(put({ type: tp.SAVE_SEARCH_TERM, payload: null}))
    
  });


});


describe("Product Suite, watchSelectProductDetail", () => {
  
  const data = {
    data:"data"
  };

  it("Should call watchSelectProductDetail generator", () => {
    const generator = watchSelectProductDetail();
    const next = generator.next().value;
    expect(next).toEqual(takeEvery(tp.SELECTED_PRODUCT, getSelectProductDetail));
  });

  it("Should run secuence", () => {
    const action = { type: tp.SELECTED_PRODUCT, payload: data };
    const generator = getSelectProductDetail(action);
    expect(generator.next({data}).value).toEqual(call(getSelectedProduct, data));
    expect(generator.next({data}).value).toEqual(put({ type: tp.SELECTED_PRODUCT_LOAD_SUCCESS, payload: data }))

    
  });


});