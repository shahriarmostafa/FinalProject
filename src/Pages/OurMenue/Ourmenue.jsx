import useMenue from "../../Hooks/useMenue";
import Menue from "../Shared/MenueSection/Menue";
import Title from "../Shared/Title/Title";


export default function OurMenue(){
    const OfferedMenueData = useMenue().filter(x => x.category == 'offered');
    const DesseredMenueData = useMenue().filter(x => x.category == 'dessert');
    const pizzaMenueData = useMenue().filter(x => x.category == 'pizza');
    const saladsMenueData = useMenue().filter(x => x.category == 'salad');
    const soupMenueData = useMenue().filter(x => x.category == 'soup');

    
    return (
        <>
            <Title time="---Don't Miss It---" title="TODAY'S OFFER"></Title>
            <Menue category={'offered'} data={OfferedMenueData}></Menue>
            <Title time="---Don't Miss It---" title="DESSERT"></Title>
            <Menue  category={'dessert'} data={DesseredMenueData}></Menue>
            <Title time="---Don't Miss It---" title="PIZZA"></Title>
            <Menue  category={'pizza'} data={pizzaMenueData}></Menue>
            <Title time="---Don't Miss It---" title="SALADS"></Title>
            <Menue  category={'salad'} data={saladsMenueData}></Menue>
            <Title time="---Don't Miss It---" title="SOUP"></Title>
            <Menue  category={'soup'} data={soupMenueData}></Menue>



        </>
    )
}