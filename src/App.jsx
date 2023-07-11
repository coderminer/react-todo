import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
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
  const [filter, setFilter] = useState('all')

  const createTodo = (userInput) => {
    if(!userInput) return
    setTodos((preTodos) => [
      {
        id: uuid(),
        title: `${todos.length + 1} - ${userInput}`,
        completed: false
      },
      ...preTodos
    ])
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
      <TodoForm createTodo={createTodo} />
      <TodoList filterTodos={filterTodos} handleComplete={handleComplete} handleDelete={handleDelete} />
      <TodoFilter setFilter={setFilter} />
    </div>
  )
}

export default App
