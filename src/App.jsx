import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const applyFilter = (todos, filter) => {
  switch(filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'uncompleted':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

function App() {
  const [todos, setTodos] = useState([])
  const [userInput, setUserInput] = useState('')
  const [filter, setFilter] = useState('all')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createTodo()
    }
  }

  const createTodo = () => {
    if (!userInput) return
    setTodos((preTodos) => [
      {
        id: uuid(),
        title: `${todos.length + 1} - ${userInput}`,
        completed: false
      },
      ...preTodos
    ])
    setUserInput('')
  }

  const filterTodos = applyFilter(todos, filter)

  const handleDelete = (todo) => {
    setTodos((preTodos) => preTodos.filter(item => item.id !== todo.id))
  }

  const handleComplete = (todo) => {
    setTodos((preTodos) => preTodos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <div style={{ maxWidth: '400px', border: '1px solid grey', padding: '20px'}}>
      <div>
        <input type="text" placeholder='请输入信息'
          style={{width: '100%'}}
          value={userInput}
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserInput(e.target.value)} />
      </div>
      <ul style={{listStyle: 'none', margin: 0, padding: 0, marginTop: '10px', marginBottom: '10px'}}>
        {
          filterTodos.map(todo => {
            return (
              <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px'}} key={todo.id}>
                <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={() => handleComplete(todo)} />
                <span style={{ textDecorationLine: todo.completed ? 'line-through' : '' }}>{todo.title}</span>
                <button onClick={() => handleDelete(todo)}>删除</button>
              </li>
            )
          })
        }
      </ul>
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        <button onClick={() => setFilter('all')}>所有</button>
        <button onClick={() => setFilter('completed')}>已完成</button>
        <button onClick={() => setFilter('uncompleted')}>未完成</button>
      </div>
    </div>
  )
}

export default App
