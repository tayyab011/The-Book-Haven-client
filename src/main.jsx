import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./components/Home.jsx";

import AuthProvider from "./provider/AuthProvider.jsx";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import AddBook from "./components/AddBook.jsx";
import AllBooks from './components/AllBooks';
import BookDetails from './components/BookDetails';
import AddMyBooks from './components/AddMyBooks';
import PrivateRoute from "./Layout/PrivateRoute.jsx";
import UpdateBook from "./components/UpdateBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader:()=>fetch("http://localhost:5050/booksSorted"),
        element: <Home />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook/>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/boookDetails/:id",

        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myBook",
        element: (
          <PrivateRoute>
            <AddMyBooks />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
