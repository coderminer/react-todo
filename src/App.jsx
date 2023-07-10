import { useState } from 'react'
import TodoCount from './TodoCount'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'


function App() {

  return (
    <>
      <TodoCount />
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </>
  )
}

export default App
