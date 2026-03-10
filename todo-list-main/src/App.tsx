import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
// @ts-ignore
import "./styles/app.css";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: theme === "dark" ? "#1a202c" : "#f7fbff",
        minHeight: "100vh",
        transition: "background-color 0.3s ease",
      }}
    >
      <Navbar />

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            color: theme === "dark" ? "#e2e8f0" : "#0f2540",
            margin: 0,
          }}
        >
          Productivity Dashboard
        </h1>

        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: theme === "dark" ? "#4a5568" : "#e2e8f0",
            color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <Outlet />
    </div>
  );
};

export default App;
