import React from 'react'
import TodoListItem from './TodoListItem'
import { useContext } from 'react'
import {TodoContext} from './context/TodoContext'


const applyFilter = (state) => {
  const { todos, filter } = state
  switch(filter) {
    case 'all':
      return todos
    case 'complete':
      return todos.filter(todo => todo.completed)
    case 'uncomplete':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const TodoList = () => {
  const {state} = useContext(TodoContext)
  const filterTodos = applyFilter(state)

  return (
    <ul style={{listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', marginBottom: '10px'}}>
        {
          filterTodos.map(todo => {
            return (
              <TodoListItem key={todo.id} todo={todo} />
            )
          })
        }
    </ul>
  )
}

export default TodoList