import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";

import App from "./pages/App";
import Homepage from "./pages/Homepage";
import Crimepage from "./pages/Crimepage";
import LoginForm from "./pages/Login";
import AddCrime from "./pages/AddCrime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/crime",
        element: <Crimepage />,
      },
      {
        path: "/add-crime",
        element: <AddCrime />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
