import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Repositories } from "./pages/RepositoriesPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/repositories",
    element: <Repositories />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
