import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/main"
import Home from "../Pages/Home/Home"
import OurMenue from "../Pages/OurMenue/Ourmenue";
import Shop from "../Pages/Shop/Shop";
import SignIn from "../Pages//Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Secret/secret";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome";
import Carts from "../Pages/Dashboard/Carts";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/ourMenue',
            element: <OurMenue></OurMenue>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/secret',
            element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
    ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'carts',
                element: <Carts></Carts> 
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default router;