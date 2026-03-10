import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { AppContextProvider } from "./Providers/AppContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </React.StrictMode>
);
