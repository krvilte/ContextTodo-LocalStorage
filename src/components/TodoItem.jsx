import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoItem({todo}) {
  const [isEditable, setIsEditable] = useState(false)
  const [todoTitle, setTodoTitle] = useState(todo.title)
  const {editTodo, deleteTodo, todoComplete} = useTodo()

  const updateTodo = ()=>{
    editTodo(todo.id, {...todo , title:todoTitle})
    setIsEditable(false)
  }

  const todoStatus = () => {
    todoComplete(todo.id)
  }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#b7ff95] " : "bg-[#ce8fff]"}`}
    >
      <input type="checkbox" 
             checked={todo.completed}
             onChange={todoStatus} />

      <input type="text" 
             className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : "no-underline"} `}
             value={todoTitle} 
             onChange={(e) => setTodoTitle(e.target.value)}
             readOnly={!isEditable} />

      <button className='inline-flex w-10 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
              onClick={()=>{
              if(todo.completed) return
              if(isEditable){
                updateTodo()
              } else {
                setIsEditable((prev)=> !prev)
              }
              }}>{isEditable? "Save" : "Edit"}</button>

      <button className='inline-flex w-14 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-500 text-white hover:bg-red-700 shrink-0'
              onClick={()=>{
                deleteTodo(todo.id)
              }}>Delete</button>
    </div>
  )
}

export default TodoItem
