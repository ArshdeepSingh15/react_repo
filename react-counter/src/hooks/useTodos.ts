import { useContext } from "react";
import { AppContext } from "../Providers/AppContext";

export const useTodos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(AppContext);
  return { todos, addTodo, toggleTodo, deleteTodo };
};
