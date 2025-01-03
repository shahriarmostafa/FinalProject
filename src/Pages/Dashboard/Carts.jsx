import useCart from "../../Hooks/useCart";
import Cart from "./Cart";
import './Dashboard.css';


export default function Carts() {

    const [cart, refetch] = useCart(); 
       
    return (
        <section className="db-carts">
            <div className="container">
            <div className="carts">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                cart.map(x=>{
                                    return <Cart func={refetch} id={x._id} key={x._id} name={x.item.name} price={x.item.price}></Cart>
                                })
                            }
                        </tbody>
                    </table>
            </div>
        </div>
        </section>
    )
}