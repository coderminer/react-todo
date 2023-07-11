import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

function App() {
  return (
      <div style={{ maxWidth: '400px', border: '1px solid grey', padding: '20px'}}>
        <TodoForm />
        <TodoList  />
        <TodoFilter />
      </div>
  )
}

export default App
