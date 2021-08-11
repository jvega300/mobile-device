/* eslint-disable import/no-anonymous-default-export */
import * as tp from "../action-types";

// ADD_TO_CART
// UPDATE_CART
// EMPYT_CART

// Reducer
import CartReducer, { initialState } from "./cart";

// Defaults
const defaultState = {
  cartCount: 0
};

// Tests
describe("Tests for cart reducer", () => {
  describe("Basic tests", () => {
    it("Return default state if there is no action given", () => {
      const state = {
        myNewState: true
      };
      const result = CartReducer(state);
      expect(result).toEqual(state);
    });
  });

  describe("Tests all types with correct return", () => {
    it("EMPYT_CART", () => {
      const type = tp.EMPYT_CART;
      const result = CartReducer({}, { type });
      expect(result).toEqual({"data": []});
    });

    it("ADD_TO_CART", () => {

      const type = tp.ADD_TO_CART;
      const data = {
        data: true
      };
      const payload = data;
      const result = CartReducer(defaultState, { type, payload });
      const expectedResult = {
        ...defaultState,
        data
      };
      expect(result).toEqual(expectedResult);
    });

    it("UPDATE_CART", () => {

      const type = tp.UPDATE_CART;
     
      const payload = {
        count: 9
      };
      const result = CartReducer(defaultState, { type, payload });
      const expectedResult = {
        ...defaultState,
        cartCount: 9
      };
      expect(result).toEqual(expectedResult);
    });

    
  
  });

});
