import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function Cart({name, price, id, func}) {

    const handleDelete = () => {
        
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if(res.data.deletedCount == 1){
                            func();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
                  
                }
              });
    }


    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><FaEdit></FaEdit></td>
            <td><button onClick={() => handleDelete()} className="btn btn-danger"><FaDeleteLeft></FaDeleteLeft></button></td>
        </tr>
    )
}