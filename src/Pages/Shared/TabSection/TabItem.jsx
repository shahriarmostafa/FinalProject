import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import Swal from "sweetalert2";


export default function TabItem ({name, recipe, gotto, imgSrc}) {
    const user = useUser()

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCard = item => {
        // fetch("http://localhost:5000/carts", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(item)
        // })
        if(user && useReducer.email){
            //ddoododo
        }
        else{
            Swal.fire({
                title: "<strong>Continue Creating account</strong>",
                icon: "info",
                text: "Let's Continue the journey",
                showCancelButton: true,
            })
            .then(result => {
                if(result.isConfirmed){
                    navigate("/signin", {state: {from: location}})
                }
                
            })
        }
        
    }

    return (
        <div className="card my-3" style={{ width: '18rem'}}>
            <img className="card-img-top" src={imgSrc} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{recipe}</p>
                <button onClick={() => handleAddToCard({name, recipe, gotto, imgSrc})} className="btn btn-success">Add To Card</button>
            </div>
        </div>
    );
}