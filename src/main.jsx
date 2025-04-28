import { createRoot } from "react-dom/client";
import "./index.css";

import HomePage from "./page/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import Dashboard from "./page/Dashboard";
import ContactDashboard from "./page/ContactDashboard";

const route = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about-us",
    Component: AboutPage,
  },
  {
    path: "/contact-us",
    Component: ContactPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "contact-dashboard",
        Component: ContactDashboard,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
