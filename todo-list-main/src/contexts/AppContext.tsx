import React, { createContext, useState, ReactNode } from "react";
import { Todo } from "../types/Todo";

// Define the shape of our global context
interface AppContextType {
  // User state
  userName: string;
  setUserName: (name: string) => void;

  // Theme state
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;

  // Todos state
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// Create context with undefined default (will be provided by AppProvider)
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component that wraps the app
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string>("Guest");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React Context", completed: false },
    { id: 2, text: "Build Custom Hooks", completed: false },
  ]);

  const value: AppContextType = {
    userName,
    setUserName,
    theme,
    setTheme,
    todos,
    setTodos,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
