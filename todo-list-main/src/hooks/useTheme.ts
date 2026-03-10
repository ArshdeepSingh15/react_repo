import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

/**
 * Custom hook to access and update theme
 * @returns Object with current theme and toggleTheme function
 */
export const useTheme = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTheme must be used within an AppProvider");
  }

  const toggleTheme = () => {
    context.setTheme(context.theme === "light" ? "dark" : "light");
  };

  return {
    theme: context.theme,
    toggleTheme,
  };
};
