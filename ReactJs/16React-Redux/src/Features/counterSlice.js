import { createSlice } from "@reduxjs/toolkit";

const initialState =0;
export const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
        customIncrement:(state,action)=>state + action.payload,
        customDecrement:(state,action)=>state - action.payload
    }
})

export const {increment,decrement,customDecrement,customIncrement} = counterSlice.actions
export default counterSlice.reducer
