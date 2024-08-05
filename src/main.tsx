import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";
import FindJobPage from "./pages/FindJobPage.tsx";
import JobDetailPage from "./pages/JobDetailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/find-job",
        element: <FindJobPage />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetailPage />,
      },
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
