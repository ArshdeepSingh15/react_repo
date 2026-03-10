import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";

const TasksManager: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([]);
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when component loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addTask = () => {
    const text = inputRef.current?.value.trim();
    if (!text) return;

    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    inputRef.current!.value = "";
  };

  const toggleTask = useCallback((id: number) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter(t => t.text.toLowerCase().includes(search.toLowerCase()));
  }, [tasks, search]);

  const score = useMemo(() => {
    const completed = tasks.filter(t => t.done).length;
    const remaining = tasks.length - completed;
    return completed * 10 - remaining * 2;
  }, [tasks]);

  return (
    <div className="widget">
      <h2>Tasks</h2>

      <input
        ref={inputRef}
        placeholder="New task"
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>

      <input
        className="searchBox"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="taskList">
        {filteredTasks.map(t => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className={t.done ? "done" : ""}
          >
            {t.text}
          </li>
        ))}
      </ul>

      <p className="score">Productivity Score: {score}</p>
    </div>
  );
};

export default TasksManager;
