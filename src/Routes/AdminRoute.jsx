import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";

export default function AdminRoute({children}){
    const {user, loading} = useContext(AuthContext);
    const {isAdmin, isLoading} = useAdmin();

    if(loading || isLoading){
        return "Loading"
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/"> </Navigate>
}