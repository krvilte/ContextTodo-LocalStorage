import { createContext, useContext } from 'react';

//Creating Context
export const todoContext = createContext({
  todos: [
    {
      id: 1,
      title: 'Todo title',
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  todoComplete: (id) => {},
});

// Providing Context
export const TodoProvider = todoContext.Provider;

//To-do Context Hook
export function useTodo() {
  return useContext(todoContext);
}
