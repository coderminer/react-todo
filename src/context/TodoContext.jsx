import { useReducer } from "react";
import { createContext } from "react";
import { todoReducer } from '../reducer/TodoReducer'
import { ADD_TODO_ITEM, DEL_TODO_ITEM, TOGGLE_TODO_ITEM, UPDATE_FILTER } from '../Constant'

const initState = {
    todos: [],
    filter: 'all'
}

export const TodoContext = createContext(null)

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initState)
    const value = {
        state,
        addTodo: (todoTitle) => dispatch({ type: ADD_TODO_ITEM, payload: todoTitle }),
        delTodo: (todoId) => dispatch({ type: DEL_TODO_ITEM, payload: todoId }),
        toggleTodo: (todoId) => dispatch({ type: TOGGLE_TODO_ITEM, payload: todoId }),
        updateFilter: (filter) => dispatch({ type: UPDATE_FILTER, payload: filter })
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}