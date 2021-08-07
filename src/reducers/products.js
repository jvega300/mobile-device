/* eslint-disable import/no-anonymous-default-export */
import * as types from "../action-types"

export default (state = [], action = {}) => {
  
  switch (action.type) {

    case types.LOAD_PRODUCTS:
      return [...state];

    case types.LOAD_PRODUCTS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
