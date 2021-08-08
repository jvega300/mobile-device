export const productSelector = state => state.products;
export const searchSelector = state => state.searchProduct.data;
export const searchTermSelector = state => state.searchProduct.term;
export const selectedProduct = state => state.selectedProduct.data;
export const addToCartSelector = state => state.cart.data;
export const getCartCountSelector = state => state.cart.cartCount;