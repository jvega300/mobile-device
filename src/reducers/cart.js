/* eslint-disable import/no-anonymous-default-export */
import * as types from "../action-types"

export default (state = [], action = {}) => {

  switch (action.type) {
    
    case types.ADD_TO_CART:
      return {
        ...state,
        data: action.payload,
      };
    
    case types.UPDATE_CART:
      return {
        ...state,
        cartCount: action.payload.count,
      };

      case types.EMPYT_CART:
      return {
        data: []
      };

    default:
      return state;
  }
};
