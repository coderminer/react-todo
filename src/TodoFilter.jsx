import React from 'react'

const TodoFilter = ({ setFilter }) => {
  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
        <button onClick={() => setFilter('all')}>所有</button>
        <button onClick={() => setFilter('completed')}>已完成</button>
        <button onClick={() => setFilter('uncompleted')}>未完成</button>
      </div>
  )
}

export default TodoFilter