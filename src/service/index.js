// Constants
import {
    API_PRODUCT,
    API_ADD_TO_CART
} from "../constants/api";
  
// Middleware
import { request } from "./methods";
  
// Functions
export const getProductList = () => {
    return request({
        url: API_PRODUCT,
        method: "GET"
    });
};

export const getSelectedProduct = (id) => {
    return request({
        url: `${API_PRODUCT}/${id}`,
        method: "GET"
    });
};

export const postToCart = ( data ) => {
    return request({
        url: API_ADD_TO_CART,
        method: "POST",
        data: {
            ...data
        }
    });
};