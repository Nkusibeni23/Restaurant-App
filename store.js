import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/CartSlice";
import RestaurantReducer from "./slice/RestaurantSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    restaurant: RestaurantReducer,
  },
});
