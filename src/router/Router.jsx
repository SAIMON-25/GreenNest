import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home";
import Error from "../components/Error";
import PlantsLayout from "../Layouts/PlantsLayout";
import PlantDetails from "../components/PlantDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../private/PrivateRoute";
import Profile from "../components/Profile";
import ForgetPassword from "../components/ForgetPassword";

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
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("plants.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path:'/forgetpassword',
        element:<ForgetPassword></ForgetPassword>
      }
    ],
  },
]);

export default router;
