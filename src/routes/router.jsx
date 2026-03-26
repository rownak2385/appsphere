import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AppDetailsPage from "../pages/AppDetailsPage";
import AppsPage from "../pages/AppsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import InstallationPage from "../pages/InstallationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <AppsPage />,
      },
      {
        path: "apps/:id",
        element: <AppDetailsPage />,
      },
      {
        path: "installation",
        element: <InstallationPage />,
      },
    ],
  },
]);

export default router;
