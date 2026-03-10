import React from "react";
import { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  theme: "light" | "dark";
}

function TodoItem({ todo, onToggle, onDelete, theme }: Props) {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#4a5568" : "#ffffff",
        color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
      }}
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{ flex: 1, cursor: "pointer" }}
      >
        {todo.text}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        style={{
          padding: "4px 8px",
          fontSize: "0.85rem",
          backgroundColor: "#e53e3e",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
