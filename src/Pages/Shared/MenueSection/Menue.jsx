import { Link } from "react-router-dom";
import MenueItem from "./MenueItem";

export default function Menue({data, category}){

    
    return(
        <section>
            <div className="container">
                <div className="all-items d-flex flex-wrap justify-content-between">
                    {
                        data.map((x) => {
                            return (
                                <MenueItem key={x._id} data={x}></MenueItem>
                            )
                        })
                    }
                    <Link to={`/shop/${category}`}>
                        <button>Order from here</button>
                    </Link>
                </div>
            </div>
        </section>


    );
}