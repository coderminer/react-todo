import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

import { TodoContextProvider } from './context/TodoContext'

function App() {
  return (
    <TodoContextProvider>
      <div style={{ maxWidth: '400px', border: '1px solid grey', padding: '20px'}}>
        <TodoForm />
        <TodoList  />
        <TodoFilter />
      </div>
    </TodoContextProvider>
  )
}

export default App
