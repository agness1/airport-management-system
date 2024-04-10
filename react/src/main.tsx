import * as React from "react";
import * as ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Navigation from "./components/layout/navigation";
import SignInPage from "./pages/auth/SignInPage";
import FlightOperationsSupervisorPage from "./pages/Roles/FlightOperationsSupervisorPage";
import TerminalManagerPage from "./pages/Roles/TerminalManagerPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GroundManagerPage from "./pages/Roles/GroundManagerPage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import './index.css'
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/dashboard", element: <DashboardPage /> },
    { path: "/dashboard/flight-operator", element: <FlightOperationsSupervisorPage /> },
    { path: "/dashboard/terminal-manager", element: <TerminalManagerPage /> },
    { path: "/dashboard/ground-manager", element: <GroundManagerPage /> },
    { path: "*", element: <ErrorPage /> },
    { path: "signin", element: <SignInPage /> },
    { path: "register", element: <RegisterPage /> },

  ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation/>
         <RouterProvider router={router} />
  </React.StrictMode>,
)
