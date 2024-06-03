// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  products: {}, // Corrected from userData to products
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      state.status = true;
      state.products = action.payload; // Corrected from userData to products
    },
    removeProducts: (state) => {
      state.status = false;
      state.products = null;
    },
  },
});

export const { storeProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;
