import { Link } from "react-router-dom";
import './nav.css';
export default function Nav () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Foodie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li><Link className="link-a" aria-current="page" to="/">Home</Link></li>
                        <li><Link className="link-a" to="/ourMenue">Our Menue</Link></li>
                        <li><Link className="link-a" to="/">Pricing</Link></li>
                        <li><Link className="link-a" to="/">Disabled</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 