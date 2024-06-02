import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    address: [
        {
            id: "1",
            name: "John Doe",
            address: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            phone: "123-456-7890",
            category: "home",
            isSelected: false,
        },
        {
            id: "2",
            name: "Ani Doe",
            address: "456 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            phone: "123-456-7890",
            category: "work",
            isSelected: false,
        },
        // Duplicated data
        {
            id: "3",
            name: "Ramu Doe",
            address: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            phone: "123-456-7890",
            category: "home",
            isSelected: false,
        },
        {
            id: "4",
            name: "Sagar Doe",
            address: "456 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            phone: "123-456-7890",
            category: "work",
            isSelected: true,
        },
    ],
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {  // <-- Note the correct key here
        addAddress: (state, action) => {
            state.status = true;
            state.address.push(action.payload);
        },
        removeAddress: (state, id) => {
            const productId = id.payload.id;
            state.status = false;
            state.address = state.address.filter((item) => item.id !== productId);
        },
        selectedAddress: (state, id) => {
            state.address.map((item) => {
                const productId = id.payload.id;
                if (item.id == productId) {
                    // console.log(id, item.id);
                    item.isSelected = true;
                } else {
                    item.isSelected = false;
                }
            })

        }
    }
});



export const { addAddress, removeAddress, selectedAddress } = addressSlice.actions;
export default addressSlice.reducer;