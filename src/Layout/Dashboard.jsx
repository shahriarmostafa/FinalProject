import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Dashboard/Sidebar/Sidebar";

export default function Dashboard (){
    return (
        <div className="d-flex">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    )
}