import Banner from "./Banner";
import Swip from "./Swip";
import Title from "./Title";
import './home.css'
export default function Home() {
    return (
        <>
            <Banner></Banner>
            <Title time="---From 11:00am to 10:00pm---" title="ORDER ONLINE"></Title>
            <Swip></Swip>
        </>
    );
}