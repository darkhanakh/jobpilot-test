import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "normalize.css";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";

function FindJob() {
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/find-job", element: <FindJob /> },
      { path: "/employers", element: <div></div> },
      { path: "/candidates", element: <div></div> },
      { path: "/pricing-plans", element: <div></div> },
      { path: "/customer-supports", element: <div></div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
