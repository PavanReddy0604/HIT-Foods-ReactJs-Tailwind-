import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore=configureStore({
    reducer:{
        cartReducer:cartReducer
    }
})

export default appStore;