import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home-page/Home";
import DefaultLayout from "./layouts/default/DefaultLayout";
import SignIn from "./pages/sign-in/SignIn";
import NotFound from "./pages/not-found/NotFound";
import AllServices from "./pages/services/AllServices";
import ServiceDetail from "./pages/services/Service";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthRoute from "./components/auth-route/AuthRoute";
import UserProfile from "./pages/profile/Profile";


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
  },
  {
    path: "/services",
    element:
      <AuthRoute>
        <AllServices />
      </AuthRoute>
  },
  {
    path: "/services/:id",
    element: <AuthRoute><ServiceDetail /></AuthRoute>,
    errorElement: <NotFound />
  },
  {
    path: "/profile",
    element: <AuthRoute><UserProfile /></AuthRoute>
  }
  
])

createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </DefaultLayout>
);
