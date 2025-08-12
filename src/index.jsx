import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutRoot from "./components/LayoutRoot";
import HomePage from "./components/HomePage";
import UserDetail from "./components/UserDetail";
import UserForm from "./components/UserForm";
import SignIn from "./components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/user/:id/view",
        element: <UserDetail />,
      },
      {
        path: "/user/create",
        element: <UserForm />,
      },
      {
        path: "/user/:id/edit",
        element: <UserForm />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
