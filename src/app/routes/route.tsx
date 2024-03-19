import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/admin-layout"));

//public
const LoginPage = lazy(() => import("../pages/LoginPage"));

//admin
const UserManagePage = lazy(() => import("../pages/UserManagePage"));
const ProjectManagePage = lazy(() => import("../pages/ProjectManagePage"));
const VerifyUserPage = lazy(() => import("../pages/UserVerifyPage"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetailAdminPage"));
const UserDetailAdminPage = lazy(
  () => import("../pages/FreelancerDetailAdminPage"),
);

const PrivateRoute = lazy(() => import("./proute"));
const TestPage = lazy(() => import("../pages/TestPage"));
const ErrorPage = lazy(() => import("../pages/404Page"));

const Template = lazy(() => import("../pages/template"));

const AdminLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={true}>
              <Navigate to={"/admin"} />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<></>}>
            <TestPage />
          </Suspense>
        ),
      },
      {
        path: "template",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
              <Template />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
          <AdminLayout />
        </PrivateRoute>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"users"} />,
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<></>}>
            <UserManagePage />
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        element: (
          <Suspense fallback={<></>}>
            <UserDetailAdminPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<></>}>
            <ProjectManagePage />
          </Suspense>
        ),
      },
      {
        path: "projects/:projectId",
        element: (
          <Suspense fallback={<></>}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: "verify-user",
        element: (
          <Suspense fallback={<></>}>
            <VerifyUserPage />
          </Suspense>
        ),
      },
      {
        path: "verify-user/:userId",
        element: (
          <Suspense fallback={<></>}>
            <UserDetailAdminPage verify={true} />
          </Suspense>
        ),
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<></>}>
            <TestPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={true}>
          <LoginPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);
