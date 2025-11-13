import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home";
import Error from "../components/Error";
import PlantsLayout from "../Layouts/PlantsLayout";
import PlantDetails from "../components/PlantDetails";
import Login from "../components/Login";
import Register from "../components/Register";

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
      {
        path: "/plants",
        element: <PlantsLayout></PlantsLayout>,
      },
      {
        path: "/plants/:id",
        element: <PlantDetails></PlantDetails>,
        loader: () => fetch("plants.json"),
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
