import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { AppContext } from "./Providers/AppContext";
import "./styles/app.css";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />

      <button onClick={toggleTheme} style={{ marginBottom: 20 }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {children}
    </div>
  );
};

export default function App() {
  return (
    <ThemeWrapper>
      <Outlet />
    </ThemeWrapper>
  );
}
