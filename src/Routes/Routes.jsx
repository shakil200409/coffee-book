import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import CoffeeContainer from "../Components/CoffeeContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "category/:category",
            element: <CoffeeContainer />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
