import { createRoot } from "react-dom/client";
import "./index.css";

import HomePage from "./page/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
