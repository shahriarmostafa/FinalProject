import { Link } from "react-router-dom";
import './nav.css';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider.jsx/AuthProvider";
import { FaBell } from "react-icons/fa";
// icons

export default function Nav () {

    const {user, loading, logOut} = useContext(AuthContext)

    const submitHandler = () => {
        logOut()
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (



        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Foodie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav align-items-center">
                        <li><Link className="link-a" aria-current="page" to="/">Home</Link></li>
                        <li><Link className="link-a" to="/ourMenue">Our Menue</Link></li>
                        <li><Link className="link-a" to="/shop">Shop</Link></li>
                        
                            {user?
                            <>
                                <li><button onClick={submitHandler} className="btn btn-danger">Log Out</button></li>
                                <Link to="/cart" className="link-a m-2"><button className="btn btn-danger"><FaBell/>{32}</button></Link>
                            </>
                            : <>
                            <li><Link className="link-a" to="/signin">SignIn</Link></li>
                            <li><Link className="link-a" to="/SignUp">SignUp</Link></li>
                            </>
                            } 
                            
                             
        
                    </ul>
                </div>
            </div>
        </nav>
    )
} 