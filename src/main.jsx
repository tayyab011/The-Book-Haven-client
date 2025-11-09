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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/allBooks",
        element: <AllBooks/>,
      },
      {
        path: "/boookDetails/:id",
   loader:({params})=> fetch(`http://localhost:5050/books/${params.id}`),
        element: <BookDetails/>,
      },
      {
        path: "/myBook",
        element: <AddMyBooks/>,
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
