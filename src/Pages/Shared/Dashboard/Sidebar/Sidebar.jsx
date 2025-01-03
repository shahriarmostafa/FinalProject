import { NavLink } from "react-router-dom";
import './Sidebar.css';
import useAdmin from '../../../../Hooks/useAdmin';
export default function Sidebar() {

    const isAdmin = useAdmin();
    
    return (
        <nav className="sidebar">
            <ul>
                {
                    isAdmin? 
                    <>
                        <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink> </li>
                        <li><NavLink to="/dashboard/">Add Items</NavLink> </li>
                        <li><NavLink to="/dashboard/carts">Manage Items</NavLink> </li>
                        <li><NavLink to="/home">Manage Bookings</NavLink> </li>
                        <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to="/dashboard/adminHome">User Home</NavLink> </li>
                        <li><NavLink to="/dashboard/">Reservations</NavLink> </li>
                        <li><NavLink to="/dashboard/carts">My Cart</NavLink> </li>
                        <li><NavLink to="/home">Payment History</NavLink> </li>
                        <li><NavLink to="/home">Add Review</NavLink></li>
                        <li><NavLink to="/home">My Booking</NavLink></li>

                    </>
                }
            </ul>
        </nav>
    )
}