// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { AppProvider } from "./context"; // 🔥 IMPORTANT
import { Dashboard } from "./pages/Dashboard";
import { Tasks } from "./pages/Tasks";
import { Notes } from "./pages/Notes";
import { Settings } from "./pages/Settings";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
