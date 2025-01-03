import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function User({name, email, id, role, fun}) {

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {

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
                axiosSecure.delete(`/user/${id}`)
                .then(res => {
                    if(res.data.deletedCount == 1){
                        fun();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                          });
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
          })
        
    }

    const handleAdmin = (id) => {
        axiosSecure.patch(`/user/admin/${id}`)
        .then((res) => {
            if(res.data.modifiedCount == 1){
                fun();
                Swal.fire({
                    title: "Done!",
                    text: `${name} is admin now`,
                    icon: "success"                  
                })
            }
        })

    }


    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{id}</td>
            <td>
            {role == "Admin"? role : <button onClick={() => handleAdmin(id)} className="btn btn-success">Admin</button>}
            </td>
            <td><button onClick={() => handleDelete(id)} className="btn btn-danger"><FaDeleteLeft></FaDeleteLeft></button></td>
        </tr>
    )
}