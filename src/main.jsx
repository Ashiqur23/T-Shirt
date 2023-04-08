import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Main from "./component/Layout/Main";
import OrderReview from "./component/OrderReview/OrderReview";
import Granpa from "./component/Granpa/Granpa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("TShirts.json"),
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: 'grandpa',
        element: <Granpa></Granpa>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
