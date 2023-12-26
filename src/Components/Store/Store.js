import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    // other reducers...
  },
});

export default store;