    import { createSlice,nanoid } from "@reduxjs/toolkit";

    const loadTodosFromLocalStorage = () => {
        try {
            const serializedState = localStorage.getItem('todos');
            if (serializedState === null) return [];
            return JSON.parse(serializedState);
        } catch (err) {
            return [];
        }
    };
    
    const initialState = {
        todos: loadTodosFromLocalStorage(),
    };
    

    export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(), 
                    text: action.payload // Assumes payload is a string (the text)
                };
                state.todos.push(todo);
            },
            delTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload );
                // Assumes payload is a number or string (the id)
            },
            updateTodo: (state, action) => {
                const { id, text } = action.payload;
                const todoToUpdate = state.todos.find((todo) => todo.id === id);
                if (todoToUpdate) {
                    todoToUpdate.text = text; // Update the text of the todo with the matching id
                }
            }
        }
    });

    export const {addTodo,delTodo,updateTodo} = todoSlice.actions
    export default todoSlice.reducer