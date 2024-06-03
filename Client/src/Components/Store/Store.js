import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import addressSlice from './addressSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    address: addressSlice
    // other reducers...
  },
});

export default store;