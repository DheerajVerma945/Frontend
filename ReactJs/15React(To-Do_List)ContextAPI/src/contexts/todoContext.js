import React,{createContext, useContext} from 'react'

export const todoContext = createContext({
    todo:[
        {
            id:1,
            todoTitle:"First Todo",
            completed : false
        }
    ],
    addTodo:(todo)=>{},
    delTodo:(id)=>{},
    updateTodo:(todo,id)=>{},
    isCompleted:(id)=>{}
})
export const useTodo = ()=>{
    return useContext(todoContext);
}
export const TodoProvider = todoContext.Provider
