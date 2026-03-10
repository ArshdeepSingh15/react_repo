import { createContext } from "react";
import { Todo } from "../types/Todo";

export type AppContextType = {
  user: string;
  setUser: (v: string) => void;

  theme: "light" | "dark";
  setTheme: (v: "light" | "dark") => void;

  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
