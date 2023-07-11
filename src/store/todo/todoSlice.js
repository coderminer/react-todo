import { createSlice } from '@reduxjs/toolkit'
import { FILTER_ALL, } from '../../Constant'
import { v4 as uuid } from 'uuid'

const initialState = {
    todos: [],
    filter: FILTER_ALL
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos.push({id: uuid(), title: payload, completed: false })
        },
        delTodo: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo.id != payload)
        },
        toggleTodo: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload) {
                    todo.completed = !todo.completed
                    return todo
                }
                return todo
            })
        },
        updateFilter: (state, { payload }) => {
            state.filter = payload
        }
    }
})

export const { addTodo, delTodo, toggleTodo, updateFilter } = todoSlice.actions
export default todoSlice.reducer