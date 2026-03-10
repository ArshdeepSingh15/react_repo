import React, { useState } from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "../types/Todo";

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};