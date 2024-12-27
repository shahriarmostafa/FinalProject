import Banner from "./Banner";
import Swip from "./Swip";
import Menue from "../Shared/MenueSection/Menue";
import './home.css'
import useMenue from "../../Hooks/useMenue";
import Title from "../Shared/Title/Title";
export default function Home() {

    const MenueData = useMenue().filter(x => x.category == 'popular');
    

    return (
        <>
            <Banner></Banner>
            <Swip></Swip>
            <Title time="---Check it out---" title="FROM OUR MENU"></Title>
            <Menue category={'popular'} data={MenueData}></Menue>
        </>
    );
}