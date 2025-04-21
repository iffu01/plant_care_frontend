import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import HomePage from "./HomePage";
const route = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
