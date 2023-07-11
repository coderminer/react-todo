import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from './store/todo/todoSlice'

const TodoForm = () => {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(userInput)) 
      setUserInput('')
    }
  }
  return (
    <div>
        <input type="text" placeholder='请输入信息'
          style={{width: '100%'}}
          value={userInput}
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserInput(e.target.value)} />
      </div>
  )
}

export default TodoForm