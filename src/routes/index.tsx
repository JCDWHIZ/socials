import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import { lazy } from "react";
import UnAuthenticatedLayout from "layouts/UnAuthenticatedLayout";

const Home = lazy(() => import("modules/Authenticated/Home"));
const User = lazy(() => import("modules/Authenticated/User"));

const Login = lazy(() => import("modules/Unauthenticated/login"));
const Register = lazy(() => import("modules/Unauthenticated/register"));
interface Props {
  children?: React.ReactNode;
}

const MainBody = ({ children }: Props) => {
  return (
    <main className={`h-dvh w-full font-dm_sans`}>
      {children ? children : <Outlet />}
    </main>
  );
};

const MainRoutes = () => {
  const modules = createBrowserRouter([
    {
      element: <MainBody />,
      children: [
        {
          path: "/",
          element: <AuthenticatedLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "user/:id",
              element: <User />,
            },
          ],
        },
        {
          path: "/auth",
          element: <UnAuthenticatedLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default MainRoutes;
