import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";

import App from "./pages/App";
import Homepage from "./pages/Homepage";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      gap="8"
      offset="20px"
      position="top-center"
      theme={"light"}
      richColors
    />
    <RouterProvider router={router} />
  </>
);
