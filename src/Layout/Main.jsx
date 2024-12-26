import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/nav";

export default function Main() {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}