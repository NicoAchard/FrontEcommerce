import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { showed: false, products: [] },
  reducers: {
    SET_CART(state, action) {
      return action.payload;
    },
    DELETE_CART() {
      return null;
    },
    ADD_PRODUCT(state, action) {
      return state.push(action.payload.product);
    },

    REMOVE_PRODUCT(state, action) {
      return state
        .filter((product) => {
          if (product.id !== action.payload.productId) {
            return true;
          } else {
            if (product.count !== 1) {
              return true;
            } else {
              return false;
            }
          }
        })
        .map((product) => {
          if (product.id === action.payload.productId && product.count !== 1) {
            return { ...product, count: product.count - 1 };
          }
          return product;
        });
    },

    TOGGLE_SHOWED(state) {
      return {
        ...state,
        showed: !state.showed,
      };
    },
  },
});

const { actions, reducer } = cartSlice;
export const { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, DELETE_CART, TOGGLE_SHOWED } = actions;
export default reducer;