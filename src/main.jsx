import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import { PRODUCTS_MOCKS } from "./mock/products.mock";

import ErrorPage from "./views/Error/ErrorPage";
import Products from "./views/Products/Products";
import EmptyCart from "./views/EmptyCart/EmptyCart";
import Register from "./views/Register/Register";
import Pay from "./views/Pay/Pay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCKS}/>,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCKS}/>,
  },
  {
    path: "/register/:registerId",
    element: <Register data={PRODUCTS_MOCKS}/>,
  },
  {
    path: "/pay",
    element: <Pay />
  },
  {
    path: "/empty-cart",
    element: <EmptyCart/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
