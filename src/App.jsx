import { useState, useMemo } from 'react'
import TodoCount from './TodoCount'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import { v4 as uuid } from 'uuid'

function App() {
  const [count, setCount] = useState(0)
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
    setCount(todos.length)
  }

  const filterTodos = useMemo(() => {
    let result;
    switch(filter) {
      case 'all':
        result = todos.filter(todo => todo != null)
        setCount(result.length)
        return result
      case 'completed':
        result =  todos.filter(todo => todo.completed)
        setCount(result.length)
        return result
      case 'uncompleted':
        result = todos.filter(todo => !todo.completed)
        setCount(result.length)
        return result
      default:
        result = todos.filter(todo => todo != null)
        setCount(result.length)
        return result
    }
    
  }, [todos, filter])

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
      <TodoCount count={count} />
      <TodoForm createTodo={createTodo} />
      <TodoList filterTodos={filterTodos} handleComplete={handleComplete} handleDelete={handleDelete} />
      <TodoFilter setFilter={setFilter} />
    </div>
  )
}

export default App
