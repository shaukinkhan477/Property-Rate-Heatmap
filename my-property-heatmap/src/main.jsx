import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertiesSection from "./components/PropertiesSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    // children: [

    // ],
  },
  {
    path: "/property-details/id",
    element: <PropertiesSection />,
    // loader: teamLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
