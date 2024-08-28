import { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts/todoContext";


export default function App() {
  const todos = [todos, setTodos] = useState([])
  
  // Add todo
  const addTodo = (todo)=>{
    setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])
  }

  // Edit Todo
  const editTodo = (id, todo)=>{
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // Delete Todo
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id ))
  }

  // Todo Status
  const todoComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, complete: !prevTodo.completed} : prevTodo))
  }
  return (
    <div>
      <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, todoComplete}}>
      </TodoProvider>
    </div>
  )
}