import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../Services/api'; 

const initialState = {
    loading: false,
    products: [],
    error: ""
};

const fetchProducts = createAsyncThunk("products/fetchProducts",async()=> {
   const result = await api.get("/products");
   console.log('API response:', result);
   return result;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
            state.error = "";

        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
});

export default productsSlice.reducer;
export {fetchProducts};