import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import PropertyDetails from "./components/PropertyDetails.jsx";

// Define your routes with dynamic ID path for Property Details
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/property-details/:id", // Use `:id` to capture dynamic ID value
    element: <PropertyDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
