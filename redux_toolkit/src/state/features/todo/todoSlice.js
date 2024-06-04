import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

// function sayHello(){
//     console.log("Hello World");
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: sayHello,
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            state.todos.filter((todo)=>todo.id===action.id)[0].text = action.text
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer