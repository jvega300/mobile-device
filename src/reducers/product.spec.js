/* eslint-disable import/no-anonymous-default-export */
import * as tp from "../action-types";

// ADD_TO_CART
// UPDATE_CART
// EMPYT_CART

// Reducer
import ProductsReducer, { state, action } from "./products";

// Defaults
const defaultState = {
  value: 0
};



// Tests
describe("Tests for Products reducer", () => {
  describe("Basic tests", () => {
    it("Return default state if there is no action given", () => {
      const state = {
        myNewState: true
      };
      const result = ProductsReducer(state);
      expect(result).toEqual(state);
    });
  });

  describe("Tests all types with correct return", () => {
    it("EMPYT_CART", () => {
        const state = {
            myNewState: true
        };
        const result = ProductsReducer(state);
        expect(result).toEqual(state);
    });

    it("LOAD_PRODUCTS_SUCCESS", () => {

        const type = tp.LOAD_PRODUCTS_SUCCESS;

        const action = {
            payload: [{
                brand: "Acer",
                id: "ZmGrkLRPXOTpxsU4jjAcv",
                imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
                model: "Iconia Talk S",
                price: "170"
            }],
            type
        } 

      const result = ProductsReducer(action);
      const expectedResult = {
        ...action
      };
      expect(result).toEqual(expectedResult);
    });
    
  
  });

});
