import React, { useState, useMemo, useContext } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../providers/TodoContext";
// @ts-ignore
import "../styles/app.css";

function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodo } = useContext(TodoContext);

  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  // ⭐ Add new todo
  function handleAdd() {
    if (input.trim() === "") return;
    addTodo(input.trim());
    setInput("");
  }

  // ⭐ useMemo → only recompute filtered todos when `todos` or `search` changes
  const filteredTodos = useMemo(() => {
    return todos.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  return (
    <div className="card">
      <h3>Todo List (useMemo Example)</h3>

      {/* Add todo */}
      <input
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <br />
      <br />

      {/* Search */}
      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtered List */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={removeTodo}
            theme="light"
          />

        ))}
      </ul>
    </div>
  );
}

export default TodoList;
