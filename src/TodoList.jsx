import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_UNCOMPLETE } from './Constant'

const applyFilter = (state) => {
  const { todos, filter } = state
  switch(filter) {
    case FILTER_ALL:
      return todos
    case FILTER_COMPLETE:
      return todos.filter(todo => todo.completed)
    case FILTER_UNCOMPLETE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const TodoList = () => {
  const state = useSelector((state) => state.todo)
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