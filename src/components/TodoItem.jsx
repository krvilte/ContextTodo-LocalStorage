import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoItem({todo}) {
  const [isEditable, setIsEditable] = useState(false)
  const [todoTitle, setTodoTitle] = useState(todo.title)
  const {editTodo, deleteTodo, todoComplete} = useTodo()

  const updateTodo = ()=>{
    editTodo(todo.id, {...todo ,title:todoTitle})
    setIsEditable(false)
  }

  const todoStatus = () => {
    todoComplete(todo.id)
  }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#b7ff95]" : "bg-[#ce8fff]"}`}
    >
      <input type="checkbox" 
             checked={todo.completed}
             onChange={todoStatus} />

      <input type="text" 
             className=""
             value={todoTitle} 
             onChange={(e) => setTodoTitle(e.target.value)}
             readOnly={!isEditable} />

      <button onClick={()=>{
        if(todo.completed) return
        if(isEditable){
          updateTodo()
        } else {
          setIsEditable((prev)=> !prev)
        }
      }}>{isEditable? "Save" : "Edit"}</button>

      <button onClick={()=>{
        deleteTodo(todo.id)
      }}>Delete</button>
    </div>
  )
}

export default TodoItem
