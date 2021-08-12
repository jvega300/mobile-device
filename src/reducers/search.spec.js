/* eslint-disable import/no-anonymous-default-export */
import * as tp from "../action-types";


// Reducer
import SearchReducer from "./search";

// Defaults
const defaultState = {
  cartCount: 0
};

// Tests
describe("Tests for search reducer", () => {
  describe("Basic tests", () => {
    it("Return default state if there is no action given", () => {
      const state = {
        data: true
      };
      const result = SearchReducer(state);
      expect(result).toEqual(state);
    });
  });

  describe("Tests all types with correct return", () => {
    
      it("SAVE_SEARCH_PRODUCTS", () => {

        const type = tp.SAVE_SEARCH_PRODUCTS;
        const data = {
            payload: []
        };
  
        const result = SearchReducer(defaultState, { type, data });
        expect(result).toEqual({ cartCount: 0, data: undefined });
        
    });

    it("SAVE_SEARCH_TERM", () => {

      const type = tp.SAVE_SEARCH_TERM;
      const term = {
          payload: []
      };

      const result = SearchReducer(defaultState, { type, term });
      expect(result).toEqual({ cartCount: 0, term: undefined });
      
    });

  });
});
