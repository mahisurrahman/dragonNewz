import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from "../Pages/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
        ]
      }
]);

export default routes;