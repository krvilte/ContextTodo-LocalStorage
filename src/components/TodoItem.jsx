import React from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoItem() {
  const {todos} = useTodo()

  return (
    <div>
      TodoItem
    </div>
  )
}

export default TodoItem
