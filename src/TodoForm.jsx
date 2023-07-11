import React from 'react'
import { useState } from 'react'
import {TodoContext} from './context/TodoContext'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid'

const TodoForm = () => {
  const [userInput, setUserInput] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(userInput)
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