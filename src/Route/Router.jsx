import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import JobDetails from "../Page/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Component/JobApply";
import MyApplications from "../Page/MyApplications";

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
                path:'/jobApply/:id',
                Component: () => (
                    <PrivateRoute>
                        <JobApply></JobApply>
                    </PrivateRoute>
                )
            },
            {
                path: '/myApplications',
                element :
                    <PrivateRoute>
                        <MyApplications></MyApplications>
                    </PrivateRoute>
                
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