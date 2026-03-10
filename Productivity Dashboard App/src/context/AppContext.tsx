import React, { createContext } from "react";

interface AppContextValue {
  theme: "light" | "dark";
  username: string;
  notifications: string[];
}

const defaultValue: AppContextValue = {
  theme: "light",
  username: "",
  notifications: [],
};

export const AppContext = createContext<AppContextValue>(defaultValue);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={defaultValue}>
      {children}
    </AppContext.Provider>
  );
};
