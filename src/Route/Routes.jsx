import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
        ]
      }
]);

export default routes;