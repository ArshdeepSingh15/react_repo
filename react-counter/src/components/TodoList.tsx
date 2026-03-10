import React, { useState, useMemo, useCallback, useContext } from "react";
import { AppContext } from "../Providers/AppContext";
import TodoItem from "./TodoItem";

// @ts-ignore
import "../styles/app.css";

function TodoList() {
  const { todos, addTodo, toggleTodo } = useContext(AppContext);  // ⭐ GLOBAL CONTEXT

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  // Add new todo
  const handleAdd = useCallback(() => {
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  }, [input, addTodo]);

  // Filter todos
  const filteredTodos = useMemo(() => {
    return todos.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  return (
    <div className="card" style={{ marginTop: 20 }}>
      <h3>Todo List (useMemo + Global Context)</h3>

      <input
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <br /><br />

      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
