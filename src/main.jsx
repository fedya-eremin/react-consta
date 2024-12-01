import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home-page/Home";
import DefaultLayout from "./layouts/default/DefaultLayout";
import SignIn from "./pages/sign-in/SignIn";
import NotFound from "./pages/not-found/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign_in",
    element: <SignIn />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <RouterProvider router={router} />
  </DefaultLayout>
);