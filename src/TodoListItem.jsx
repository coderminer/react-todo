import React from 'react'
import { useDispatch } from 'react-redux'
import { delTodo, toggleTodo } from './store/todo/todoSlice'

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px'}} key={todo.id}>
      <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
      <span style={{ textDecorationLine: todo.completed ? 'line-through' : '' }}>{todo.title}</span>
      <button onClick={() => dispatch(delTodo(todo.id))}>删除</button>
    </li>
  )
}

export default TodoListItem