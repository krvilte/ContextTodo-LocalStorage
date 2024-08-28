import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e)=>{
    e.preventDefault();
    if(!todo)return
    addTodo({todo, completed: fasle})

  }
  return (
    <div>
      <form onSubmit={add} action="#" className='flex'>
        <input type="text" 
               name="todo-form"
               value={todo}
               placeholder='Write Todo...'
               className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' 
               onChange={(e)=>{
                setTodo(e.target.value)
               }}/>
        <button className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0' type="submit">Add+</button>
      </form>
    </div>
  )
}

export default TodoForm
