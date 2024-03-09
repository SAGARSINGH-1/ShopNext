import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            state.status = true;

            const existingProduct = state.products.find(product => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }
        },
        removeProducts: (state, action) => {
            state.status = true;
            const existingProduct = state.products.find(product => product.id === action.payload.id);

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.products = state.products.filter(product => product.id !== action.payload.id);
                }
            }
        },
        deleteProduct: (state, action) => {
            state.status = false;
            state.products = state.products.filter((item) => item.id !== action.payload.id);
        }
    },
});

export const { storeProducts, removeProducts, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
