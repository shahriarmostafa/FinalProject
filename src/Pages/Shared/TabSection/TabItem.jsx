import { Link } from "react-router-dom";

export default function TabItem ({name, recipe, gotto, imgSrc}) {
    return (
        <div className="card my-3" style={{ width: '18rem'}}>
            <img className="card-img-top" src={imgSrc} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{recipe}</p>
                <Link to={gotto}className="btn btn-primary">Go to list</Link>
            </div>
        </div>
    );
}