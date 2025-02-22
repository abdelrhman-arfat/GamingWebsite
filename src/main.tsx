import "././style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UnFoundPages } from "./components/unFound/UnFoundPages";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { AllGames } from "./pages/AllGames";
import { Layout } from "./components/navbar/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <UnFoundPages />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "allgames", element: <AllGames /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
