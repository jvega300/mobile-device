/* eslint-disable import/no-anonymous-default-export */
import * as types from "../action-types"

export default (state = [], action = {}) => {

  switch (action.type) {
    
    case types.SAVE_SEARCH_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };

    case types.SAVE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };
     
      
    default:
      return state;
  }
};
