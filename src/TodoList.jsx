import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ filterTodos, handleComplete, handleDelete }) => {
  return (
    <ul style={{listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', marginBottom: '10px'}}>
        {
          filterTodos.map(todo => {
            return (
              <TodoListItem key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
            )
          })
        }
    </ul>
  )
}

export default TodoList