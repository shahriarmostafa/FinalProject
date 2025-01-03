import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

export default function TabItem ({name, recipe, gotto, imgSrc, price}) {
    const user = useUser()
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();

    
    const userName = user.displayName;
    const userEmail = user.email;

    const [cart, refetch] = useCart()

    
    
    
    const handleAddToCard = item => {
        if(user && user.email){
            axiosSecure.post('/carts', {item, userEmail, userName})
            .then(res => {
                refetch();
                Swal.fire({
                    title: "<strong>Item Added to Cart</strong>",
                    icon: "success",
                    text: "View Cart?",
                    showCancelButton: true
                }).then(result => {
                    if(result.isConfirmed){
                        navigate('/carts')
                    }
                })
            })
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
                <button onClick={() => handleAddToCard({name, recipe, gotto, imgSrc, price})} className="btn btn-success">Add To Card</button>
            </div>
        </div>
    );
}