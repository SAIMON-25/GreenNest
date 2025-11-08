import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
