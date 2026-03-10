import React from "react";
import TasksManager from "./components/TasksManager";
import FocusTimer from "./components/FocusTimer";
import MotivationPanel from "./components/MotivationPanel";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Productivity Dashboard</h1>

      <div className="row">
        <TasksManager />
        <FocusTimer />
        <MotivationPanel />
      </div>
    </div>
  );
};

export default App;
