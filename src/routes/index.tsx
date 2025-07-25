import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import { lazy } from "react";

const Home = lazy(() => import("modules/Home"));

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
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default MainRoutes;
