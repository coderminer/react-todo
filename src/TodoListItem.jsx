import React from 'react'
import { useContext } from 'react'
import {TodoContext} from './context/TodoContext'

const TodoListItem = ({ todo }) => {
  const { delTodo, toggleTodo } = useContext(TodoContext)

  return (
    <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px'}} key={todo.id}>
      <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span style={{ textDecorationLine: todo.completed ? 'line-through' : '' }}>{todo.title}</span>
      <button onClick={() => delTodo(todo.id)}>删除</button>
    </li>
  )
}

export default TodoListItem