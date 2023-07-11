import { ADD_TODO_ITEM, DEL_TODO_ITEM, TOGGLE_TODO_ITEM, UPDATE_FILTER } from '../Constant'
import { v4 as uuid } from 'uuid'

export const todoReducer = (state, { type, payload }) => {
    switch(type) {
        case ADD_TODO_ITEM:
            {
                const todos = [...state.todos, { id: uuid(), title: payload, completed: false }]
                return {
                    ...state,
                    todos
                }
            }
        case DEL_TODO_ITEM:
            {
                const todos = state.todos.filter(todo => todo.id != payload)
                return {
                    ...state,
                    todos
                }
            }
        case TOGGLE_TODO_ITEM:
            {
                const todos = state.todos.map(todo => {
                    if (todo.id === payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                })

                return {
                    ...state,
                    todos
                }
            }
        case UPDATE_FILTER:
            return {
                ...state,
                filter: payload
            }
        default:
            return state
    }
}