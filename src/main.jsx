import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home-page/Home";
import DefaultLayout from "./layouts/default/DefaultLayout";
import SignIn from "./pages/sign-in/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign_in",
    element: <SignIn />
  }
])

createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <RouterProvider router={router} />
  </DefaultLayout>
);
