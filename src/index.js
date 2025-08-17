import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/App/App";
import ProductsDetal from "./pages/ProductsDetal/ProductsDetal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },

      {
        path: "/products/:productId",
        element: <ProductsDetal />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
