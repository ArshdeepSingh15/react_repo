import React from "react";
import TasksManager from "./TasksManager";
import FocusTimer from "./FocusTimer";
import MotivationPanel from "./MotivationPanel";

const ProductivityDashboard: React.FC = () => {
  return (
    <div>
      <div className="card">
        <TasksManager />
      </div>

      <div className="card">
        <FocusTimer />
      </div>

      <div className="card">
        <MotivationPanel />
      </div>
    </div>
  );
};

export default ProductivityDashboard;
