import { useEffect, useState } from "react";
import useAxiosSecure from './useAxiosSecure';

const useMenue = () => {
    const axiosSecure = useAxiosSecure()
    const [menueData, setMenueData] = useState([]);
        useEffect(() => {
            axiosSecure.get('/menue').then(res => {
                setMenueData(res.data)
            })
        }, [])
        return menueData;
}

export default useMenue;