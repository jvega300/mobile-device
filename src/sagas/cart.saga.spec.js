import { takeEvery, select, call, put } from "redux-saga/effects";
import {
    watchAddToCart,
    addToCart
} from "./cart.saga";

import * as tp from "../action-types";

import { postToCart } from "../service";

import { addToCartSelector } from "../store/selectors";

const action = {
    type: "TYPE",
    payload: { 
        colorCode: 1000,
        id: "xyPoqGJxYR4Nn3yVGQcfI",
        storageCode: 2001
     }
  };

describe("Geo blocking  non German users ", () => {


  it("it checks for dispach of location action and handler", () => {
    const generator = watchAddToCart();
    const next = generator.next().value;
    expect(next).toEqual(takeEvery(tp.ADD_TO_CART, addToCart));
  });

  it("Close notification after 3 seconds when is visible", () => {
    const action = { type: tp.ADD_TO_CART };
    const generator = addToCart(action);
    const cartValue = {
        count: 1
    };

    expect(generator.next().value).toEqual(select(addToCartSelector));
    expect(generator.next().value).toEqual(call(postToCart, action.payload));

  });
});
