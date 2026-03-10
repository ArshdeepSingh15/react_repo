import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { Todo } from "../types/Todo";

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  // USER
  const [user, setUser] = useState<string>("");

  // THEME
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // TODOS
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Update body class for theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
