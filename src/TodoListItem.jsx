import React from 'react'

const TodoListItem = ({ todo, handleComplete, handleDelete }) => {
  return (
    <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px'}} key={todo.id}>
      <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={() => handleComplete(todo)} />
      <span style={{ textDecorationLine: todo.completed ? 'line-through' : '' }}>{todo.title}</span>
      <button onClick={() => handleDelete(todo)}>删除</button>
    </li>
  )
}

export default TodoListItem