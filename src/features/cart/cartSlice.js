import {createSlice} from '@reduxjs/toolkit';
import { sumPrice, sumQuantity } from '../../Functions/Helper';

const initialState = {
    selectedItems: [],
    counter: 0,
    total: 0,
    checkout: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => {
            if(!state.selectedItems.find((item)=> item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity:1});
                state.total = sumPrice(state.selectedItems);
                state.counter = sumQuantity(state.selectedItems);
                state.checkout = false;
            }
        },
        removeItem: (state, action) => {
            const newItems = state.selectedItems.filter((item)=> item.id !== action.payload.id);
            state.selectedItems = newItems;
            state.total = sumPrice(state.selectedItems);
            state.counter = sumQuantity(state.selectedItems);
        },
        increase: (state, action) => {
            const indexIncrement = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[indexIncrement].quantity += 1;
            state.total = sumPrice(state.selectedItems);
            state.counter = sumQuantity(state.selectedItems);
        },
        decrease: (state, action) => {
            const indexDecrement = state.selectedItems.findIndex((item)=> item.id === action.payload.id);
            state.selectedItems[indexDecrement].quantity -= 1;
            state.total = sumPrice(state.selectedItems);
            state.counter = sumQuantity(state.selectedItems);
        },
        checkout: state => {
            state.selectedItems = []
            state.counter = 0
            state.total = 0
            state.checkout = true
        }
    }
});

export default cartSlice.reducer;
export const {addItem, removeItem, increase, decrease, checkout} = cartSlice.actions;
