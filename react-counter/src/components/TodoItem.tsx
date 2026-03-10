import React from "react";
import { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        padding: "4px 0"
      }}
    >
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>

      {onDelete && (
        <button
          style={{ marginLeft: "10px" }}
          onClick={(e) => {
            e.stopPropagation(); // prevent toggle
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;
