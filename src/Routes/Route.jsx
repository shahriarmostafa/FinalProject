import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/main"
import Home from "../Pages/Home/Home"
import OurMenue from "../Pages/OurMenue/Ourmenue";
import Shop from "../Pages/Shop/Shop";
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
        }
    ]
    }
])

export default router;