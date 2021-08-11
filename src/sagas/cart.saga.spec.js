import { takeEvery, select, call, put } from "redux-saga/effects";
import {
    watchAddToCart,
    addToCart
} from "./cart.saga";

import * as tp from "../action-types";

import { postToCart } from "../service";

import { addToCartSelector } from "../store/selectors";

const data = {
 
        colorCode: 1000,
        id: "xyPoqGJxYR4Nn3yVGQcfI",
        storageCode: 2001
     
  };

describe("Cart Suite", () => {


  it("Should call watcher generator", () => {
    const generator = watchAddToCart();
    const next = generator.next().value;
    expect(next).toEqual(takeEvery(tp.ADD_TO_CART, addToCart));
  });

  it("Should run secuence", () => {
    const action = { type: tp.ADD_TO_CART };
    const generator = addToCart(action);
    const cartValue = {
        count: 1
    };

    expect(generator.next().value).toEqual(select(addToCartSelector));
    expect(generator.next(data).value).toEqual(call(postToCart, data));
    expect(generator.next(cartValue).value).toEqual(put(
      { 
        type: tp.UPDATE_CART, 
      })
    )
  });


  it("Should return error", () => {
    const error = 'error on cart saga';
    const gen = addToCart();
    gen.next();
    expect(
      gen.throw(error).value).
      toEqual(
        console.error(error)
      );
    });


});
