const { createStore } = require("redux");
const { default: CartReducer } = require("../reducers/cartReducer");

export const store = createStore(CartReducer);