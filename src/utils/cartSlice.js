import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{

        addItem:(state,action)=>{
          state.cartItems.push(action.payload);
        },

        removeItem:(state,action)=>{
            state.cartItems.pop();
        },

        clearCart: (state,action)=>{
            state.cartItems = []
        }
    }

});

export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions;