import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
AOS.init();
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import BookDetails from "./Components/BookDetails";
import ErrorPage from "./Components/ErrorPage";
import Author from "./Pages/Author";
import Contact from "./Pages/Contact";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/list",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/author",
        element: <Author></Author>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>
);
