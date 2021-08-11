/* eslint-disable import/no-anonymous-default-export */
import * as tp from "../action-types";

// SELECTED_PRODUCT
// SELECTED_PRODUCT_LOAD_SUCCESS
// CLEAR_SELECTED_PRODUCT

// Reducer
import SelectedProductReducer, { initialState } from "./selected-product";

// Defaults
const defaultState = {
  data: 'value',
  selected: []
};

// Tests
describe("Tests for selected product reducer", () => {
  describe("Basic tests", () => {
    it("Return default state if there is no action given", () => {
      const state = {
        myNewState: true
      };
      const result = SelectedProductReducer(state);
      expect(result).toEqual(state);
    });
  });

  describe("Tests all types with correct return", () => {
    it("CLEAR_SELECTED_PRODUCT", () => {
      const type = tp.CLEAR_SELECTED_PRODUCT;
      const result = SelectedProductReducer({}, { type });
      expect(result).toEqual({"data": null});
    });

    it("SELECTED_PRODUCT", () => {

      const type = tp.SELECTED_PRODUCT;
      const data = {
          payload: []
      };

      const result = SelectedProductReducer(defaultState, { type, data });
      expect(result).toEqual({ data: 'value', selected: undefined });

    });

    it("SELECTED_PRODUCT_LOAD_SUCCESS", () => {

        const type = tp.SELECTED_PRODUCT_LOAD_SUCCESS;
        const data = {
            payload: []
        };
  
        const result = SelectedProductReducer(defaultState, { type, data });
        console.info(result)
        expect(result).toEqual({ data: undefined, selected: [] });
        
    });
  });

});
