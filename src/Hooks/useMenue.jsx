import { useEffect, useState } from "react";


const useMenue = () => {
    const [menueData, setMenueData] = useState([]);
        useEffect(() => {
            fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/menu.json")
            .then(res => res.json())
            .then((data) => {
                setMenueData(data);
            })
        }, [])
        return menueData;
}

export default useMenue;