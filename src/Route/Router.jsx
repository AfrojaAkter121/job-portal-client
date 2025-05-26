import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import JobDetails from "../Page/JobDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
      ]
    },
  ]);