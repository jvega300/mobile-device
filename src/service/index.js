// Constants
import {
    API_PRODUCT,
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