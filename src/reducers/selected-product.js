/* eslint-disable import/no-anonymous-default-export */
import * as types from "../action-types"

export default (state = [], action = {}) => {
  
  switch (action.type) {

    case types.SELECTED_PRODUCT:
      return {
        ...state,
        selected: action.payload,
      };

    case types.SELECTED_PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case types.CLEAR_SELECTED_PRODUCT:
      return {
        ...state,
        data: null,
      };


    // case types.RESET_JOURNEY:
    //   return [];
    // case types.ADD_TO_BASKET:
    //   isThere = state.find(product => {
    //     return product.familyName === action.product.familyName;
    //   });
    //   if (isThere) state.splice(state.indexOf(isThere), 1);
    //   return [...state, action.product];

    // case types.DELETE_FROM_BASKET:
    //   action.selectedProducts.splice(action.position, 1);

    //   if (action.selectedProducts.length < 1) {
    //     return [];
    //   } else {
    //     return [action.selectedProducts[0]];
    //   }

    // case types.EMPTY_BASKET:
    //   return [];
      
    default:
      return state;
  }
};
