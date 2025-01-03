import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useUser from './useUser';
export default function useCart() {

    const user = useUser();

    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    });
    
    return [cart, refetch]
}