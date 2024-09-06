import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from "../Features/toDOSlice"

export const store = configureStore({
    reducer:todoReducer
})