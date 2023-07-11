import React from 'react'
import {TodoContext} from './context/TodoContext'
import { useContext } from 'react'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_UNCOMPLETE } from './Constant'

const TodoFilter = () => {
  const {updateFilter} = useContext(TodoContext)

  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
        <button onClick={() => updateFilter(FILTER_ALL)}>所有</button>
        <button onClick={() => updateFilter(FILTER_COMPLETE)}>已完成</button>
        <button onClick={() => updateFilter(FILTER_UNCOMPLETE)}>未完成</button>
      </div>
  )
}

export default TodoFilter