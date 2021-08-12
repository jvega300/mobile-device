import { takeEvery, select} from "redux-saga/effects";
import {
    watchSearch,
    searchProducts
} from "./search.saga";

import * as tp from "../action-types";

import { 
    productSelector
 } from "../store/selectors";


describe("Search Suite", () => {
  
  const data = {
    data:"data",
    brand: "brand"
  };

  it("Should call watchSearch generator", () => {
    const generator = watchSearch();
    const next = generator.next().value;
    expect(next).toEqual(takeEvery(tp.DO_SEARCH, searchProducts));
  });

  it("Should run select", () => {
    const action = { type: tp.DO_SEARCH };
    const generator = searchProducts(action);

    expect(generator.next({data}).value).toEqual(select(productSelector));
    
  });


});