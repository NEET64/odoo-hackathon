import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";

import App from "./pages/App";
import Homepage from "./pages/Homepage";
import Crimepage from "./pages/Crimepage";
import LoginForm from "./pages/Login";
import ReportCrime from "./pages/ReportCrime";
import { Toaster } from "sonner";

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
        path: "/report-crime",
        element: <ReportCrime />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
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
