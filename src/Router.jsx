import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
