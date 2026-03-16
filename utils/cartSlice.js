import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],

    },
    reducers:{
        addItems:(state, action)=>{
            state.items.push(action.payload);


        },
        removeItems:(state)=>{
            state.items.pop();

        },
        clearcart:(state)=>{
            state.items.length=0;
        },
    },
});
export const {addItems, removeItems, clearcart} = cartSlice.actions;
export default cartSlice.reducer;