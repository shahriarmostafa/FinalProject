import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useAdmin() {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: isAdmin = false, isLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res?.data?.admin
        }
    });    
    return [isAdmin]
}