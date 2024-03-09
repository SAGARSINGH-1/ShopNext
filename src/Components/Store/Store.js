import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import authSlice from './authSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    auth:authSlice,
    cart:cartSlice,
    // other reducers...
  },
});

export default store;