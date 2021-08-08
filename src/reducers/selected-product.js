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
      
    default:
      return state;
  }
};
