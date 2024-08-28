import { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts/todoContext";


export default function App() {
  const [todos, setTodos] = useState([])
  
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
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, todoComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}