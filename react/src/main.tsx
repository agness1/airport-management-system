import * as React from "react";
import * as ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Navigation from "./components/layout/navigation";
import SignInPage from "./pages/auth/SignInPage";
import FlightOperationsSupervisorPage from "./pages/Roles/FlightOperationsSupervisorPage";
import TerminalMenagerPage from "./pages/Roles/TerminalMenagerPage";
import { FlightOperarionProvider } from "./contexts/ContextProvider";
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
    { path: "/dashboard/terminal-menager", element: <TerminalMenagerPage /> },
    { path: "*", element: <ErrorPage /> },
    { path: "signin", element: <SignInPage /> },

  ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation/>
       <FlightOperarionProvider>
         <RouterProvider router={router} />
       </FlightOperarionProvider>
  </React.StrictMode>,
)
