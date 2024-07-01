import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../pages/Login";
import { authHandler } from "../utils/auth-handler";
import Layout from "../components/Layout";
import ProtectedRoute from "./protected-routes";

const userLoggedIn = () => {
  if (authHandler()) {
    return true;
  } else {
    return false;
  }
};

console.log(userLoggedIn());

export const AppRoute = createBrowserRouter([
  // Public Routes
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    loader: () => (userLoggedIn() ? null : redirect("/login")),
    // @ts-expect-error ts(2322)
    async lazy() {
      const Layout = await import("../components/Layout");
      return {
        default: Layout.default,
      };
    },
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },

      // Protected Routes
      {
        path: "/home",
        element: <ProtectedRoute children={<Home />} />,
      },
      {
        path: "/about",
        element: <ProtectedRoute children={<About />} />,
      },
      {
        path: "/contact",
        element: <ProtectedRoute children={<Contact />} />,
      },
    ],
  },
]);
