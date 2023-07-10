import React from 'react'
import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [userInput, setUserInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createTodo(userInput)
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