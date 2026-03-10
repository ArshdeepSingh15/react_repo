// src/router/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import App from "../App";

// Pages
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import CounterPage from "../pages/CounterPage";

// Sir’s Components
import { FetchUsers } from "../components/FetchUsers";
import AxiosPosts from "../components/AxiosPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Your pages
      { path: "todos", element: <Todos /> },
      { path: "todos/:id", element: <TodoDetails /> },
      //{ path: "users", element: <Users /> },
      //{ path: "posts", element: <Posts /> },
      { path: "counter", element: <CounterPage /> },

      // Sir’s components
      { path: "fetch-users", element: <FetchUsers /> },
      { path: "axios-posts", element: <AxiosPosts /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
