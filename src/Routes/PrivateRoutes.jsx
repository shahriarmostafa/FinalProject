import { useContext } from "react";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



export default function PrivateRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return(
            "Loading"
        )
    }

    if (user){
        return children
    }
    return <Navigate state={{from: location}} to="/signin"></Navigate>
}