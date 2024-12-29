import { useEffect, useState } from "react";


const useMenue = () => {
    const [menueData, setMenueData] = useState([]);
        useEffect(() => {
            fetch("http://localhost:5000/menue")
            .then(res => res.json())
            .then((data) => {
                setMenueData(data);
            })
        }, [])
        return menueData;
}

export default useMenue;