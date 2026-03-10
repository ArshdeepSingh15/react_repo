import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a todo..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
 