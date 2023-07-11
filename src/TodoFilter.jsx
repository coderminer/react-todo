import React from 'react'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_UNCOMPLETE } from './Constant'
import { useDispatch } from 'react-redux'
import { updateFilter } from './store/todo/todoSlice'

const TodoFilter = () => {
  const dispatch = useDispatch()


  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
        <button onClick={() => dispatch(updateFilter(FILTER_ALL))}>所有</button>
        <button onClick={() => dispatch(updateFilter(FILTER_COMPLETE ))}>已完成</button>
        <button onClick={() => dispatch(updateFilter(FILTER_UNCOMPLETE))}>未完成</button>
      </div>
  )
}

export default TodoFilter