import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import { PRODUCTS_MOCKS } from "./mock/products.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCKS}/>,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
