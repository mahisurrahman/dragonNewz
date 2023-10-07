import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import Login from './../Pages/Login';

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
        ]
      }
]);

export default routes;