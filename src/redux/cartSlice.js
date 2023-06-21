import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { showed: false, products: [] },
  reducers: {
    SET_CART(state, action) {
      return action.payload;
    },
    DELETE_CART(state) {
      return { ...state, products: [] };
    },
    ADD_PRODUCT(state, action) {
      const existingProduct = state.products.find((product) => product.id === action.payload.id);

      if (existingProduct) {
        const updatedProducts = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty:
                product.qty + action.payload.qty > action.payload.stock
                  ? action.payload.stock
                  : product.qty + action.payload.qty,
            };
          } else {
            return product;
          }
        });

        return { ...state, products: updatedProducts };
      } else {
        state.products.push({
          description: action.payload.description,
          id: action.payload.id,
          img: action.payload.img,
          qty: action.payload.qty,
          name: action.payload.name,
          unitPrice: action.payload.unitPrice,
        });
        return state;
      }
    },

    REMOVE_PRODUCT(state, action) {
      return {
        ...state,
        products: state.products
          .filter((product) => {
            if (product.id !== action.payload) {
              return true;
            } else {
              if (product.qty !== 1) {
                return true;
              } else {
                return false;
              }
            }
          })
          .map((product) => {
            if (product.id === action.payload && product.qty !== 1) {
              return { ...product, qty: product.qty - 1 };
            }
            return product;
          }),
      };
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
